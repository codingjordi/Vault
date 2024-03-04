import "w3-css/w3.css";
import Card from '../../components/Card.jsx';

import { ordersDataJSON } from "./../ordersDataJSON.js";
import React, { useState, useEffect } from 'react';


export default function AmountOrders(){

    // No he arribat a conseguir mapejar be les ordreas y conseguir el total cops que han demanat cada menus.
    // Tambe volia sumar el preu del total de les unitats vengudes de cada un dels menus i fer un grafic.
    

    const [cantidadTotalMenusLisbon, setCantidadTotalMenusLisbon] = useState(0);
    const [cantidadTotalMenusBarcelona, setCantidadTotalMenusBarcelona] = useState(0);
    const [cantidadTotalMenusSantiago, setCantidadTotalMenusSantiago] = useState(0);
    const [cantidadTotalMenusGirona, setCantidadTotalMenusGirona] = useState(0);
    const [cantidadTotalMenusParis, setCantidadTotalMenusParis] = useState(0);
    const [cantidadTotalMenusBerlin, setCantidadTotalMenusBerlin] = useState(0);
    const [cantidadTotalMenusLima, setCantidadTotalMenusLima] = useState(0);
    const [cantidadTotalMenusTokyo, setCantidadTotalMenusTokyo] = useState(0);
    const [cantidadTotalMenusBristol, setCantidadTotalMenusBristol] = useState(0);
    const [cantidadTotalMenusMoscova, setCantidadTotalMenusMoscova] = useState(0);
    const [cantidadTotalMenusNewYork, setCantidadTotalMenusNewYork] = useState(0);

    const [showMore, setShowMore] = useState(false);

    function handleShowMoreClick() {
        setShowMore(!showMore);
    }


    return (
        <div>
            <Card>
                    <h2>Sales</h2>
                    <p className="w3-xlarge"><b>Sold menus: {ordersDataJSON.length + 42}</b></p>
                    <p>Sold this month: {ordersDataJSON.length}</p>
                    <button className="w3-button primary-color-button" onClick={handleShowMoreClick}>{showMore ? 'Hide' : 'Show more'} details</button>
                    { showMore &&
                        <ul className="ul-primary-color">
                            <li>Lisbon: <b>{cantidadTotalMenusLisbon}</b></li>
                            <li>Barcelona: <b>{cantidadTotalMenusBarcelona}</b></li>
                            <li>Santiago: <b>{cantidadTotalMenusSantiago}</b></li>
                            <li>Girona: <b>{cantidadTotalMenusGirona}</b></li>
                            <li>Paris: <b>{cantidadTotalMenusParis}</b></li>
                            <li>Berlin: <b>{cantidadTotalMenusBerlin}</b></li>
                            <li>Lima: <b>{cantidadTotalMenusLima}</b></li>
                            <li>Tokyo: <b>{cantidadTotalMenusTokyo}</b></li>
                            <li>Bristol: <b>{cantidadTotalMenusBristol}</b></li>
                            <li>Moscova: <b>{cantidadTotalMenusMoscova}</b></li>
                            <li>New York:<b>{cantidadTotalMenusNewYork}</b></li>
                        </ul>
                    }
            </Card>
        </div>
    );

}