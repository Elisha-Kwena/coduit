import {ReactNode} from 'react'

interface TopicsLayout{
    children:ReactNode
}

export default function TopicsLayout({ children }: TopicsLayout){
    return(
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}