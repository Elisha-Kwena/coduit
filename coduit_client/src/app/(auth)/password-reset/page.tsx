"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/common/Logo";
import Background from "@/components/auth/Background";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import MailIcon from "@mui/icons-material/Mail";
import { impactFont } from "@/lib/fonts/fonts";


import { authService } from "@/service/auth.sevice";

export default function PasswordReset() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true)


    try{
      await authService.requestPasswordReset(email);
      setSuccess("Check your email for the reset link!");
    } catch (err:any){
      setError(err.message || "Email not found!")
    } finally{
      setIsLoading(false)
    }

  };

  return (
    <main className="w-full h-screen relative">
      <Background />
      <div className="relative h-full z-50 w-[90%] mx-auto flex items-center lg:justify-end justify-center">
        <div className="flex flex-col gap-2 w-[400px]">
          <div className="w-full flex flex-col items-center justify-between">
            <Logo />
            <h1 className={`mt-2 text-sapphire ${impactFont.className} font-extrabold text-4xl`}>
              PASSWORD RESET
            </h1>
          </div>
          <div className="mt-2 w-full backdrop-blur-lg bg-white/5 p-3 rounded-md flex flex-col gap-1">
            {error && (
              <div className="w-full mb-4 p-3 bg-candy/40 border border-red-500/20 rounded-md text-candy font-bold text-sm">
                {error}
              </div>
            )}
            {success && (
              <div className="w-full mb-4 p-3 bg-lime_green/30 border border-green-500/20 rounded-md text-lime_green text-sm">
                {success}
              </div>
            )}
            <div className="w-full">
              <p className="mt-2 text-center text-white font-plex-sans">
                Enter your email address and we will send you a link to reset your password
              </p>
            </div>

            <form className="mt-4 w-full" onSubmit={handlesubmit}>
              {/* Email */}
              <div className="input-continer w-full relative">
                <input
                  name="email"
                  id="email"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/10 rounded-md p-3 backdrop-blur-lg border border-chrome text-white placeholder:text-white"
                  placeholder="Email"
                />
                
                <span className="icon-div absolute translate-y-3 text-white font-bold font-fira-code right-4">
                  <EmailRoundedIcon />
                </span>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full mt-2 flex items-center justify-center gap-1 p-3 rounded-md bg-sapphire text-white font-bold transition-all duration-300 hover:bg-cosmic ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Sending..." : "Send Reset Link"}
                <MailIcon className="ml-3" />
              </button>
            </form>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="text-white">
              Remember your password?{" "}
              <Link href="/login" className="text-sapphire font-bold hover:underline hover:text-candy">
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}