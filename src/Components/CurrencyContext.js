import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';


export const CurrencyContext = createContext();

export const CurrencyProvider = props => {
    const [allValues, setAllValues] = useState([""]);
    const [getRates, setRates] = useState();
    const [fromCurrency, setfromCurrency] = useState("");
    const [toCurrency, setToCurrency] = useState("");
    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [flash, setFlash] = useState(false);


    useEffect(() => {
        axios({
            method: "GET",
            url: "https://api.exchangeratesapi.io/latest",
        })
            .then((response) => {
                const base = response.data;
                const data = response.data.rates;
                const add = { "EUR": 1.000 };
                const final = { ...data, ...add };
                setRates(final);
                setAllValues([...Object.keys(data), base.base]);
            })
            .catch((error) => {
                console.log(error)
            })

    }, []);

    return (
        <CurrencyContext.Provider value={{
            AllValues: [allValues, setAllValues],
            GetRates: [getRates, setRates],
            FromCurrency: [fromCurrency, setfromCurrency],
            ToCurrency: [toCurrency, setToCurrency],
            Amt1: [amount1, setAmount1],
            Amt2: [amount2, setAmount2],
            Flash: [flash, setFlash],
        }}
        >
            {props.children}
        </CurrencyContext.Provider>
    );

}