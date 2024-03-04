import "w3-css/w3.css";
import Card from '../../components/Card.jsx';
import React, { useState } from 'react';


export default function Schedule() {

    const [showMore, setShowMore] = useState(false);


    function handleShowMoreClick() {
        setShowMore(!showMore);
    }

    return (
        <div>
            <Card>
                <h2>Today's Shift Plan</h2>
                <table class="w3-table w3-bordered" style={{marginBottom: "1rem"}}>
                    <tr>
                        <th>Employee name</th>
                        <th>Shift</th>
                    </tr>
                    <tr>
                        <td>Paula Casas</td>
                        <td>Morning</td>
                    </tr>
                    <tr>
                        <td>Cindy Nero</td>
                        <td>Full day</td>s
                    </tr>
                    <tr>
                        <td>Dolores Jackson</td>
                        <td>Lola</td>
                    </tr>
                    <tr>
                        <td>Primitivo Buenaventura</td>
                        <td>Night</td>
                    </tr>
                </table>
                <button className="w3-button primary-color-button" onClick={handleShowMoreClick}>{showMore ? 'Hide' : 'Show'} week schedule</button>
                {showMore &&
                    <table class="w3-table w3-bordered" style={{marginBottom: "1rem"}}>
                    <tr>
                        <th>Employee name</th>
                        <th>Shift</th>
                    </tr>
                    <tr>
                        <td>Paula Casas</td>
                        <td>Morning</td>
                    </tr>
                    <tr>
                        <td>Cindy Nero</td>
                        <td>Full day</td>s
                    </tr>
                    <tr>
                        <td>Dolores Jackson</td>
                        <td>Lola</td>
                    </tr>
                    <tr>
                        <td>Primitivo Buenaventura</td>
                        <td>Night</td>
                    </tr>
                </table>
                }
            </Card>
        </div>
    );

}