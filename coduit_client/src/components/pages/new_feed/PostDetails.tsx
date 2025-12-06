export default function PostDetails(){
    return(
        <>
            <div className="w-full flex-col gap-1 p-4 bg-black rounded border border-gray-600 pt-2 ">
                <h1 className="text-gray-100 text-sm">Post Details</h1>

                <div className="w-full flex flex-col gap-2 mt-2">
                    <div className="w-full flex items-center justify-between py-1">
                        <h2 className="text-gray-500 text-sm">Characters : </h2>
                        <p className="text-gray-500 text-[12px]">0</p>
                    </div>
                    <div className="w-full flex items-center justify-between py-1">
                        <h2 className="text-gray-500 text-sm">Words : </h2>
                        <p className="text-gray-500 text-[12px]">0</p>
                    </div>
                    <div className="w-full flex items-center justify-between py-1">
                        <h2 className="text-gray-500 text-sm">Reading Time : </h2>
                        <p className="text-gray-500 text-[12px]">0</p>
                    </div>
                   
                </div>
            </div>
        </>
    )
}