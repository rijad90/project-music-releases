import React from 'react'
import data from './data.json'
import {Album} from './components/Album'


console.log(data.albums.items)

// react component is a function
export const App = () => {
  const musicList = data.albums.items
  return (
    <section>
      {musicList.map((album) => {
        return (
          <>
          <Album
            key={album.id}
            albumimage={album.images[0].url}
            songtitle={album.name}
            albumlink={album.external_urls.spotify}
            albumArtist={album.artists}
          />
          </>
          
      )})}
      </section>
  )
        }