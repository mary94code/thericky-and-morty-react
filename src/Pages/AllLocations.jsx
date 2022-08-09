import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Buttons from '../components/Buttons'


export default function AllLocations() {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1)

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/location/?page=${page}`)
            const json = await response.json()
            setData(json)
            setIsLoading(false)
        }
        fetchData()

    }, [page])
   

    if (isLoading) {
        return "Loading..."
    }
    return (
        <div className='main'>
            <h2 className='locations__header'>All locations</h2>
        <div className='all__locations__container '>
            {
                data.results.map((elem, key) => (
                    <div className='allLocationsCard' key={key}>
                        <h2>{elem.name}</h2>
                        <p>Dimension: {elem.dimension}</p>
                        <p>Type: {elem.type}</p>
                        <p>Residents: {elem.residents.length}</p>
                        <p>Location: <NavLink to={`/location/${elem.url.split("/").pop()}`}>{elem.name}</NavLink></p>

                    </div>
                ))
            }
        </div>
        <Buttons page={page} setPage={setPage} totalPages={data.info.pages} />
        </div>
    )
}
