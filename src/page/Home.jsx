import React from 'react'
import Button from '../components/Button'
import FieldText from '../components/FieldText'
import Grid from '../components/Grid'
import Modal from '../components/Modal'
import Title from '../components/Title'
import useWordle from "../hooks/useWordle"

function Home() {
    const {
        word,
        wordSelected,
        wordCompleted,
        turns,
        openModal,
        stateGame,
        handleInput,
        setOpenModal,
        handleKey,
        resetGame
    } = useWordle()
    return (
        <>

            <div className='flex flex-col items-center justify-between h-screen max-w-md p-4 mx-auto bg-stone-900'>
                <Title state={stateGame} />
                {openModal && (<Modal resetGameFromModal={resetGame} setOpenModal={setOpenModal} openModal={openModal} />)}
                {!openModal && (
                    <main>
                        <h2 className='text-sm font-semibold text-right text-stone-200'>Turns: {turns - 1}</    h2>
                        <FieldText onTyped={handleInput} onEnter={handleKey} text={word} stateGame={stateGame} />
                        <Grid wordSelected={wordSelected} wordCompleted={wordCompleted} word={word} turns={turns} />
                    </main>
                )}
                <section className='flex items-center justify-center w-24 h-16'>
                    <Button onClick={resetGame} />
                </section>
            </div>
        </>
    )
}

export default Home