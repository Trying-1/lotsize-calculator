// Winrate.js
import React, { useState } from 'react';
import './Winrate.css'; // Import the CSS file

function Winrate() {
  const [nW, setNW] = useState(0);
  const [nL, setNL] = useState(0);
  const [rr, setRR] = useState(3);
  const [tW, setTW] = useState(0);
  const [tL, setTL] = useState(0);
  const [rW, setRW] = useState(0);
  const [rL, setRL] = useState(0);
  const [tT, setTT] = useState(0);
  const [oR, setOR] = useState(0);

  const calculateValues = () => {
    const totalTrade = nW + nL;
    const winRate = (nW / totalTrade);
    const loseRate = (nL / totalTrade);
    const totalWins = rr * nW;
    const totalLoss = nL;
    const outcomeResult = totalWins - totalLoss;

    setRW(winRate);
    setRL(loseRate);
    setTT(totalTrade);
    setTW(totalWins);
    setTL(totalLoss);
    setOR(outcomeResult);
  };

  return (
    <div className='winrate-container'>
      <label className='input-label'>
        Number of Wins (nW):
        <input type="number" className='input-field' value={nW} onChange={(e) => setNW(parseFloat(e.target.value))} />
      </label>
      <br />
      <label className='input-label'>
        Number of Losses (nL):
        <input type="number" className='input-field' value={nL} onChange={(e) => setNL(parseFloat(e.target.value))} />
      </label>
      <br />
      <label className='input-label'>
        Reward to Risk (rr):
        <input type="number" className='input-field' value={rr} onChange={(e) => setRR(parseFloat(e.target.value))} />
      </label>
      <br />
      <button className='calculate-button' onClick={calculateValues}>Calculate</button>

      <p className='result-text'>Win Rate: {(rW * 100).toFixed(2)}%</p>
      <p className='result-text'>Lose Rate: {(rL * 100).toFixed(2)}%</p>
      <p className='result-text'>Total Trades: {tT}</p>
      <p className='result-text'>Total Wins: {tW}</p>
      <p className='result-text'>Total Loss: {tL}</p>
      <p className='result-text'>Outcome Result: {oR}</p>
    </div>
  );
}

export default Winrate;
