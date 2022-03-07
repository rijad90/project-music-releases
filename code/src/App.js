import React from 'react'
import data from './data.json'
//import {Article} from './components/Article'
//import {Person} from './components/Person'
//import {Album} from 'components/Album'
//import {Album} from './components/Album'

console.log(data)

// react component is a function
export const App = () => {
  return (
    <div>
    {data.albums.items.map(item => {
      return <div key={item.id}>
        {item.artists.map(item => {
          return <span key={item.id}>{item.name} </span>
        })}
      </div>;
    })}
  </div>
  )
}






















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