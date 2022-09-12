import React from 'react';
import './Image.css'

export default function Image(props) {
    const {src, alt =""} = props;
    return <img src={src} alt={alt} />;
}

