import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../utils/api';

const Details = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [updated, setUpdated] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'));

    if (cartFromLocalStorage !== null) {
      setCart(cartFromLocalStorage);
    }

    for (var i = 0; i < cartFromLocalStorage?.length; i++) {
      if (cartFromLocalStorage[i].id === id) {
        setDisabled(!disabled);
        break;
      }
    }

    console.log(cartFromLocalStorage);
  }, [updated]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(`${baseUrl}/${id}`);
        setProduct(response.data);
      } catch (e) {
        console.log(e);
      } finally {
      }
    };
    getProduct();
  }, []);

  const addToCart = () => {
    cart.push({ id: id });
    setUpdated(!updated);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <Card style={{ width: 'auto' }}>
        <Card.Body>
          <Card.Title>{product.product}</Card.Title>
          <Card.Text>{product.price} kr</Card.Text>
          <Card.Text>{product.description}</Card.Text>
          <Button onClick={addToCart} disabled={disabled} variant='primary'>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;
