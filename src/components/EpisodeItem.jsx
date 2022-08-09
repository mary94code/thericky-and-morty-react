import React from 'react'
import { NavLink } from 'react-router-dom'

export default function EpisodeItem({item}) {
  return (
    <div className='episodes__container'>

      <img className='episode__image' src={`/images/image${item.id % 20 + 1}.jpg`} alt="" />
      <div className='episode__description'>
        <p>Name: {item.name}</p>
        <p>Air date: {item.air_date}</p>
        <p>Episode: <NavLink className='episode__link' to={`/episode/${item.id}`}>{item.episode}</NavLink></p>
        <p>Characters in the episode:
          {item.characters.length}</p>
      </div>
    </div>
  )
}
