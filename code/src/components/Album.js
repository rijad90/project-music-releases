import React from 'react' 


export const Album = (props) => {
    console.log(props)
    return (
        props.props.albums.items.map((data) => {
            return(   
                <div className='album-container'> 
                    
                    
                    <a href = {data.external_urls.spotify} target = "_blank">
                    <img src={data.images[0].url} alt='cover' />
                    <p>{data.name}</p>
                    </a>

                    <a href = {data.artists.external_urls} target = "_blank">
                    <p>{data.artists[.name}</p>
                    
                    </a>
                   
                </div>  
                
            )
                   
            
            
        })
    )
    
}



/*
Album type = {y.album_type}

<p>{y.artists.name}</p>
 */
       
