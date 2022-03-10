// Imports the data from the json 
import React from 'react'
import data from './data.json'

// Imports the components
import {Album} from './components/Album'
import {Header} from './components/Header'

// creates a variable to map the data 
export const App = () => {
  const musicList = data.albums.items
  return (
    <>
      <header>
        <Header />
      </header>


  <section className='mainContainer'>
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
    </>
  )
}