const guidelines = [
    {id:1,line:"Be respectful and professional"},
    {id:2,line:"Provide proper code attribution"},
    {id:3,line:"No spam or self-promotion"},
    {id:4,line:"Use appropriate tags"},
    {id:5,line:"Follow licensing requirements"},
    {id:6,line:"Cite your sources"},
]

export default function Guidelines(){
    return(
        <>
            <div className="w-full flex-col gap-1 p-4 bg-black rounded border border-gray-600 pt-2 ">
                <h1 className="text-gray-100 text-sm">Community Guidlines</h1>

                <ul className="w-full flex flex-col gap-1 mt-2">
                    {guidelines.map(line =>(
                        <li key={line.id} className="text-gray-500 text-[12px]">{line.line}</li>
                    ))}
                   
                </ul>
            </div>
        </>
    )
}