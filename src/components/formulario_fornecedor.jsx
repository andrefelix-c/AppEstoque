import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function FormsFornecedor(props) {


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        props.setFormData({ ...props.formData, [name]: value });
      };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome</Form.Label>
            <Form.Control
            type="text"
            name="nome"
            placeholder="Insira o nome"
            value={props.formData.nome}
            onChange={handleInputChange}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>CNPJ</Form.Label>
            <Form.Control
            type="text"
            name="cnpj"
            placeholder="Insira a descrição"
            value={props.formData.cnpj}
            onChange={handleInputChange}
            />
        </Form.Group>

      </Form>
    </div>
  );
}

export default FormsFornecedor;
