

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormsProduto from '../fomulario_produto';

function BotaoAdicionarProduto(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  const [formData, setFormData] = useState(
    {
        'id': null,
        'nome': '',
        'descricao': '',
        'quantidade': null,
        'preco': null
    }
  );

  return (
    <>
      <p onClick={handleShow} className="m-2">
        Produto
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulário de Inserção</Modal.Title>
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

export default BotaoAdicionarProduto;