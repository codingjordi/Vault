import CreateOrder from "./CreateOrder.jsx";
import OrdersList from "./OrdersList.jsx";

export default function Orders() {
  return (
    <>
      <div class="w3-container">
        <CreateOrder />
        <OrdersList />
      </div>
    </>
  );
}
