import React from 'react' 
import { Icons } from '../components/Icons' 


export const Album = (props) => {
   // console.log(props)
    return(  
        <div className='container'>
            <div className='image-container'>
                <a href={props.albumlink}>
                    <img src= {props.albumimage} alt="album cover" />
                    <Icons />
                </a>
            </div>
            
                <a href={props.albumlink}>
                    <p>{props.songtitle}</p>
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

            



