export default function MenuFromData({ menu }) {
  return (
    <>
      <div class="w3-container">
        <div class="w3-panel w3-card">
          <h3>{menu.name}</h3>
          <span class="w3-sand">{menu.id}</span>
          <ul>
              <li>{menu.contents[0]}</li>
              <li>{menu.contents[1]}</li>
              <li>{menu.contents[2]}</li>
            </ul>
          <h3>Price: {menu.price}$</h3>
          <small>(VAT included)</small>
          <p>
            Water is {menu.water ? "" : "not"} <span>included </span>
          </p>
        </div>
      </div>
    </>
  );
}
