import React from 'react'
import './Card.css'
import {Image, Text} from '../../index'

const Card = (props) => {
    const {imagesrc, alt, pokename, id, poketype} = props
    return(
        <div className='card'>
            <Text label={id} type='h5'/>
            <Image src={imagesrc} alt={alt} />
            <Text label={pokename} type='h2'/>
            <div className='type-container'>
                {poketype?.map((type ) =>{
                    return (
                    <div className={type?.type?.name} >
                        <Text label={type?.type?.name} type='h5'/>
                    </div> )
                })}   
            </div>
        </div>);
}

export default Card;