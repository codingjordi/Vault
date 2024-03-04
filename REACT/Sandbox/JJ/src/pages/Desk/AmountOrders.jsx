import "w3-css/w3.css";
import Card from '../../components/Card.jsx';

import { ordersDataJSON } from "./../ordersDataJSON.js";
import React, { useState, useEffect } from 'react';


export default function AmountOrders(){

    const [cantidadTotalMenusLisbon, setCantidadTotalMenusLisbon] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    useEffect(() => {
        const total = ordersDataJSON.reduce((total, order) => {
            const cantidadMenusLisbon = order.menus.reduce((subTotal, menu) => {
                return menu.menu === "Lisbon" ? subTotal + menu.qty : subTotal;
            }, 0);
            return total + cantidadMenusLisbon;
        }, 0);

        // Guardamos el valor calculado en el estado
        setCantidadTotalMenusLisbon(total);
    }, []); // Asegúrate de que este efecto solo se ejecute una vez ([] como dependencia)

    return (
        <Card>
            <div class='w3-container'>
                <h2>Sales</h2>
                <p className="w3-xlarge"><b>Menus sold: </b>{ordersDataJSON.length}</p>
                <button className="w3-button w3-red" onClick={handleMoreClick}>{showMore ? 'Hide' : 'Show more'} details</button>
                { showMore && 
                    <ul className="">
                        <li>Lisbon: {cantidadTotalMenusLisbon}</li>
                        <li>Barcelona: </li>
                        <li>Santiago: </li>
                        <li>Girona: </li>
                        <li>Paris: </li>
                        <li>Berlin: </li>
                        <li>Lima: </li>
                        <li>Tokyo: </li>
                        <li>Bristol: </li>
                        <li>Moscova: </li>
                        <li>New York: </li>
                    </ul>}
                


            </div>
        </Card>
    );

}