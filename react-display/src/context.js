import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const getLocalStorage = () => {
        const viewedProducts = localStorage.getItem("history");
        if (viewedProducts) {
            return JSON.parse(viewedProducts);
        }
        else {
            return []
        }
    }

    const [searchResults, setSearchResults] = useState({
        productUrl: '',
        productName: '',
        price: '',
        desc: ''
    });
    const [searchTerm, setSearchTerm] = useState('');
    const [loginCredentials, setLoginCredentials] = useState({});
    const [err, setErr] = useState('');
    const [history, setHistory] = useState(getLocalStorage());

    useEffect(()=>{
        async function fetchScrapeData(url) {
            try {
                const response = await fetch('/webscrape', {
                    method: 'POST', 
                    mode: 'cors', 
                    cache: 'no-cache', 
                    credentials: 'same-origin', 
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    redirect: 'follow', 
                    referrerPolicy: 'no-referrer', 
                    body: JSON.stringify(url)
                });
                const data = await response.json();
                if (response.status !== 404) {
                    setSearchResults(() => ({
                        productUrl: data.items[0],
                        productName: data.items[1],
                        price: data.items[2],
                        desc: data.items[3]
                    }));
                    setErr('');
                    saveHistory(data.items[0], data.items[1], data.items[2], data.items[3])
                }
            }
            catch (error) {
                setErr('Invalid URL');
            }
        };
        if (searchTerm !== '') {
            fetchScrapeData(searchTerm);
        }
    }, [searchTerm])

    const saveHistory = (productUrl, productName, price, desc) => {
        const viewedItem = {
            productUrl,
            productName,
            price,
            desc
        };
        const exists = history.find((product) => product.productUrl === productUrl);
        if (!exists) {
            const updatedHistoryList = [...history, viewedItem];
            setHistory(updatedHistoryList);
        }
    }

    useEffect(() => {
        localStorage.setItem("history", JSON.stringify(history));
    }, [history])

    return (
        <AppContext.Provider value={{searchTerm, setSearchTerm, setLoginCredentials, searchResults, err, history}}>
            {children}
        </AppContext.Provider>
    );
}



export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }