import React from 'react';
import { useGlobalContext } from './context';

export const History = () => {
    const {history} = useGlobalContext();

    return (
        <div className='history-div'>
        <h1>Viewed Products</h1>
        {history.map((product)=>{
            return (
                <article className='product-details' key={product.productUrl}>
                    <p><a href={product.productUrl} target="_blank" rel="noreferrer noopener">{product.productName}</a></p>
                    <p>{product.price}</p>
                    <p>{product.desc}</p>
                </article>
            )
        })}
        </div>
    )
}