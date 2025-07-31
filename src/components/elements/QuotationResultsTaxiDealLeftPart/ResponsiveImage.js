import Image from 'next/image';
import React from 'react'

const ResponsiveImage = ({ src, alt, style, className }) => (
    <Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', ...style }} alt={alt} src={src} className={className} />
);

export default ResponsiveImage