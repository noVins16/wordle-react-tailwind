import { useEffect, useState } from 'react'
import words from "../assets/words"

const randomWord = () => {
    const date = new Date()
    const day = date.getDate()
    return day
}

export default function useWordle() {
    const dayNumber = randomWord()
    const [word, setWord] = useState('')
    const [wordSelected, setWordSelected] = useState(words[dayNumber])
    const [wordCompleted, setWordCompleted] = useState([])
    const [turns, setTurns] = useState(1)
    const [stateGame, setStateGame] = useState('Playing')
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        checkSatateGame()
        setWord('')
    }, [wordCompleted])

    const handleInput = (event) => {
        const { value } = event.target
        setWord(value.trim().toUpperCase())
    }

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            event.target.focus = false
            if (word.length === 5) {
                if (turns <= 6) {
                    setWordCompleted([...wordCompleted, word])
                    setTurns(turns + 1)
                }
            }
        }
    }
    const checkSatateGame = () => {
        if (word == wordSelected) {
            setStateGame('win')
            setOpenModal(!openModal)
        } else {
            if (turns > 6) {
                setStateGame('Lose')
            }
        }
    }

    const resetGame = () => {
        setTurns(1)
        setWord('')
        setStateGame('Playing')
        setWordCompleted([])
    }

    return {
        word,
        wordSelected,
        wordCompleted,
        openModal,
        turns,
        stateGame,
        setOpenModal,
        handleInput,
        handleKey,
        resetGame
    }
}