
import React from 'react';

const SecurityIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 019-2.583 11.955 11.955 0 019 2.583A12.02 12.02 0 0021 7.984a11.955 11.955 0 01-3.382-3.008z" />
    </svg>
);

export default SecurityIcon;
