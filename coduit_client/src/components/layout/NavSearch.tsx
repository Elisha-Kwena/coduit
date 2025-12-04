import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export default function NavSearch(){
    
    return(
        <>
            <form action="" className="w-full flex items-center justify-start gap-2 p-1 rounded border border-gray-500 bg-gay-200 dark:bg-dark700">
                <span className='flex items-center justify-center'>
                    <SearchRoundedIcon/>
                </span>
                <input 
                    type="text" 
                    className="flex-1 p-1 rounded font-fira-code text-sm focus:outline-none dark:text-white px-2 placeholder:dark:text-white" placeholder='Search developers, mentors, tutorials…'/>
            </form>
        </>
    )
}