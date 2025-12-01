'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/common/Logo';
import Background from '@/components/auth/Background';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import MailIcon from '@mui/icons-material/Mail';
import { impactFont } from '@/lib/fonts/fonts';

import { authService } from '@/service/auth.sevice';

export default function VerifyEmailSent() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleResend = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);

    try {
      await authService.resendVerification(email);
      setMessage("Verification email sent!");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full relative">
      <Background />
      <div className="relative z-50 flex items-center justify-end w-full lg:w-[90%] py-6 md:py-12 px-2 sm:px-4 h-screen">
        <div className="flex flex-col gap-2 w-[400px]">
          <div className="w-full flex flex-col gap-1 items-center justify-center">
            <Logo />
            <h1 className={`text-sapphire ${impactFont.className} font-extrabold text-2xl`}>
              CHECK YOUR EMAIL
            </h1>
          </div>
          <div className="w-full flex items-center justify-center py-4">
            <MailIcon className="!text-5xl text-sapphire" />
          </div>
          <div className="w-full">
            <h1 className="text-white font-bold text-2xl text-center">Verification Email Sent!</h1>
            <p className="text-white font-bold font-plex-sans text-md">
              We have sent a verification link to your email address. Please check your inbox and click
              the link to verify your account.
            </p>
          </div>
          <div className="mt-2 w-full backdrop-blur-lg bg-white/5 p-3 rounded-md flex flex-col gap-1">
            <div className="w-full">
              <h1 className="font-extrabold text-white text-lg">Did not receive the email?</h1>
              <p className="mt-2 text-white font-plex-sans">
                Check your spam folder or enter your email below to request a new verification link.
              </p>
            </div>

            <form onSubmit={handleResend} className="mt-4 w-full">
              {message && (
                <div className="mb-4 p-3 bg-green-500/10 border border-lime_green/20 rounded-md text-lime_green text-sm">
                  {message}
                </div>
              )}
              {error && (
                <div className="mb-4 p-3 bg-candy/10 border border-red-500/20 rounded-md text-candy text-sm">
                  {error}
                </div>
              )}
              <div className="input-continer w-full relative">
                <input
                  name="email"
                  id="email"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/10 rounded-md p-3 backdrop-blur-lg border border-chrome text-white placeholder:text-white"
                  placeholder='Email'
                />
                <span className="icon-div absolute translate-y-3 text-white font-bold font-fira-code right-4">
                  <EmailRoundedIcon />
                </span>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full mt-2 flex items-center justify-center gap-1 p-3 rounded-md bg-sapphire text-white font-bold transition-all duration-300 hover:bg-cosmic ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Sending...' : 'Resend Verification Link'}
              </button>
            </form>
          </div>
          <div className="mt-6 w-full flex flex-col items-center gap-2">
            <h1 className="text-white font-plex-sans text-center">Already verified your email?</h1>
            <Link
              href="/login"
              className="border-[2px] border-sapphire rounded-md p-3 text-sapphire font-bold"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}