import React from 'react'
import { render } from 'react-dom'
import { MAX } from './app/App'

console.log('test ', MAX)

const doSome = (param) => console.log(param + 2980)
doSome('666-999')


export const Ap = () => {
    return (
        <div>
            rand: {Math.random()}
        </div>
    )
}

render(<Ap />, document.getElementById('root'))