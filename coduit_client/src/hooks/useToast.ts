"use client"
import { toast } from "sonner"

export const useToast = () => {
    return{
        success: (message:string) => toast.success(message),
        error: (message:string) => toast.error(message)
    };
};