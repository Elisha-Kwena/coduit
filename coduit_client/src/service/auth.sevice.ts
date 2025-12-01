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
        api("/auth/register/",{
            method:"POST",
            body:JSON.stringify(data)
        }),
    
        login: async (data:LoginData) =>{
            const res = await api<{token:string; user?: any}>("/auth/login/",{
                method:"POST",
                body:JSON.stringify(data)
            });

            if (res.token) {
                localStorage.setItem("token",res.token)
            }

            return res;
        },

        logout : () =>{
            localStorage.removeItem("token");
            window.location.href="/"
        },

        requestPasswordReset : (email:string) =>
            api("/auth/password-reset/",{
                method:"POST",
                body:JSON.stringify({email})
            }),

        confirmPasswordReset: (token:string, email:string, password:string)=>
            api("/auth/password-reset/confirm/",{
                method:"POST",
                body:JSON.stringify({token,email,password,password_confirm:password})
            }),
        
        verifyEmail: (token:string,email:string) =>
            api(`/auth/verify-email?token=${token}&email=${email}`),

        resendVerification : (email:string) =>
            api("/auth/resend-verification/",{
                method:"POST",
                body:JSON.stringify({email}),
            }),
}