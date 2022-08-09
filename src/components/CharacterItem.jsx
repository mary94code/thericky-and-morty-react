import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CharacterItem({ data }) {
    console.log(data);
    return (
        <div className='characters__card'>     
            <h2>{data.name}</h2>
            <img src={data.image} alt="" />
            <p>Gender: {data.gender}</p>
            <p>Species: {data.species}</p>
            <p>Status: {data.status}</p>
            <p>Origin: {data.origin.name}</p>
            <p>Location: <NavLink className="location__link" to={`/location/${data.location.url.split('/').pop()}`}>{data.location.name}</NavLink></p> 
            <p>Info on: <NavLink className="location__link" to={`/character/${data.id}`}>{data.name}</NavLink></p> 
        </div>
    )
}
