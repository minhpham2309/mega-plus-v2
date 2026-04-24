
import React from 'react';

const TrackingIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21l-8-4.5v-9l8-4.5 8 4.5v9l-8 4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21V12" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 8l-8 4.5-8-4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12l8 4.5 8-4.5" />
    </svg>
);

export default TrackingIcon;
