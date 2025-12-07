import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';

const publishOptions = [
    {
        id:1,
        label:"Publish Now",
        icon:SendRoundedIcon
    },
    {
        id:2,
        label:"schedule post",
        icon:AccessTimeRoundedIcon
    },
    {
        id:3,
        label:"Preview",
        icon:VisibilityRoundedIcon
    },
]

export default function Publish(){
    return(
        <>
            <div className="w-full flex-col gap-1 p-4 bg-black rounded border border-gray-600 pt-2 ">
                <h1 className="text-gray-100 text-sm">Publish Options</h1>

                <div className="w-full flex flex-col gap-3 mt-2">
                    {publishOptions.map(option =>{
                        const OptionIcon = option.icon
                        return(
                            <button key={option.id} className="w-full p-2 rounded border border-gray-600 bg-dark800 flex items-center justify-center gap-2 hover:bg-sapphire/10 hover:border-sapphire group transition-all duration-300 ease-in-out">
                                <div className="flex items-center justify-center">
                                    <OptionIcon className='group-hover:text-sapphire transition-all duration-300 ease-in-out'/>
                                </div>
                                <p className="text-sm text-gray-200 capitalize">{option.label}</p>
                            </button>
                        )
                    })}
                </div>
            </div>
        </>
    )
}