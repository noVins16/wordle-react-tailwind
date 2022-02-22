import React from 'react'

const Modal = ({ resetGameFromModal, setOpenModal, openModal }) => {
    const resetGame = () => {
        resetGameFromModal()
        setOpenModal(!openModal)
    }
    return (
        <div className="flex flex-col items-center justify-between h-screen max-w-md p-4 mx-auto" >
            <div className="relative w-full h-full max-w-md px-4 md:h-auto">
                <div className="relative border-white rounded-lg shadow bg-[#232928]">
                    <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-medium text-stone-200 ">
                            success
                        </h3>

                    </div>
                    <div className="p-6 space-y-6">
                        <p className="text-base leading-relaxed text-stone-200 ">
                            yay! you guessed it
                            click on reset to play again.
                        </p>

                    </div>
                    <div className="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button onClick={resetGame} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reset Game</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal