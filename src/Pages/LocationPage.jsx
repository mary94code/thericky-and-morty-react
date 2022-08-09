import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CharacterItem from '../components/CharacterItem'

export default function LocationPage() {
    const { id } = useParams()
    const [location, setLocation] = useState({})
    const [residents, setResidents] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`)
            const json = await response.json()
            setLocation(json)
            return json.residents.map(elem => elem.split("/").pop())

        }
        fetchData().then(async (residentsIds) => {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${residentsIds},0`)
            const json = await response.json()
            setResidents(json)
            setIsLoading(false)
        })


    }, [])

    if (isLoading) {
        return "Loading..."
    }
console.log(residents)
    return (
        <div className='locations__main'>
             <div>
                <p>Location name: {location.name}</p>
                <p>Location type: {location.type}</p>
                <p>Location dimension: {location.dimension}</p>
                <p>Location population: {location.residents.length}</p>
            </div>
            
            <div>
                <h4>All residents</h4>
                <div className='locations__cards'>
                {residents.map((resident, key) => <CharacterItem key={key} data={resident}/>)}
                </div>
            </div>
        </div>
    )
}
