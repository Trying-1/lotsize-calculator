import React, { useState, useEffect } from 'react';
import './Lotsizecalculator.css';

function Lotsizecalculator() {
    const [entry, setEntry] = useState(1982.90);
    const [stoploss, setStopLoss] = useState(1980.70);
    const [takeProfit, setTakeProfit] = useState(1989.77);
    const [lotsize, setLotsize] = useState(0.00);
    const riskAmount = 15;
    const profitAmount = 50;
    const [orderType, setOrderType] = useState('');

    useEffect(() => {
        const difference = Math.abs(entry - stoploss);
        const riskPip = difference * 100;
        setLotsize((riskAmount / riskPip).toFixed(2));
    }, [entry, stoploss]);

    useEffect(() => {
        if (lotsize > 0) {
            const profitPip = profitAmount / lotsize;
            setTakeProfit((orderType === 'Sell' ? entry - profitPip / 100 : entry + profitPip / 100).toFixed(2));
        }
    }, [lotsize, entry, profitAmount, orderType]);

    useEffect(() => {
        setOrderType(entry > stoploss ? 'Buy' : 'Sell');
    }, [entry, stoploss]);

    const handleEntryChange = (event) => {
        setEntry(Math.abs(parseFloat(event.target.value)) || 0);
    };

    const handleStopLossChange = (event) => {
        setStopLoss(Math.abs(parseFloat(event.target.value)) || 0);
    };

    const handleLotSizeChange = (event) => {
        setLotsize(Math.abs(parseFloat(event.target.value)) || 0);
    };

    const handleTakeProfitChange = (event) => {
        setTakeProfit(Math.abs(parseFloat(event.target.value)) || 0);
    };

    return (
        <div className="calculator">
            <div className="form">
                <h1>Lotsize Calculator</h1>
                <div><label htmlFor="entry">Enter</label>
                    <input
                        type="number"
                        className="inputfield"
                        placeholder="entry"
                        onChange={handleEntryChange}
                        value={entry}
                    /></div>

                <div>
                    <label htmlFor="stoploss">stoploss</label>
                    <input
                        type="number"
                        className="inputfield"
                        placeholder="stoploss"
                        onChange={handleStopLossChange}
                        value={stoploss}
                    /></div>
                <div><label htmlFor="LotSize">LotSize</label>

                    <input
                        type="number"
                        className="inputfield"
                        placeholder="Lot Size"
                        onChange={handleLotSizeChange}
                        value={lotsize}
                    /></div>
                <div> <label htmlFor="profit">Profit</label>

                    <input
                        type="number"
                        className="inputfield"
                        placeholder="Take Profit"
                        onChange={handleTakeProfitChange}
                        value={takeProfit}
                    /></div>
                <div className='order-type'> Order-type:<div className={orderType === "Buy" ? "buy" : "sell"}> {orderType}</div></div>
            </div>
        </div>
    );
}

export default Lotsizecalculator;
