import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react';
import MenuNavBar from './components/navbar';
import ListaProdutos from './pages/lista_produtos';
import ListaMovimentacao from './pages/lista_movimentacoes';
import ListaFornecedores from './pages/lista_fornecedores';


function App() {

  const [page, setPage] = useState('Produtos')

  return (
    <div>
      <MenuNavBar changePage={setPage}/>
      <div>
      {
        page === 'Produtos' ? (
          <ListaProdutos/>
        ) : page === 'Movimentação' ? (
            <ListaMovimentacao/>
          ) : (
            <ListaFornecedores/>
          )
      }
      </div>
    </div>
  );
}

export default App;
