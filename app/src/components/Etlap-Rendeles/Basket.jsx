import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="">
     
      <h2>Kosár</h2>
      <div className='ures'>
        {cartItems.length === 0 && <div>A kosár üres</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button style={{color:"black"}} onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button style={{color:"black"}}onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">termék összesen:</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>

            <div className="row">
              <div className="col-2">Szállítási díj</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>rendelés összesen</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button style={{color:"black"}} onClick={() => alert('Rendelés leadva!')}>
                Pénztár
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}