import CreateOrder from "./CreateOrder.jsx";
import OrdersList from "./OrdersList.jsx";

export default function Orders() {
  return (
    <>
      <div class="w3-container w3-section">
        <CreateOrder />
        <OrdersList />
      </div>
    </>
  );
}
