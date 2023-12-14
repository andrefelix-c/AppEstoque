import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function FormsMovimentacao(props) {

    


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        props.setFormData({ ...props.formData, [name]: value });
      };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Tipo</Form.Label>
            <Form.Control
            type="text"
            name="tipo"
            placeholder="Insira o tipo"
            value={props.formData.tipo}
            onChange={handleInputChange}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Data</Form.Label>
            <Form.Control
            type="text"
            name="data"
            placeholder="Insira a Data"
            value={props.formData.data_hora}
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

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Produto</Form.Label>
            <Form.Control
            type="number"
            name="produto"
            placeholder="Insira o Produto"
            value={props.formData.produto}
            onChange={handleInputChange}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Fornecedor</Form.Label>
            <Form.Control
            type="number"
            name="fornecedor"
            placeholder="Insira o Fornecedor"
            value={props.formData.fornecedor}
            onChange={handleInputChange}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Valor</Form.Label>
            <Form.Control
            type="number"
            name="valor"
            placeholder="Insira o valor"
            value={props.formData.valor}
            onChange={handleInputChange}
            />
        </Form.Group>
      </Form>
    </div>
  );
}

export default FormsMovimentacao;
