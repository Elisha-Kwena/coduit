import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
// 1. Import the GlowingEffect component
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface FeatureProps {
    title: string;
    description: string;
    features: string[];
    icon: IconDefinition;
}

const FeaturesCard: React.FC<FeatureProps> = ({ title, description, features, icon }) => {
    return (
        // 2. Add a relative wrapper for positioning
        <div className="relative z-10 bg-dark800 p-6 border border-gray-600 rounded-lg shadow-md flex flex-col items-center lg:hover:shadow-lg lg:hover:-translate-y-2 transition-all group duration-300 hover:border-none">
            {/* 3. Place the GlowingEffect here */}
            <GlowingEffect
                spread={30} // Adjust the width of the glow arc
                glow={true} // Makes a subtle glow always visible
                disabled={false} // Enables the mouse interaction
                proximity={50} // How close the mouse needs to be to activate
                inactiveZone={0.3} // Center area where effect is inactive
                borderWidth={3} // Thickness of the glowing border
                movementDuration={1.5} // Speed of the glow movement
            />
            
            {/* 4. Your original content remains here, wrapped for clarity */}
            <div className="relative w-full"> {/* This ensures content stays above the glow */}
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
        </div>
    );
}
export default FeaturesCard;