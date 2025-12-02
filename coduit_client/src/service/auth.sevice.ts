import { api } from "@/api/client";

export type RegisterData = {
    username:string;
    handlename:string;
    email:string;
    password:string;
    password_confirm:string
}

export type LoginData = {
    email:string;
    password:string
}


export const authService = {
    register: async (data:RegisterData) =>
        api("/api/auth/register/",{
            method:"POST",
            body:JSON.stringify(data),
            auth:false,
        }),
    login: async (data: LoginData) => {
      console.log("Attempting login with:", data.email);
    
      const res = await api<{ access: string; refresh: string }>("/api/token/", {
        method: "POST",
        body: JSON.stringify(data),
        auth: false,
      });
  
      // Success! Log the tokens
      console.log("Login successful!");
      console.log("Access token:", res.access);
      console.log("Refresh token:", res.refresh);
  
      // Save to localStorage
      localStorage.setItem("token", res.access);
  
      console.log("Token saved to localStorage:", localStorage.getItem("token"));
  
      return res;
    },
    


    logout : () =>{
        localStorage.removeItem("token");
        window.location.href="/"
    },
    requestPasswordReset : (email:string) =>
        api("api/auth/password-reset/",{
            method:"POST",
            body:JSON.stringify({email})
        }),
    confirmPasswordReset: (token:string, email:string, password:string)=>
        api("api/auth/password-reset/confirm/",{
            method:"POST",
            body:JSON.stringify({token,email,password,password_confirm:password})
        }),
    
    verifyEmail: (token:string,email:string) =>
        api(`api/auth/verify-email?token=${token}&email=${email}`),
    resendVerification : (email:string) =>
        api("api/auth/resend-verification/",{
            method:"POST",
            body:JSON.stringify({email}),
        }),
}