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
                <table class="w3-table w3-bordered" style={{ marginBottom: "1rem" }}>
                    <tr>
                        <th>Employee name</th>
                        <th>Shift</th>
                        <th>Hours</th>
                    </tr>
                    <tr>
                        <td>Paula Casas</td>
                        <td>Morning shift</td>
                        <td>Morning</td>
                    </tr>
                    <tr>
                        <td>Cindy Nero</td>
                        <td>Full shift</td>
                        <td>Morning - Night</td>
                    </tr>
                    <tr>
                        <td>Dolores Jackson</td>
                        <td>Morning shift</td>
                        <td>Morning</td>
                    </tr>
                    <tr>
                        <td>Primitivo Buenaventura</td>
                        <td>Night shift</td>
                        <td>Night</td>
                    </tr>
                </table>
                <button className="w3-button primary-color-button" onClick={handleShowMoreClick}>{showMore ? 'Hide' : 'Show'} week schedule</button>
                {showMore &&
                    <table className="w3-section">
                    <tr>
                      <th>Hora</th>
                      <th>Lunes</th>
                      <th>Martes</th>
                      <th>Miércoles</th>
                      <th>Jueves</th>
                      <th>Viernes</th>
                    </tr>
                    <tr>
                      <td><b>8:00 AM</b></td>
                      <td>Paula</td>
                      <td>Primitivo</td>
                      <td>Paula</td>
                      <td>Primitivo</td>
                      <td>Paula</td>
                    </tr>
                    <tr>
                      <td><b>9:00 AM</b></td>
                      <td>Cindy</td>
                      <td>Primitivo</td>
                      <td>Cindy</td>
                      <td>Primitivo</td>
                      <td>Cindy</td>
                    </tr>
                    <tr>
                      <td><b>10:00 AM</b></td>
                      <td>Cindy</td>
                      <td>Primitivo</td>
                      <td>Cindy</td>
                      <td>Primitivo</td>
                      <td>Cindy</td>
                    </tr>
                    <tr>
                      <td><b>11:00 AM</b></td>
                      <td>-</td>
                      <td>Primitivo</td>
                      <td>-</td>
                      <td>Primitivo</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td><b>12:00 PM</b></td>
                      <td>-</td>
                      <td>Primitivo</td>
                      <td>-</td>
                      <td>Primitivo</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td><b>1:00 PM</b></td>
                      <td>-</td>
                      <td>Primitivo</td>
                      <td>-</td>
                      <td>Primitivo</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td><b>2:00 PM</b></td>
                      <td>-</td>
                      <td>Dolores</td>
                      <td>-</td>
                      <td>Dolores</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td><b>3:00 PM</b></td>
                      <td>-</td>
                      <td>Dolores</td>
                      <td>-</td>
                      <td>Dolores</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td><b>4:00 PM</b></td>
                      <td>-</td>
                      <td>Dolores</td>
                      <td>-</td>
                      <td>Dolores</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td><b>5:00 PM</b></td>
                      <td>-</td>
                      <td>Dolores</td>
                      <td>-</td>
                      <td>Dolores</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td><b>6:00 PM</b></td>
                      <td>-</td>
                      <td>Dolores</td>
                      <td>-</td>
                      <td>Dolores</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td><b>7:00 PM</b></td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td><b>8:00 PM</b></td>
                      <td>-</td>
                      <td>Cindy</td>
                      <td>-</td>
                      <td>Cindy</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td><b>9:00 PM</b></td>
                      <td>-</td>
                      <td>Cindy</td>
                      <td>-</td>
                      <td>Cindy</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td><b>10:00 PM</b></td>
                      <td>-</td>
                      <td>Cindy</td>
                      <td>-</td>
                      <td>Cindy</td>
                      <td>-</td>
                    </tr>
                  </table>
                }
            </Card>
        </div>
    );

}