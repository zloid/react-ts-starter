export const MAX = 'MAXIMUS'

import React, { useState } from 'react'

export const App = () => {
    const [st, doSt] = useState(1)

    interface SomeI {
        a: number
        b: string
    }

    const someObj: SomeI = {
        a: 3,
        b: '222',
    }

    return (
        <div>
            <u onClick={() => doSt(Math.random())}>i App: </u>
            {st}
        </div>
    )
}
