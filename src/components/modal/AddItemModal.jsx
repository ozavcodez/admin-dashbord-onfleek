import React, { useState } from 'react';
import "./add.scss";
import useModal from '../../lib/hooks';

const AddItemModal = ({ onSubmit }) => {
    const { isOpen, closeModal } = useModal();
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    onSubmit({ item, price });
    onClose();
  };

  return (
    <>
      
        <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Add Item and Price</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="item">Item:</label>
              <input
                type="text"
                id="item"
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
    </>
  );
};

export default AddItemModal;
