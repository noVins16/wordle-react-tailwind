import React from 'react'

function Title({ state }) {
    const stateTitle = {
        Win: 'text-green-600 animate-bounce',
        Lose: 'text-red-600 animate-pulse',
        Playing: 'text-stone-200',
    }
    return (
        <div className='px-12'>
            <h1
                className={`text-5xl sm:text-6xl font-bold text-center ${stateTitle[state]} lg:mt-10 `}
            >
                WORDLE
            </h1>
        </div>
    )
}

export default Title