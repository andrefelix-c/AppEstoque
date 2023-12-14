import './styles/itemProduto.css';

import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaTrash } from 'react-icons/fa';
import Botao from './botaoEditarProduto';

function ItemProduto(props) {
  return (
    <Card>
      <Row className="align-items-center">
        <Col className="text-start">
            <Card.Body>
              <span className='first'>Nome:</span> {props.item.nome}
              <span>Descição:</span> {props.item.descricao}
              <span>Quantidade:</span> {props.item.quantidade}
              <span>Preço:</span> R${props.item.preco}
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

export default ItemProduto;