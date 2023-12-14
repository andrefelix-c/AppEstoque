import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function FormsProduto(props) {


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
            name="name"
            placeholder="Insira o nome"
            value={props.formData.nome}
            onChange={handleInputChange}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Descrição</Form.Label>
            <Form.Control
            type="text"
            name="descricao"
            placeholder="Insira a descrição"
            value={props.formData.descricao}
            onChange={handleInputChange}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Quantidade</Form.Label>
            <Form.Control
            type="number"
            name="quantidade"
            placeholder="Insira a quantidade"
            value={props.formData.quantidade}
            onChange={handleInputChange}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Preço:</Form.Label>
            <Form.Control
            type="number"
            name="valor"
            placeholder="Insira o valor"
            value={props.formData.preco}
            onChange={handleInputChange}
            />
        </Form.Group>
      </Form>
    </div>
  );
}

export default FormsProduto;
