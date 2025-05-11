import React from 'react';

export default function SvgImage({ src, onClick, className, alt}) {
    return (
        <img src={src} alt={alt} width={30} height={30} onClick={onClick} className={`hover:scale-110 ${className}`} />
    )
};