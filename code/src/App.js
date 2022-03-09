import React from 'react'
import data from './data.json'
import {Album} from './components/Album'
import {Header} from './components/Header'


//console.log(data.albums.items)

export const App = () => {
  const musicList = data.albums.items
  return (
    
    <section>
      <header>
        <Header />
      </header>

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