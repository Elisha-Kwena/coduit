import React from "react";

import { featuresData } from "@/lib/constants/features";
import FeaturesCard from "../ui/cards/FeaturesCard";
const Features: React.FC = () => {
    return(
        <>
        <div className="w-full flex flex-col items-center justify-center py-10 z-10">
            <div className="w-full">
                <h1 className="text-4xl lg:text-7xl text-center font-extrabold font-plex-sans text-white">
                    Everything Developers Need
                </h1>
                <p className="text-xl lg:text-2xl text-center text-chrome mt-12">
                    From technical discussions to career growth, we,ve built the perfect environment for coders
                </p>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12">
                {featuresData.map((feature) => (
                    <FeaturesCard
                        key={feature.id}
                        title={feature.title}
                        description={feature.description}
                        features={feature.features}
                        icon={feature.icon}
                    />
                ))}
            </div>

        </div>
        </>
    )
}
export default Features;