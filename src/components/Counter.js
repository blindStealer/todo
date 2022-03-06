import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const onChangeValue = (e) => {
        setCount(e.target.value)
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>Decrement</button>
            <input type="text" value={count} onChange={onChangeValue} />
        </>
    )
}


export default Counter