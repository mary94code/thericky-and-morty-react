import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import EpisodeItem from '../components/EpisodeItem'
import LocationPage from './LocationPage'

export default function SingleCharacter() {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [episodes, setEpisodes] = useState([])
    const { id } = useParams()

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const json = await response.json()
            setData(json)
            return json.episode.map(elem => elem.split("/").pop())

        }
        fetchData().then(async (episodesIds) => {
            const response = await fetch(`https://rickandmortyapi.com/api/episode/${episodesIds},0`)
            const json = await response.json()
            setEpisodes(json)
            setIsLoading(false)
        });
    }, [])
   


    if (isLoading) {
        return 'Loading...'
    }



    return (
        <div className='main character__main'>
            <div>
                <h2>{data.name}</h2>
                <img src={data.image} alt="" />
                <p>Gender: {data.gender}</p>
                <p>Species: {data.species}</p>
                <p>Status: {data.status}</p>
                <p>Origin: {data.origin.name}</p>
                <p>Location: <NavLink to={`/location/${data.location.url.split("/").pop()}`}>{data.location.name}</NavLink></p>
                <h3 className='starred__in'>Starred in: </h3>
                <div className="main__episodes">
                    {episodes.map((item, key) => <EpisodeItem key={key} item={item} />)}
                </div>

            </div>
        </div>
    )
}
