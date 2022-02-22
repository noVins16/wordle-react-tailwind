import React from 'react'
import RowCompleted from './RowCompleted'
import RowCurrent from './RowCurrent'
import RowEmpty from './RowEmpty'

function Grid({ wordSelected, wordCompleted, word, turns }) {
    return (
        <div className='p-4 border-2 border-dashed border-stone-100/40'>
            {wordCompleted.map((word, index) => {
                return <RowCompleted key={index} word={word} solution={wordSelected} />
            })}
            {turns > 6 ? null : <RowCurrent word={word} />}
            {turns > 6
                ? null
                : Array.from(Array(6 - turns)).map((_, index) => {
                    return <RowEmpty key={index} />
                })}
        </div>
    )
}

export default Grid