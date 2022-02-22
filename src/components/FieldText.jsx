import React from 'react'

function FieldText({ onTyped, onEnter, text, stateGame }) {
  const stateInput = stateGame === 'Lose' || stateGame === 'Win'
  const placeHolder = {
    Win: 'You Win',
    Lose: 'You Lost',
    Playing: 'Type your word...'
  }
  return (
    <div>
      <input type="text" name="word" className='w-full mb-4 text-center bg-transparent border-b-2 focus:outline-none border-stone-500 text-stone-300 placeholder:text-stone-500 focus:placeholder:text-transparent' placeholder={placeHolder[stateGame]} onChange={onTyped} onKeyPress={onEnter} maxLength='5' value={text} readOnly={stateInput} autoFocus />

    </div>
  )
}

export default FieldText