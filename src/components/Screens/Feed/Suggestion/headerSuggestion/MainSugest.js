import '../Suggestion.css'
import { useEffect, useState } from 'react'

export function MainSugest() {


    const [suggestions, setSuggestions] = useState([])
    
    const [limitUsers, setLimitUsers] = useState(5)

    const slice = suggestions.slice(0, limitUsers)

    
    useEffect(() => {
        fetch(`https://api.github.com/users/karine-nascimento/followers`)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            setSuggestions(result)
        })

        .catch((err) => {
            throw new Error(err)
        })

    }, [])


        return (
            <>
        

        <div className='user-suggest'>

        {slice.map((suggestions, key) => (
            <div className='infos-sgst' key={key}>
                <img src={`https://github.com/${suggestions.login}.png`} />

                <div className='info-suggest'>
                    <span>{suggestions.login}</span>
                    <p>Seguido por kazinha</p>
                </div>
                <button className='follow'>Seguir</button>
            </div>
               ))}
        </div>
            </>
        )
}