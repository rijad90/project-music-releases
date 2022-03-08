import React from 'react'
import data from './data.json'
import {Article} from './components/Article'
//import {Person} from './components/Person'
import {Album} from './components/Album'

//console.log(data.albums.items)

// react component is a function
export const App = () => {
  return (
    <div>
    <Album props = {data}/>
    
    <Article props = {data}/>
    </div>
  )
}



/*
export const App = () => {
  return (
    data.albums.items.map((props) => {
      return (
        <p>Album type = {props.album_type}</p>
       )
    })
  )
}

*/



/*
 <div>
      {data.albums.items.map(item => {
        return <div key={item.id}>
          {item.artists.map(item => {
            return <span key={item.id}>{item.name} </span>
          })}
              </div>
    })}

*/





/*
<Article/>
<Article/>  
<Person name="Rijad"/>
<Person name="Rijad1"/>
<Person name="Rijad2"/> 
{data.map((album) =>   { 
      return <Album name = {album.name} />
      })}

      <div>
      <Album name="test"/>
      <Article/>
      <Person name="Rijad"/>
    </div>
*/