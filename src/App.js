import React, { useCallback, useRef } from 'react';
import Input from './components/Input';
import Modal from './components/Modal';

function App() {
  const inputRef = useRef(null);
  const acceptTermsRef = useRef({ value: false });
  const modalRef = useRef(null);

  const handleOpenModal = useCallback(() => {
    modalRef.current?.openModal();
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    inputRef.current.focus();
  }, []);

  // const handleAcceptTerms = useCallback(() => {
  //   acceptTermsRef.current.value = !acceptTermsRef.current.value;
  // }, []);

  return (
    <div className="App">
     <form onSubmit={handleSubmit}>
      <Input name="name" label="name" ref={inputRef}/>
      {/* <button  type="button" onClick={handleAcceptTerms}>Accept terms</button> */}

      <button type="submit">Submit</button>
     </form>

     <button onClick={handleOpenModal}>Open modal</button>

     <Modal ref={modalRef}/>
    </div>
  );
}

export default App;
