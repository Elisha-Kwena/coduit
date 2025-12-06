import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded';
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';


const typesfeed =[
    {id:1,value:"article",icon:NewspaperRoundedIcon},
    {id:2,value:"tutrial",icon:SchoolRoundedIcon},
    {id:3,value:"question",icon:LiveHelpRoundedIcon},
    {id:4,value:"showcase",icon:LaptopChromebookRoundedIcon},
]


export default function FeedType(){
    return(
        <>
        <div className="w-full flex-col gap-1 p-4 bg-black rounded border border-gray-600 pt-2 ">
            <h1 className="text-gray-100 text-sm">Feed Type</h1>
            <div className="w-full grid grid-cols-2 gap-4 mt-2">
                {typesfeed.map(feed =>{
                    const TypeIcon = feed.icon

                    return(
                        <button key={feed.id} className="flex group transition-all duration-300 ease-in-out  flex-col items-center justify-center gap-1 p-2 py-4 bg-dark800 hover:bg-sapphire/10 hover:border-sapphire rounded border border-gray-600">
                            <TypeIcon className='!w-8 !h-8 group-hover:text-sapphire transition-all duration-300 ease-in-out'/>
                            <p className="text-gray-200 capitalize text-sm group-hover:text-sapphire transition-all duration-300 ease-in-out">{feed.value}</p>
                        </button>
                    )
                })}
            </div>
        </div>
        </>
    )
}