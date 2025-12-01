import Link from 'next/link';


import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:justify-start bg-black gap-0">
        <div className="flex items-center justify-center gap-8">
            <div className="text-[170px] lg:text-[300px] text-sapphire font-extrabold">4</div>
            <div className="text-[170px] lg:text-[300px] text-sapphire font-extrabold">0</div>
            <div className="text-[170px] lg:text-[300px] text-sapphire font-extrabold">4</div>
        </div>
        <div className="relative w-[350px] lg:w-[500px] h-[200px]">
            <div className="absolute w-full rounded-lg  backdrop-blur-lg lg:-top-2/3 -top-[35%] h-[300px] p-4">
                <h1 className="font-extrabold text-white text-[25px] lg:text-[40px] text-center">Oops!, Page Not Found</h1>
                <div className="mt-2 lg:mt-6 lg:p-4">
                    <p className="text-white text-lg text-center">It seems the page you are looking for does not exist or has been moved. Do not worry, let us get you back on track!</p>
                </div>

                <Link href="/feeds"
                className='mt-2 text-white bg-sapphire font-bold p-4 text-center group rounded-full block w-full lg:w-2/3 mx-auto'
                >
                    Back to Homepage
                <ArrowRightAltIcon className='text-white ml-4 group-hover:translate-x-4 transition-all duration-500 ease-in-out'/>
                </Link>
            </div>
        </div>

    </div>
  );
}