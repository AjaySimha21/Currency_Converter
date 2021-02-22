import React, { useState, useContext, useEffect } from 'react';
import { CurrencyContext } from './CurrencyContext';
import { Currencies } from 'currencies-map';
import '../App.css';

const CurrencyConv = () => {
    const { AllValues, GetRates, FromCurrency, ToCurrency, Amt1, Amt2, Flash } = useContext(CurrencyContext);
    const [allValues] = AllValues;
    const [getRates] = GetRates;
    const [fromCurrency, setfromCurrency] = FromCurrency;
    const [toCurrency, setToCurrency] = ToCurrency;
    const [amount1, setAmount1] = Amt1;
    const [amount2, setAmount2] = Amt2;
    const [flash, setFlash] = Flash;
    const [oneToOne, setOneToOne] = useState();
    const [twoToTwo, setTwoToTwo] = useState();

    useEffect(() => {
        setfromCurrency("CAD");
        setToCurrency("CAD");
    }, [])


    const convCalculate1 = () => {
        setTwoToTwo((getRates[fromCurrency] / getRates[toCurrency]).toFixed(4));
        setOneToOne((getRates[toCurrency] / getRates[fromCurrency]).toFixed(4));
        const test = amount1 * getRates[toCurrency] / getRates[fromCurrency];
        setAmount2(test.toFixed(4));

    };

    const convCalculate2 = () => {
        setOneToOne((getRates[toCurrency] / getRates[fromCurrency]).toFixed(4));
        setTwoToTwo((getRates[fromCurrency] / getRates[toCurrency]).toFixed(4));
        const test = amount2 * getRates[fromCurrency] / getRates[toCurrency];
        setAmount1(test.toFixed(4));
    };
    return (
        <>


            <div className="currconv">
                <h3>Currency converter</h3>
            </div>
            <div className="para">
                <p>Please enter the amount you want to convert in any field.</p>
            </div>
            <div className="rect6">
                <label className="curr">Currency</label>
                <select className="rect1" name="Sandy" onClick={() => convCalculate1()} onChange={(e) => { setfromCurrency(e.target.value); convCalculate1(); }}>{allValues.map((e, key) => (<option className="seltext" key={key} value={e}>{Currencies.names.get(e)}  ({e})</option>))}</select>
                <label className="entamt">Enter Amount</label>
                <input className="rect3" name="amt1" type="number" placeholder="Amount" value={amount1} onKeyUp={() => { convCalculate1(); setFlash(true); }} onChange={(e) => setAmount2(setAmount1(e.target.value))} />
                <span className="gsym">{Currencies.symbols.get(fromCurrency)}</span>
                {oneToOne === undefined ? "" : isNaN(amount1) || isNaN(amount2) ? "" : <p className="smlltxt">1 {fromCurrency} = {oneToOne} {toCurrency}</p>}
            </div>
            <div className="rect7">
                <label className="curr1">Currency</label>
                <select className="grect1" name="Adelaide" onClick={() => convCalculate2()} onChange={(e) => { setToCurrency(e.target.value); convCalculate2(); }}>{allValues.map((e, key) => <option key={key} value={e}> {Currencies.names.get(e)} ({e})</option>)}</select>
                <label className="entamt1">Enter Amount</label>
                <input className="grect3" name="amt2" type="number" value={amount2} placeholder="Amount" onKeyUp={() => { convCalculate2(); setFlash(false); }} onChange={(e) => setAmount1(setAmount2(e.target.value))} />
                <span className="gsym1">{Currencies.symbols.get(toCurrency)}</span>
                {twoToTwo === undefined ? "" : isNaN(amount2) || isNaN(amount1) ? "" : <p className="smlltxt1">1 {toCurrency} = {twoToTwo} {fromCurrency}</p>}
            </div>


        </>

    );

}

export default CurrencyConv;

