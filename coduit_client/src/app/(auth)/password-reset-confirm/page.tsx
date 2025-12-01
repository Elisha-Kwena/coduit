"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/common/Logo';
import Background from '@/components/auth/Background';
import { useRouter, useSearchParams } from 'next/navigation';


import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { impactFont } from '@/lib/fonts/fonts';


import { authService } from '@/service/auth.sevice';
export default function PasswordResetConfirm() {
    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false
    });

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const email = searchParams.get('email');


    const togglePasswordVisibility = (field: 'password' | 'confirmPassword') => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
        return;
    }

    setError("");
    setSuccess("");

    authService
      .confirmPasswordReset(token!, email!, password)
      .then(() => {
        setSuccess("Password updated! Redirecting...");
        setTimeout(() => router.push("/login"), 2000);
      })
      .catch((err: any) => setError(err.message));
    };



    return (
        <main className="w-full relative min-h-screen flex items-center justify-center">
            <Background/>
            <div className="w-full lg:w-[90%] relative z-50 mx-auto flex items-center justify-end px-4 py-8">
                <div className="w-full lg:w-[400px] flex flex-col gap-1">
                    <div className="text-center flex flex-col items-center justify-center mb-8">
                        <Logo/>
                        <h1 className={`text-3xl font-bold ${impactFont.className} text-sapphire`}>NEW PASSWORD</h1>
                    </div>


                    {/* Error Message Placeholder */}
                    {error && (
                        <div className="w-full mb-4 p-3 bg-candy/40 border border-red-500/20 rounded-md text-candy font-bold text-sm">
                            {error}
                        </div>
                    )}

                     {/* Success Message Placeholder */}
                    {success && (
                        <div className="w-full mb-4 p-3 bg-lime_green/30 border border-green-500/20 rounded-md text-lime_green text-sm">
                            {success}
                        </div>
                    )}
                    <div className="w-full p-6 rounded-lg bg-white/5 backdrop-blur-sm">
                    <div className="mb-6 text-center">
                        <p className="text-white">
                            Enter your new password below.
                        </p>
                    </div>
                    
                    <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Password */}
                        <div className="input-continer w-full relative">
                            <input 
                            name="password"
                            id="password"
                            required
                            type={showPassword.password ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            className='w-full bg-white/10 rounded-md p-3 backdrop-blur-lg border border-chrome text-white placeholder:text-white'
                            placeholder='New Password'
                            />
                           
                            <button 
                            type="button" 
                            className='visibility-btn absolute translate-y-3 text-white font-bold font-fira-code right-4 z-50'
                            onClick={() => togglePasswordVisibility('password')}>
                            {showPassword.password ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}
                            </button>
                        </div>

                    {/* Confirm Password */}
                        <div className="input-continer w-full relative">
                            <input 
                            name="confirmPassword"
                            id="confirmPassword"
                            required
                            type={showPassword.confirmPassword ? "text" : "password"} 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className='w-full bg-white/10 rounded-md p-3 backdrop-blur-lg border border-chrome text-white placeholder:text-white'
                            placeholder='Confirm Password'
                            />
                            
                            <button 
                            type="button" 
                            className='visibility-btn absolute translate-y-3 text-white font-bold font-fira-code right-4'
                            onClick={() => togglePasswordVisibility('confirmPassword')}>
                            {showPassword.confirmPassword ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}
                        </button>
                    </div>

                        <button 
                            type="submit"
                            className="w-full px-4 py-3 font-medium text-white bg-sapphire rounded-md hover:bg-electric/80 transition-colors"
                        >
                            Reset Password
                        </button>
                    </form>

                    <div className="mt-6 text-sm text-center text-white">
                        <p>
                            Remember your password?{' '}
                            <Link href="/login" className="text-sapphire font-bold hover:underline hover:text-candy">Back to Login</Link>
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </main>
    )
}