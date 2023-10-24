import React from 'react';
import "./itemListContainer.css"

const ItemListContainer = ({greeting}) => {

    return (
        <div className="productos">
            <h2>{greeting}</h2>
        </div>
    );
};

export default ItemListContainer;