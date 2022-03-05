import React, { useRef } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useContacts } from '../context/ContactsProvider';

export default function NewContactModal({ closeModal }) {
  const idRef = useRef();
  const nameRef = useRef();
  const { createContact } = useContacts();

  const submitHandler = (e) => {
    e.preventDefault();
    createContact(idRef.current.value, nameRef.current.values);
    closeModal();
  };

  return (
    <>
      <Modal.Header closeButton={closeModal}>Cria contacto</Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>
          <Button type="submit">Salvar</Button>
        </Form>
      </Modal.Body>
    </>
  );
}
