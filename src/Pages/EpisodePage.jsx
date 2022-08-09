import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink} from 'react-router-dom'

export default function EpisodePage() {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [episodeInfo, setEpisodeInfo] = useState({})
    const [characters, setCharacters] = useState([])

    useState(() => {
        const getEpisodes = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
            const json = await response.json()
            setEpisodeInfo(json)
            return json.characters.map(elem => elem.split("/").pop())
        }

        getEpisodes().then(async (charactersId) => {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${charactersId}`)
            const json = await response.json()

            setCharacters(json)
            setIsLoading(false)
        })


    }, [])

    if (isLoading) {
        return "Loading..."
    }


    return (
        <div>
            <div className='main__episode'>
                <div className="episode__description__episodePage">
                    <p>Air date: {episodeInfo.air_date}</p>
                    <p>Characters: {episodeInfo.characters.length}</p>
                    <p>Episode: {episodeInfo.episode}</p>
                    <p>Name: {episodeInfo.name}</p>
                </div>

                <h1>Characters in the episode</h1>
                <div className='characters__in__episode'>
                    {characters.map((character, key) => (
                        <div key={key} className='character__description'>
                            <img src={character.image} alt="" />
                            <p>Name: {character.name}</p>
                            <p>Gender: {character.gender}</p>
                            <p>Species: {character.species}</p>
                            <p>Status: {character.status}</p>
                            <NavLink className='character__link' to={`/character/${character.id}`}>Character details</NavLink>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}
