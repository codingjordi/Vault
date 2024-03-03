import "w3-css/w3.css";
import Card from '../../components/Card.jsx';
import { ordersDataJSON } from "./../ordersDataJSON.js";


export default function AmountOrders(){
    return (
        <Card>
            <div class='w3-container'>
                <h2>Sold menus</h2>
                <p>{ordersDataJSON.length}</p>

            </div>
        </Card>
    );

}