import React from 'react';
import { image } from '../../constants/layout';

const Image = ({ name, className }: { name: string; className: string }) => {
    return <img src={image[name].url} className={className} alt={image[name].alt} />;
};

export default Image;
