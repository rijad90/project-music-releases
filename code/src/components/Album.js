// Imports icons from components and react 

import React from 'react' 
import { Icons } from '../components/Icons' 


export const Album = (props) => {
    return(  
        <div className='albumContainer'>
            <div className='imageContainer'>
                <a href={props.albumlink}>
                    <img className='albumImage' src= {props.albumimage} alt="album cover" />
                    <Icons />
                </a>
            </div>
            
            <a href={props.albumlink}>
                <p className='albumTitle'>{props.songtitle}</p>
            </a>
                
            <div className='artistContainer'>
                {props.albumArtist.map(artist => { 
                    return (
                        <a  key={artist.id} href={artist.external_urls.spotify}>
                        {artist.name}    
                        </a>
                    )                
                })}
            </div> 
        </div> 
    )
}

            



