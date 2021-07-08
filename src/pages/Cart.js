import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../utils/api';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const cart = JSON.parse(localStorage.getItem('cart'));
  const [emptyCart, setEmptyCart] = useState();
  const [updateCart, setUpdateCart] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(`${baseUrl}`);
        setProducts(response.data);
      } catch (e) {
        console.log(e);
      } finally {
      }
    };
    getProducts();
    setEmptyCart(cart === null || cart.length === 0 ? false : true);
  }, [updateCart]);

  const filteredCart = products.filter(function (ApiResult) {
    return (
      cart?.filter(function (currentProducts) {
        return parseInt(currentProducts.id) === ApiResult.id;
      }).length !== 0
    );
  });

  const deleteFromCart = (id) => {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
    const newProducts = cartFromLocalStorage.filter((product) => {
      return JSON.parse(product.id) !== id;
    });
    setUpdateCart(!updateCart);
    localStorage.setItem('cart', JSON.stringify(newProducts));
  };

  let subTotals = 0;
  let MVA = 0;

  return (
    <>
      {emptyCart ? (
        <div style={{ marginTop: '20px' }}>
          <h1>Cart</h1>
          <hr />
          {filteredCart.map((cartProduct) => {
            subTotals += JSON.parse(cartProduct.price);
            MVA = (12 * subTotals) / 100;
            return (
              <div
                key={cartProduct.id}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <div>{cartProduct.product}</div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  {cartProduct.price} kr
                  <div
                    onClick={() => deleteFromCart(cartProduct.id)}
                    style={{ cursor: 'pointer', marginLeft: '10px' }}
                  >
                    <i class='fas fa-times'></i>
                  </div>
                </div>
              </div>
            );
          })}
          <hr />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Subtotal:</div>
            <div>{subTotals} kr</div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>MVA 12%</div>
            <div>{MVA} kr</div>
          </div>
          <hr />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Total:</div>
            <div>{subTotals + MVA} kr</div>
          </div>
        </div>
      ) : (
        <div
          style={{ textAlign: 'center', marginTop: '20px', fontSize: '30px' }}
        >
          Empty Cart
        </div>
      )}
    </>
  );
};

export default Cart;
