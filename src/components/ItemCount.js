
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function ItemCount() {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <Button variant="secondary" onClick={decrementCount}>-</Button>
      <span className="mx-2">{count}</span>
      <Button variant="secondary" onClick={incrementCount}>+</Button>
    </div>
  );
}

export default ItemCount;
