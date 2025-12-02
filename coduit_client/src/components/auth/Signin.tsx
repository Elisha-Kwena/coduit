"use client"
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/components/common/Logo';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import googleIcon from '../../../public/icons/google.png';
import discordIcon from '../../../public/icons/discord.png';
import githubIcon from '../../../public/icons/github.png';

import { useRouter } from 'next/navigation';

import { authService } from '@/service/auth.sevice';

import { useState } from "react"
import { impactFont } from '@/lib/fonts/fonts';

import { useToast } from '@/hooks/useToast';

export default function SignInPage(){
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });

    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
        if (error) setError(null);
    };

    const togglePasswordVisibility = (field: 'password' | 'confirmPassword') => {
        setShowPassword((prev) => ({
        ...prev,
        [field]: !prev[field],
    }));
    };


    const handleFocus = (field: string) => {
        setFocusedField(field);
    };
    const handleBlur = () => {
        setFocusedField(null);
    };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
        await authService.login({
            email: formData.email.toLowerCase().trim(),
            password: formData.password
        });
        router.push("/interests");

    } catch (err: any) {
        let errorMessage = "Something went wrong";

        if (err.message) {
            errorMessage = err.message;
        }
        // Handle Django's non_field_errors
        else if (err.non_field_errors?.[0]) {
            errorMessage = err.non_field_errors[0];
        }
        // Handle field-specific errors (email/password)
        else if (err.email?.[0]) {
            errorMessage = err.email[0];
        }
        else if (err.password?.[0]) {
            errorMessage = err.password[0];
        }

        setError(errorMessage);
    } finally {
        setLoading(false);
    }
};


    return(
        <>
          <div className="w-full md:w-[60%] flex flex-col gap-2 md:p-0 px-4">
            <div className="w-full flex items-center justify-between p-1">
              <Logo/>
              <h1 className={`font-bold ${impactFont.className} text-white text-4xl`}>SIGN IN</h1>
            </div>
            {error && (
              <div className="w-full bg-red-200 rounded-[4px] p-2">
                <p className="text-red-600 font-fira-code text-sm">{error}</p>
              </div>
            )}

            {/* sigin form */}
            
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-1">
                <div className="bg-white/10 border border-gray-500 rounded input-container w-full flex items-center justify-between gap-1 p-0 ">
                    <input 
                      type="email" 
                      name="email" 
                      onFocus={()=>handleFocus("email")}
                      onBlur={handleBlur}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="flex-1 p-3 placeholder:text-white text-white transition-all duration-300 ease-in-out font-bold font-fira-code bg-transparent focus:outline-none focus:border-none" 
                      placeholder='Email :'
                      />
                    <div className="flex w-10 items-center justify-center">
                      <EmailRoundedIcon className={`text-[30px]! ${focusedField === "email"?"text-sapphire":"text-white "}`}/>
                    </div>
                </div>
                <div className="bg-white/10 border border-gray-500 rounded input-container w-full flex items-center justify-between gap-1 p-0 ">
                    <input 
                      type={showPassword.password ? 'text' : 'password'}
                      name="password" 
                      onFocus={()=>handleFocus("password")}
                      onBlur={handleBlur}
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="flex-1 p-3 placeholder:text-white text-white transition-all duration-300 ease-in-out font-bold font-fira-code bg-transparent focus:outline-none focus:border-none" 
                      placeholder='Password :'
                      />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility('password')}
                      className="flex w-10 items-center justify-center">
                        {showPassword.password ? <VisibilityRoundedIcon className={`text-[30px]! ${focusedField === "password"?"text-sapphire":"text-white "}`}/>: <VisibilityOffRoundedIcon className={`text-[30px]! ${focusedField === "password"?"text-sapphire":"text-white "}`}/>}
                    </button>
                </div>

                <Link href="/password-reset" className="text-sapphire my-2 font-bold text-left">Forgot Password</Link>

                <button
                    type="submit"
                    disabled={loading}
                    className={`my-3 group w-full bg-sapphire hover:bg-cosmic text-white font-bold font-fira-code py-3 px-4 rounded-md transition duration-200 flex items-center justify-center gap-2 ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                    {loading ? 'Logging in...' : 'Login'}
                    <ArrowForwardRoundedIcon className="transition-all duration-500 group-hover:translate-x-2" />
                </button>

                <div className="w-full flex items-center justify-between gap-2">
                  <span className="bg-chrome w-1/3 p-[1px] rounded-full"></span>
                  <div className="text-white font-fira-code text-[10px] lg:text-[12px]">or continue with</div>
                  <span className="bg-chrome w-1/3 p-[1px] rounded-full"></span>
                </div>

                <div className="w-full flex flex-col gap-1">
                    <div className="w-full flex items-center justify-between gap-2">
                      <button className="bg-white p-1 rounded w-1/2 flex items-center justify-start gap-1">
                        <div className="w-10 h-10 relative">
                          <Image src={githubIcon.src} alt="github signin" fill className='object-contain object-center'/>
                        </div>
                        <p className="text-midnight font-bold text-sm capitalize">Login with GitHub</p>
                      </button>
                      <button className="bg-white p-1 rounded w-1/2 flex items-center justify-start gap-1">
                        <div className="w-10 h-10 relative">
                          <Image src={discordIcon.src} alt="discord signin" fill className='object-contain object-center'/>
                        </div>
                        <p className="text-midnight font-bold text-sm capitalize">Login with discord</p>
                      </button>
                    </div>
                    <div className="w-full">
                      <button className="bg-white p-1 rounded w-full flex items-center justify-center gap-3">
                        <div className="w-10 h-10 relative">
                          <Image src={googleIcon.src} alt="google signin" fill className='object-contain object-center'/>
                        </div>
                        <p className="text-midnight font-bold text-sm capitalize">Login with google</p>
                      </button>
                    </div>
                </div>

                <p className="text-white text-sm font-fira-code text-center">
                    Create an account?{' '}
                    <Link href="/register" className="text-sapphire hover:text-candy font-bold hover:underline">
                        SignUp
                    </Link>
                </p>
            </form>
          </div>
        </>
    )
}