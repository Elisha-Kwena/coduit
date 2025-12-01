// src/api/client.ts
type ApiOptions = RequestInit & {
  auth?: boolean;
  rawResponse?: boolean;
};

export const api = async <T = any>(
  endpoint: string,
  {
    auth = true,
    rawResponse = false,
    headers: customHeaders,
    ...options
  }: ApiOptions = {}
): Promise<T> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`;

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(auth && token ? { Authorization: `Bearer ${token}` } : {}),
    ...customHeaders,
  };

  const config: RequestInit = {
    ...options,
    headers,
    credentials: "include",
    cache: "no-store",
  };

  let response: Response;

  try {
    response = await fetch(url, config);
  } catch (err: any) {
    console.error("API FETCH FAILED:", err);
    console.log("Trying to reach:", url);
    throw new Error(`Cannot reach backend. Is it running on ${process.env.NEXT_PUBLIC_API_URL}?`);
  }

  // HANDLE ERRORS — SHOW REAL DJANGO MESSAGES
  if (!response.ok) {
    let errorMessage = "Something went wrong";
    let errorData: any = {};

    // Try to parse JSON error response
    try {
      errorData = await response.json();
    } catch {
      // If not JSON, use status text
      errorMessage = response.statusText || errorMessage;
    }

    // EXTRACT THE REAL MESSAGE FROM DJANGO
    if (errorData.non_field_errors?.[0]) {
      errorMessage = errorData.non_field_errors[0];
    } else if (errorData.email?.[0]) {
      errorMessage = errorData.email[0];
    } else if (errorData.password?.[0]) {
      errorMessage = errorData.password[0];
    } else if (errorData.detail) {
      errorMessage = errorData.detail;
    } else if (typeof errorData === "string") {
      errorMessage = errorData;
    }

    // Auto logout on 401
    if (response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login?expired=true";
    }

    const error = new Error(errorMessage) as any;
    error.status = response.status;
    error.data = errorData;
    throw error;
  }

  // SUCCESS — return data
  if (rawResponse) return response as any;

  try {
    return (await response.json()) as T;
  } catch {
    return {} as T;
  }
};