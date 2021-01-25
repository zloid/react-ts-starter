export const MAX = "MAXIMUS";

import React, {useState} from 'react'

export const App = () => {
    const [st, doSt] = useState('st')
    return (
        <div>
            <u onClick={() => doSt('345')}>i App: </u>{st}
        </div>
    )
}
