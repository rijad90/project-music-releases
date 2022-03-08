import React from 'react' 


export const Album = (props) => {
    console.log(props.props.albums.items)
    return (
        props.props.albums.items.map((a) => {
            return(   
                <div className='album-container'> 
                    <img src={a.images[0].url} alt='cover' />
                    <p>{a.name}</p>
                
                
                </div>   
            
            )
                   
            
            
        })
    )
    
}



/*
Album type = {y.album_type}

<p>{y.artists.name}</p>
 */
       
