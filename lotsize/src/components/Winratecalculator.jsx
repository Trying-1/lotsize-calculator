import React, { useEffect, useState } from 'react'
import "./WinrateCalculator.css"


function Winratecalculator() {
    const [Trades, setTrades] = useState(10);
    const [Wins, setWins] = useState(7);
    const [Loss, setLoss] = useState(3);
    const [Winrate, setWinrate] = useState(0.7);
    const handleonchangeTrades = (e) => {
        setTrades(parseFloat(e.target.value));
    }
    const handleonchangeWins = (e) => {
        setWins(parseFloat(e.target.value));
    }
    const handleonchangeLoss = (e) => {
        setLoss(parseFloat(e.target.value));
    }
    const handleonchangeWinrate = (e) => {
        setWinrate(parseFloat(e.target.value));
    }
    useEffect(() => {
        setTrades(parseFloat(Wins + Loss))
        setWinrate((parseFloat(Wins/Trades)).toFixed(2))
        setLoss((parseFloat(Trades-Wins)))
    }, [Wins, Loss,Trades])
    return (
        <div className='calculator'>
            <div className="form">
                <input type="number" className="inputfield" placeholder='total trade' value={Trades} onChange={handleonchangeTrades} />
                <input type="number" className="inputfield" placeholder='wins' value={Wins} onChange={handleonchangeWins} />
                <input type="number" className="inputfield" placeholder='loss' value={Loss} onChange={handleonchangeLoss} />
                <input type="number" className="inputfield" placeholder='winrate' value={Winrate} onChange={handleonchangeWinrate} />
            </div>
        </div>
    )
}

export default Winratecalculator