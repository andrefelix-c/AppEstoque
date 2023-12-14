import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import BotaoAdicionarProduto from './Adicionar/adicionar_produto';
import BotaoAdicionarMovimentacao from './Adicionar/adicionar_movimentacao';
import BotaoAdicionarFornecedor from './Adicionar/adicionar_fornecedor';

function MenuNavBar(props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">ESTOQUEI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link" onClick={() => props.changePage('Produtos')}>Produtos</Nav.Link>
            <Nav.Link href="#link" onClick={() => props.changePage('Movimentação')}>Movimentações</Nav.Link>
            <Nav.Link href="#link" onClick={() => props.changePage('Fornecedor')}>Fornecedor</Nav.Link>
            <NavDropdown title="Adicionar" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><BotaoAdicionarProduto/></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><BotaoAdicionarMovimentacao/></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><BotaoAdicionarFornecedor/></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuNavBar;