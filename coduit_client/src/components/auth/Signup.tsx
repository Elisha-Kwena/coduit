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

export default function SignUpPage(){
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [formData, setFormData] = useState({
    username: '',
    handlename: '',
    email: '',
    password: '',
    confirmPassword: '',
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

        // client side vaidation confirm password
        if (formData.password != formData.confirmPassword){
          setError("Passwords do not match");
          setLoading(false);
          return;

        }

        // sending data to the backend
        try{
          await authService.register({
            username:formData.username,
            handlename:formData.handlename,
            email:formData.email,
            password:formData.password,
            password_confirm:formData.confirmPassword
          });

          setSuccess(true);
          router.push("/verify-email-sent")

        } catch (err: any){
          setError(err.message || "Failed to create account")
        } finally {
          setLoading(false)
        }

        console.log(formData)
    }


    return(
        <>
          {/* Success Message */}
          {/* {success && (
          <div className="w-full bg-green-200 rounded-[4px] p-2">
              <p className="text-green-600 font-fira-code text-sm">Registration successful! Redirecting...</p>
          </div>
          )}

          {error && (
          <div className="w-full bg-red-200 rounded-[4px] p-2">
            <p className="text-red-600 font-fira-code text-sm">{error}</p>
          </div>
          )} */}
          <div className="w-full md:w-[60%] flex flex-col gap-2 md:p-0 px-4">
            <div className="w-full flex items-center justify-between p-1">
              <Logo/>
              <h1 className={`font-bold ${impactFont.className} text-white text-4xl`}>SIGN UP</h1>
            </div>
            
            {/* success message */}
            {success && (
              <div className="w-full bg-green-200 rounded-[4px] p-2">
                <p className="text-green-600 font-fira-code text-sm">Registration successful! Redirecting...</p>
              </div>
            )}

            {/* error message */}
            {error && (
              <div className="w-full bg-red-200 rounded-[4px] p-2">
                <p className="text-red-600 font-fira-code text-sm">{error}</p>
              </div>
            )}

            {/* registration form */}
            
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-1">
              <div className="bg-white/10 border border-gray-500 rounded input-container w-full flex items-center justify-between gap-1 p-0 ">
                <input 
                  type="text" 
                  name="username" 
                  onFocus={()=>handleFocus("username")}
                  onBlur={handleBlur}
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="flex-1 p-3 placeholder:text-white text-white transition-all duration-300 ease-in-out font-bold font-fira-code bg-transparent focus:outline-none focus:border-none" 
                  placeholder='UserName :'
                  />
                <div className="flex w-10 items-center justify-center">
                  <PersonIcon className={`text-[30px]! ${focusedField === "username"?"text-sapphire":"text-white "}`}/>
                </div>
              </div>
              <div className="bg-white/10 border border-gray-500 rounded input-container w-full flex items-center justify-between gap-1 p-0 ">
                <input 
                  type="text" 
                  name="handlename" 
                  onFocus={()=>handleFocus("handlename")}
                  onBlur={handleBlur}
                  value={formData.handlename}
                  onChange={handleChange}
                  required
                  className="flex-1 p-3 placeholder:text-white text-white transition-all duration-300 ease-in-out font-bold font-fira-code bg-transparent focus:outline-none focus:border-none" 
                  placeholder='Handlename :'
                  />
                <div className="flex w-10 items-center justify-center">
                  <AlternateEmailRoundedIcon className={`text-[30px]! ${focusedField === "handlename"?"text-sapphire":"text-white "}`}/>
                </div>
              </div>
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
              <div className="bg-white/10 border border-gray-500 rounded input-container w-full flex items-center justify-between gap-1 p-0 ">
                <input 
                  type={showPassword.confirmPassword ? 'text' : 'password'}
                  name="confirmPassword" 
                  onFocus={()=>handleFocus("confirmPassword")}
                  onBlur={handleBlur}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="flex-1 p-3 placeholder:text-white text-white transition-all duration-300 ease-in-out font-bold font-fira-code bg-transparent focus:outline-none focus:border-none" 
                  placeholder='Confirm Password :'
                  />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('confirmPassword')}
                  className="flex w-10 items-center justify-center">
                    {showPassword.confirmPassword ? <VisibilityRoundedIcon className={`text-[30px]! ${focusedField === "confirmPassword"?"text-sapphire":"text-white "}`}/>: <VisibilityOffRoundedIcon className={`text-[30px]! ${focusedField === "confirmPassword"?"text-sapphire":"text-white "}`}/>}
                </button>
              </div>


              <button
                type="submit"
                disabled={loading || success}
                className={`group my-4 w-full bg-sapphire hover:bg-cosmic text-white font-bold font-fira-code py-3 px-4 rounded-md transition duration-200 flex items-center justify-center gap-2 ${
                  loading || success ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Creating Account...' : success ? 'Success!' : 'Create Account'}
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
                    <p className="text-midnight font-bold text-sm capitalize">SignUp with GitHub</p>
                  </button>
                  <button className="bg-white p-1 rounded w-1/2 flex items-center justify-start gap-1">
                    <div className="w-10 h-10 relative">
                      <Image src={discordIcon.src} alt="discord signin" fill className='object-contain object-center'/>
                    </div>
                    <p className="text-midnight font-bold text-sm capitalize">SignUp with discord</p>
                  </button>
                </div>
                <div className="w-full">
                  <button className="bg-white p-1 rounded w-full flex items-center justify-center gap-3">
                    <div className="w-10 h-10 relative">
                      <Image src={googleIcon.src} alt="google signin" fill className='object-contain object-center'/>
                    </div>
                    <p className="text-midnight font-bold text-sm capitalize">SignUp with google</p>
                  </button>
                </div>
              </div>


              <div className="flex items-center justify-center">
                <p className="text-black font-bold font-fira-code text-sm text-center">
                  By continuing you agree to the{' '}
                  <Link href="" className="hover:text-candy hover:underline text-sapphire font-bold">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="" className="hover:text-candy hover:underline text-sapphire font-bold">
                    Privacy Policy
                  </Link>{' '}
                  of Coduit
                </p>
              </div>

              <p className="text-white text-sm font-fira-code text-center">
                Already have an account?{' '}
                <Link href="/login" className="text-sapphire hover:text-candy font-bold hover:underline">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </>
    )
}