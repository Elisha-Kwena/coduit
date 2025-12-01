import Background from "@/components/auth/Background"
import SignInPage from "@/components/auth/Signin"
import Logo from "@/components/common/Logo"
export default function Login(){
    return(
        <>
            <div className="w-full max-h-screen h-screen relative z-50">
                <Background/>
                <div className="w-full md:w-[90%] relative mx-auto z-[100] flex flex-col-reverse md:flex-row items-center justify-center md:justify-between h-full">
                    {/* auth left */}
                    <div className="w-full md:w-1/2 md:flex hidden ">
                        {/* <Logo/> */}
                    </div>

                    {/* auth right */}
                    <div className="w-full md:w-1/2">
                        <div className=" w-full flex items-center justify-end">
                            <SignInPage/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}