import React, { useState, useEffect } from 'react';

function LotsizeCalculator() {
  const [entryPrice, setEntryPrice] = useState(0);
  const [stopLoss, setStopLoss] = useState(0);
  const [takeProfit, setTakeProfit] = useState(0);
  const [lotSize, setLotSize] = useState(0);
  const [profitAmount, setProfitAmount] = useState(0);
  const [riskAmount, setRiskAmount] = useState(0);

  useEffect(() => {
    // Calculate all values whenever any input value changes
    if (takeProfit - entryPrice !== 0) {
      const calculatedLotSize = (profitAmount / (takeProfit - entryPrice)) * 100;
      setLotSize(calculatedLotSize);

      const calculatedStopLoss = entryPrice - (riskAmount / calculatedLotSize);
      setStopLoss(calculatedStopLoss);
    } else {
      setLotSize(0);
      setStopLoss(0);
    }
  }, [entryPrice, takeProfit, profitAmount, riskAmount]);

  return (
    <div>
      <label>
        Entry Price:
        <input type="number" value={entryPrice} onChange={(e) => setEntryPrice(parseFloat(e.target.value))} />
      </label>
      <br />
      <label>
        Stop Loss:
        <input type="number" value={stopLoss} />
      </label>
      <br />
      <label>
        Take Profit:
        <input type="number" value={takeProfit} onChange={(e) => setTakeProfit(parseFloat(e.target.value))} />
      </label>
      <br />
      <label>
        Lot Size:
        <input type="number" value={(lotSize/1000).toFixed(2)} />
      </label>
      <br />
      <label>
        Profit Amount:
        <input type="number" value={profitAmount} onChange={(e) => setProfitAmount(parseFloat(e.target.value))} />
      </label>
      <br />
      <label>
        Risk Amount:
        <input type="number" value={riskAmount} onChange={(e) => setRiskAmount(parseFloat(e.target.value))} />
      </label>
    </div>
  );
}

export default LotsizeCalculator;
