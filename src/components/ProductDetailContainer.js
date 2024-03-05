import React, { useState, useEffect } from 'react';

function ProductDetailContainer({ match }) {
  const { id } = match.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const mockProducts = [
        { id: 1, name: 'Assassin\'s Creed: Black Flag', description: '¡Únete a la tripulación del Jackdaw en una épica aventura pirata!', price: 20 },
        { id: 2, name: 'The Witcher 3: Wild Hunt', description: 'Explora el vasto mundo de fantasía lleno de monstruos y misterios.', price: 30 },
        { id: 3, name: 'Hogwarts Legacy', description: '¡Embárcate en tu propia aventura en el mundo mágico de Harry Potter!', price: 25 }
      ];

      const selectedProduct = mockProducts.find(product => product.id === parseInt(id));
      setProduct(selectedProduct);
    }, 1000);
  }, [id]);

  return (
    <div>
      <h2>Detalles del Producto</h2>
      {product && (
        <div>
          <p>ID: {product.id}</p>
          <p>Nombre: {product.name}</p>
          <p>Descripción: {product.description}</p>
          <p>Precio: ${product.price}</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetailContainer;
