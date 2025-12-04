import { useMemo } from 'react';

export const useTimePassed = (createdAt: string): string => {
  const getTimePassed = (): string => {
    const now = new Date();
    const created = new Date(createdAt);
    const diffMs = now.getTime() - created.getTime();
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30); // Approximate
    const diffYears = Math.floor(diffDays / 365); // Approximate

    if (diffYears >= 1) return `${diffYears} year${diffYears > 1 ? 's' : ''} ago`;
    if (diffMonths >= 1) return `${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`;
    if (diffWeeks >= 1) return `${diffWeeks} week${diffWeeks > 1 ? 's' : ''} ago`;
    if (diffDays >= 2) return `${diffDays} days ago`;
    if (diffDays === 1) return 'yesterday';
    if (diffHours >= 1) {
      const mins = Math.floor((diffMinutes % 60));
      return `${diffHours} hr${diffHours > 1 ? 's' : ''} ${mins > 0 ? `${mins} min${mins > 1 ? 's' : ''}` : ''} ago`;
    }
    if (diffMinutes >= 1) return `${diffMinutes} min${diffMinutes > 1 ? 's' : ''} ago`;
    return 'just now';
  };

  // Memoize the result to avoid recalculating on every render unless createdAt changes
  return useMemo(() => getTimePassed(), [createdAt]);
};

export const useNumberFormatter = () => {
    const formatNumber = (num: number | undefined | null, decimals: number = 1) => {
        
        // Handle undefined/null cases
        if (num === undefined || num === null) {
            return "0";
        }
        if (num >= 1000000) {
            const result = (num / 1000000).toFixed(decimals) + "M";
            return result;
        } else if (num >= 1000) {
            const result = (num / 1000).toFixed(decimals) + "K";
            return result;
        }
        
        const result = num.toString();
        return result;
    };
    return { formatNumber }
}

export const useTextTruncate = () => {
    const truncateText = (text: string, maxLength: number, ellipsis: string = "...") => {
      if (text.length <= maxLength) return text;
      return text.substring(0, maxLength) + ellipsis;
    };
    return { truncateText };
  };