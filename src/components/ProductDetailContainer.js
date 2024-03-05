// En components/ProductDetailContainer.js
import React, { useState, useEffect } from 'react';

function ProductDetailContainer({ match }) {
  const { id } = match.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simular una llamada a una API o una operación asincrónica para obtener los detalles del producto
    // Aquí puedes hacer la llamada a tu API real para obtener los detalles del producto con el ID proporcionado
    setTimeout(() => {
      const mockProduct = {
        id: id,
        name: `Producto ${id}`,
        description: `Descripción del Producto ${id}`,
        price: Math.floor(Math.random() * 100) + 1
      };
      setProduct(mockProduct);
    }, 1000); // Simular un retardo de 1 segundo para obtener los datos
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
    