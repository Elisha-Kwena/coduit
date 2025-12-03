export default function Feeds(){
  return(
    <>
      <div className="w-full md:ml-72 ml-0 h-screen pt-[64] rounded-t-lg bg-white dark:bg-black p-0">
        <div className=" ml-0 bg-gray-100 dark:bg-dark800 h-full overflow-scroll rounded-t-lg">
          <div className="w-full grid grid-cols-4 gap-4">
            {/* {Array.from({length:50}).map((_,index)=>(
              <div className="h-40 bg-black"></div>
            ))} */}
          </div>
        </div>
      </div>
    </>
  )
}