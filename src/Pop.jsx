import React from 'react';

function Example({ trigger, setTrigger, selectedProduct }) {
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {selectedProduct && (
          <>
<h3>{selectedProduct.title}</h3>
              <p>Category: {selectedProduct.category}</p>
            <p>Price: {selectedProduct.price}$</p>
            <button onClick={setTrigger}>Close</button>
          </>
        )}
      </div>
    </div>
  ) : null;
}

export default Example;
