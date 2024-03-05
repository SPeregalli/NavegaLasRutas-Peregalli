import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import Cart from './Cart';

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const mockProducts = [
        { id: 1, name: 'Assassin\'s Creed: Black Flag', price: 20, image: '../images/assassin-s-creed-black-flag-3.jpg' },
        { id: 2, name: 'The Witcher 3: Wild Hunt', price: 30, image: '../images/3536200-8148212612-EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S2_1200x1600-53a8fb2c0201cd8aea410f2a049aba3f.jpg' },
        { id: 3, name: 'Hogwarts Legacy', price: 25, image: '../images/Ah7Ar9MU0r1BBlzAUflmhyQP.png' }
      ];
      setProducts(mockProducts);
    }, 1000); 
  }, []);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      const updatedItems = cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    const updatedItems = cartItems.filter(item => item.id !== itemToRemove.id);
    setCartItems(updatedItems);
  };

  return (
    <div>
      <h2>Productos Disponibles</h2>
      <div className="card-container">
        {products.map(product => (
          <Card key={product.id} style={{ width: '18rem', margin: '1rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>Precio: ${product.price}</Card.Text>
              <Button variant="primary" onClick={() => addToCart(product)}>Agregar al Carrito</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default ItemListContainer;
