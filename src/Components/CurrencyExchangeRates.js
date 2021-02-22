import React, { useContext } from 'react';
import { CurrencyContext } from './CurrencyContext';
import { Currencies } from 'currencies-map';


const CurrencyExchangeRates = () => {
    const { AllValues, GetRates, FromCurrency, ToCurrency, Flash } = useContext(CurrencyContext);
    const [allValues] = AllValues;
    const [getRates] = GetRates;
    const [fromCurrency] = FromCurrency;
    const [toCurrency] = ToCurrency;
    const [flash] = Flash;

    return (

        <>
            {flash ? <p className="exhead">{Currencies.names.get(fromCurrency)} ({fromCurrency}) Exchange Rates</p> : <p className="exhead">{Currencies.names.get(toCurrency)}  ( {toCurrency})  Exchange Rates</p>}
            {/* 1<p>{currencies["CAD"].name}</p> */}
            {/* <p>{fromCurrency} Exchange Rates</p> */}
            <table className="rect11">
                <thead className="rect12">
                    <tr>
                        <th className="currencyf m-6 p-3">
                            Currency
                        </th>
                        <th className="currencyname m-3 p-2 ">
                            Currency Name
                        </th>

                        {flash ? <th className="exchangerate m-5 p-3">Exchange Rate = 1 {fromCurrency}</th> : <th className="exchangerate">Exchange Rate = 1 {toCurrency}</th>}
                    </tr>
                </thead>
                <tbody className="convcode m-3 p-5">
                    {flash ? allValues.filter(val => val !== fromCurrency).map((f, key) => <tr className="convcode" key={key}><td className="padding-right:10px" >{f}</td><td>{Currencies.names.get(f)}</td><td>{(getRates[f] / getRates[fromCurrency]).toFixed(4)}</td></tr>) : allValues.filter(val => val !== fromCurrency).map((f, key) => <tr key={key}><td>{f}</td><td>{Currencies.names.get(f)}</td><td>{(getRates[f] / getRates[toCurrency]).toFixed(4)}</td></tr>)}
                    {/* <tr>
                        {flash ? allValues.filter(val => val !== fromCurrency).map((f, key) => <tr key={key}>{(getRates[fromCurrency] / getRates[f]).toFixed(4)}</tr>) : allValues.filter(val => val !== fromCurrency).map((f, key) => <tr key={key}>{(getRates[toCurrency] / getRates[f]).toFixed(4)}</tr>)}
                    </tr> */}

                </tbody>


            </table>
        </>
    );
}




export default CurrencyExchangeRates;
