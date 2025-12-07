import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

const visibility = [
    {
        id:1,
        label:"Public",
        description:"Anyone on or off Coduit",
        icon:LanguageRoundedIcon
    },
    {
        id:2,
        label:"Friends",
        description:"Your friends on Coduit",
        icon:PeopleRoundedIcon
    },
    {
        id:3,
        label:"Only me",
        description:" Only you can view the feed",
        icon:LockRoundedIcon
    },
]

export default function Visibility(){
    return(
        <>
            <div className="w-full flex-col gap-1 p-4 bg-black rounded border border-gray-600 pt-2 ">
                <h1 className="text-gray-100 text-sm">Visibility</h1>

                <div className="w-full flex flex-col gap-3 mt-2">
                    {visibility.map(option =>{
                        const OptionIcon = option.icon
                        return(
                            <button key={option.id} className="w-full p-2 rounded border border-gray-600 bg-dark800 flex items-center justify-start gap-2 hover:bg-sapphire/10 hover:border-sapphire group transition-all duration-300 ease-in-out">
                                <div className="flex items-center justify-center">
                                    <OptionIcon className='group-hover:text-sapphire transition-all duration-300 ease-in-out'/>
                                </div>
                                <div className="flex flex-col flex-1 items-start justify-center">
                                    <h1 className="text-sm font-bold text-gray-200">{option.label}</h1>
                                    {option.description && (
                                        <p className="text-[12px] text-gray-200">{option.description}</p>
                                    )}
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>
        </>
    )
}