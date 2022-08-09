import React, { useEffect, useState } from 'react'
import Buttons from '../components/Buttons'
import CharacterItem from '../components/CharacterItem'

export default function CharactersPage() {
    const [data, setData] = useState({})
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {

            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
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
                            {data.results.map((item, key) => <CharacterItem key={key} data={item} />)}
                        </div>
                        <Buttons page={page} setPage={setPage} totalPages={data.info.pages} />
                    </>
                )}
            </div>


        </div>
    )
}
