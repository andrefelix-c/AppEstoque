import './styles/itemProduto.css';

import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaTrash } from 'react-icons/fa';
import Botao from './botaoEditarMovimentacao';

function ItemMovimentacao(props) {
  return (
    <Card>
      <Row className="align-items-center">
        <Col className="text-start">
            <Card.Body>
              <span className='first'>Tipo:</span> {props.item.tipo}
              <span>Data:</span> {props.item.data_hora}
              <span>Quantidade:</span> {props.item.quantidade}
              <span>Produto:</span> {props.item.produto_id}
              <span>Fornecedor:</span> {props.item.fornecedor_id}
              <span>Valor:</span> R${props.item.valor}
            </Card.Body>
        </Col>
        <Col className="text-end">
            <Button onClick={() => console.log('Deletado Item: ' + props.item.id)} className="m-2 custom-btn">
                <FaTrash />
            </Button>
            <Botao icon={'FaEdit'} item={props.item} onClick={(e) => console.log(props.item)}/>
        </Col>
      </Row>
    </Card>
  );
}

export default ItemMovimentacao;