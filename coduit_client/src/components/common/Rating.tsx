// components/Rating.tsx
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

interface RatingProps {
    rating: number; // Rating out of 10
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
    // Convert 10-point rating to 5-star system
    const starRating = rating / 2;
    const fullStars = Math.floor(starRating);
    const hasHalfStar = starRating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center justify-center gap-1">
            {/* Full stars */}
            {Array.from({ length: fullStars }, (_, index) => (
                <FontAwesomeIcon 
                    key={`full-${index}`} 
                    icon={faStar} 
                    className="text-yellow-500 w-4 h-4" 
                />
            ))}
            
            {/* Half star */}
            {hasHalfStar && (
                <FontAwesomeIcon 
                    icon={faStarHalfAlt} 
                    className="text-yellow-500 w-4 h-4" 
                />
            )}
            
            {/* Empty stars */}
            {Array.from({ length: emptyStars }, (_, index) => (
                <FontAwesomeIcon 
                    key={`empty-${index}`} 
                    icon={faStar} 
                    className="text-gray-400 w-4 h-4" 
                />
            ))}
        </div>
    );
};

export default Rating;