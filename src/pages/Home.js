import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../utils/api';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  const [products, setProducts] = useState([]);

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
  }, []);

  return (
    <div style={{ marginTop: '20px' }}>
      <Row xs={1} md={3} className='g-4'>
        {products?.map((product) => {
          return (
            <Col key={product.id}>
              <Card style={{ marginTop: '20px' }}>
                <Card.Body>
                  <Card.Title>{product.product}</Card.Title>
                  <Card.Text>{product.price} kr</Card.Text>
                  <Link
                    to={`details/${product.id}`}
                    type='button'
                    className='btn btn-primary'
                  >
                    Details
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Home;
