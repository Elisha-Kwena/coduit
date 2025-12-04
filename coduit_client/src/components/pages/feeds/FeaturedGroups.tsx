import FeaturedGroupCard from "../../ui/cards/FeaturedGroupCard"

import logo1 from "../../../../public/python.png"
import logo2 from "../../../../public/swift.png"
import logo3 from "../../../../public/c-sharp.png"
import logo4 from "../../../../public/react.png"
import logo5 from "../../../../public/java-script.png"
import logo6 from "../../../../public/java.png"

const groups = [
    {
        id:1,
        name:"python pioneers",
        logo:logo1,
        members:1234,
        link:"/python"
    },
    {
        id:2,
        name:"swift devs",
        logo:logo2,
        members:516,
        link:"/swifdevs"
    },
    {
        id:3,
        name:"C shapers",
        logo:logo3,
        members:234,
        link:"/cshapers"
    },
    {
        id:4,
        name:"react reactors",
        logo:logo4,
        members:5673,
        link:"/Reactreactors"
    },
    {
        id:5,
        name:"javascripters",
        logo:logo5,
        members:1875,
        link:"/javascripters"
    },
    {
        id:6,
        name:"java developers",
        logo:logo6,
        members:740,
        link:"/java developers"
    }
]
export default function FeaturedGroups(){
    console.log('FeaturedGroups - groups array:', groups);
    
    return(
        <>
            <div className="w-full flex flex-col gap-1">
                <h1 className="dark:text-white">Featured Groups</h1>
                <div className="w-full grid grid-cols-2 md:grid-cols-6 gap-3">
                    {groups.map((group, index) => {
                        console.log(`Rendering group ${index}:`, group);
                        return (
                            <FeaturedGroupCard
                                key={group.id}
                                name={group.name}
                                logo={group.logo}
                                members={group.members}
                                link={group.link}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}