import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
interface FeatureProps {
    title: string;
    description: string;
    features: string[];
    icon: IconDefinition;
}


const FeaturesCard: React.FC<FeatureProps> = ({ title,description,features,icon }) => {
    return (
        <div className="z-10 bg-dark800 p-6 border border-chrome/50 rounded-lg shadow-md flex flex-col items-center lg:hover:shadow-lg lg:hover:-translate-y-2 transition-all group duration-300 lg:hover:border lg:hover:border-electric">
            <div className="top w-full flex items-start justify-start">
                 <div className="p-2 w-16 h-16 rounded-md flex items-center justify-center bg-electric">
                    <FontAwesomeIcon icon={icon} className="text-4xl text-sapphire" />
                 </div>
            </div>
            <div className="title w-full">
                <h2 className="group-hover:text-sapphire transition-all duration-300 text-2xl font-bold text-white mt-4">{title}</h2>
                <p className="text-lg text-chrome mt-2">{description}</p>
            </div>
            <div className="features w-full mt-4">
                <ul className="flex flex-col space-y-2">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center justify-start gap-2 text-chrome text-sm">
                            <span className="w-6 h-6 rounded-full bg-electric/70 flex items-center p-1">
                            <FontAwesomeIcon icon={faCheck} className="text-chrome text-sm" />
                            </span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default FeaturesCard;