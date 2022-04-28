import React, {useState, useEffect} from 'react'

export default function App() {
    const [starWarsData, setStarWarsData] = useState({})
    const [count, setCount] = useState(1)

 
    console.log("Component Rendered")
    //side effects
    useEffect(function() {
        console.log("Effect Rendered")
        fetch(`https://swapi.dev/api/people/${count}`)
        .then (res => res.json())
        .then (data => setStarWarsData(data) )
    }, [count])

    function characterHandler() {
        setCount(oldCount => {
            return oldCount + 1
        })
    }


            return( 
    <div>
        <h2>Current count is {count}</h2>
        <button onClick={characterHandler}>Get Next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}