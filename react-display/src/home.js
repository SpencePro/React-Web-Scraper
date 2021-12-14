import React from 'react';
import { Search } from './search';
import { useGlobalContext } from './context';

export const Home = () => {
    const {searchResults, err} = useGlobalContext();

    return (
        <>
        <Search/>
        {err !== ''
        ?
        <div className='error-div'>
            <p>{err}</p>
        </div>
        :
        ''
        }
        {searchResults.productUrl !== ''
        ? 
        <div className='product-details'>
            <h2>{searchResults.productName}</h2>
            <h4>{searchResults.price}</h4>
            <p>{searchResults.desc}</p>
        </div>
        :
        ''
        }
        </>
    )
}