import AmountOrders from './AmountOrders.jsx';
import Schedule from './Schedule.jsx';

export default function Desk (){


    return (
      <>
        <div class="w3-container w3-section">
          <h1>Dashboard</h1>
          <AmountOrders></AmountOrders>
          <Schedule></Schedule>
          
        </div>
      </>
    );
}