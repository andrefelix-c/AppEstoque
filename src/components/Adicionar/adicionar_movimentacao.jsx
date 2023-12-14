
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormsMovimentacao from '../formulario_movimentacao';

function BotaoAdicionarMovimentacao(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  const [formData, setFormData] = useState(
    {
        'id': null,
        'tipo': '',
        'data_hora': '',
        'produto_id': null,
        'quantidade': null,
        'fornecedor_id': null,
        'valor': null
    }
  );

  return (
    <>
      <p onClick={handleShow} className="m-2">
        Movimentação
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulário de Inserção</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormsMovimentacao setFormData={setFormData} formData={formData} />
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

export default BotaoAdicionarMovimentacao;