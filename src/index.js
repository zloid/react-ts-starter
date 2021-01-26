import React from 'react'
import { render } from 'react-dom'

const SomeReactComponent = () => {
    return (
        <div>
            <h1>Hello</h1>
            <h2>World</h2>
            <h3>
                <u>and React! {Math.random()}</u>
            </h3>
        </div>
    )
}

render(<SomeReactComponent />, document.getElementById('root'))
