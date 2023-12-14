
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormsFornecedor from '../formulario_fornecedor';

function BotaoAdicionarFornecedor(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  const [formData, setFormData] = useState(
    {
        'id': null,
        'nome': '',
        'cnpj': '',
    }
  );

  return (
    <>
      <p onClick={handleShow} className="m-2">
        Fornecedor
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulário de Inserção</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormsFornecedor setFormData={setFormData} formData={formData} />
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

export default BotaoAdicionarFornecedor;