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

  // FIX: Read token on EVERY call, not once at import
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
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    let errorMessage = "Something went wrong";
    let errorData: any = {};

    try {
      errorData = await response.json();
    } catch {}

    if (response.status === 401) {
      localStorage.removeItem("token");
      if (typeof window !== "undefined") {
        window.location.href = "/login?expired=true";
      }
    }

    errorMessage = errorData.detail || errorData.non_field_errors?.[0] || response.statusText;

    const error = new Error(errorMessage) as any;
    error.status = response.status;
    error.data = errorData;
    throw error;
  }

  if (rawResponse) return response as any;
  try {
    return await response.json();
  } catch {
    return {} as T;
  }
};

        // login: async (data:LoginData) =>{
        //     const res = await api<{
        //         access?:string;
        //         token?:string;
        //         key?:string;
        //         auth_token?:string;
        //         user?: any
        //     }>("/auth/login/",{
        //         method:"POST",
        //         body:JSON.stringify(data),
        //         auth:false
        //     });

        //     const token = res.access || res.token || res.key || res.key;

        //     if (token) {
        //         localStorage.setItem("token",token)
        //     }else{
        //         console.log("Login succeded but no token received:", res)
        //     }

        //     return res;
        // },