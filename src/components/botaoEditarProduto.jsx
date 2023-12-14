import './styles/modal.css'

import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormsProduto from './fomulario_produto';

function Botao(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  const [formData, setFormData] = useState(props.item);

  return (
    <>
      <Button onClick={handleShow} className="m-2 custom-btn">
        <FaEdit />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulário de Edição</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormsProduto setFormData={setFormData} formData={formData} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => console.log(formData)}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Botao;