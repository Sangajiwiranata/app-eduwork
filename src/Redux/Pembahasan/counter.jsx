import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrementCheck } from '../../app/Features/CounterFeatures/actions'

const Counter = () => {
    let { count } = useSelector(state => state.counter)
    const dispatch = useDispatch()
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Redux</h1>
            <br />
            <button onClick={() => dispatch(decrementCheck(1))}>-</button>
            {" "} <span>{count}</span>{" "}
            <button onClick={() => dispatch(increment(1))}>+</button>
        </div>
    )
}

export default Counter;
