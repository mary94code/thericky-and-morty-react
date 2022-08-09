import React, { useEffect, useState } from 'react'
import Buttons from '../components/Buttons'
import EpisodeItem from '../components/EpisodeItem'

export default function HomePage() {
    const [data, setData] = useState({})
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
           const response =  await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
           const json = await response.json()
           setData(json)
           setIsLoading(false)
        }
        fetchData()
    }, [page])






    return (
        <div className='main'>
            <div className="main__container">
                {!isLoading && (
                    <>
                        <div className="main__episodes">
                            {data.results.map((item, key) => <EpisodeItem key={key} item={item} />)}
                        </div>
                        <Buttons page={page} setPage={setPage} totalPages={data.info.pages} />
                    </>
                )}
            </div>


        </div>
    )
}
