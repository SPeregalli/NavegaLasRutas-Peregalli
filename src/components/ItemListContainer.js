// En components/ItemListContainer.js
import React, { useState, useEffect } from 'react';

function ItemListContainer() {
  // Definir estado para almacenar la lista de productos
  const [products, setProducts] = useState([]);

  // Simular la carga de productos con useEffect
  useEffect(() => {
    // Simular una llamada a una API o una operación asincrónica para obtener la lista de productos
    // Aquí puedes hacer la llamada a tu API real para obtener los datos
    setTimeout(() => {
      const mockProducts = [
        { id: 1, name: 'Producto 1', price: 10 },
        { id: 2, name: 'Producto 2', price: 20 },
        { id: 3, name: 'Producto 3', price: 30 }
      ];
      setProducts(mockProducts);
    }, 1000); // Simular un retardo de 1 segundo para obtener los datos
  }, []);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;
