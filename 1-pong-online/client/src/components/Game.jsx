import React from 'react'
import '../styles/Game.css'

class Game {

    constructor() {
        this.player1 = {} 
    }

    render() {
        return (
            <div className='game'>
                <Paddle player={{...this.player1}} />
            </div>
        )
    }
}

export default Game