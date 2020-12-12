import React, { useCallback, useState, forwardRef, useImperativeHandle } from 'react';

function Modal({ ref }) {
  const [visible, setVisible] = useState(false);

  const openModal = useCallback(() => {
    setVisible(true);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      openModal
    }
  });

  const handleCloseModal = useCallback(() => {
    setVisible(false);
  }, []);

  if (!visible) return null;  
  
  return (
    <div>
      Modal openend

      <button onClick={handleCloseModal}>Close modal</button>
    </div>
  );
}

export default forwardRef(Modal);
