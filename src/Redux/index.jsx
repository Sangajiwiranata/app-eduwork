import React from 'react'
import { Provider } from 'react-redux'
import store from '../app/store'
import Counter from './Pembahasan/counter'

const Redux = () => {
    return (
        <div>
            <Provider store={store}>
                <Counter />
            </Provider>
        </div>
    )
}

export default Redux
