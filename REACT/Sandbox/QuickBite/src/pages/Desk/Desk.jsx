import AmountOrders from './AmountOrders.jsx';
import Schedule from './Schedule.jsx';

export default function Desk (){


    return (
      <>
        <div class="w3-container w3-section">
          <h1 style={{marginBottom: "2rem"}}>Dashboard</h1>
          <div style={{display: 'flex', justifyContent: "space-between",  gap: "3rem"}}>
            <Schedule></Schedule>
            <AmountOrders></AmountOrders>
          </div>
        </div>
      </>
    );
}