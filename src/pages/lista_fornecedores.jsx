import { useState } from 'react';
import ItemFornecedor from '../components/itemFornecedor';

function ListaFornecedores(){
    const [list, setList] = useState([
        {
            'id': 1,
            'nome': 'HappyLandia',
            'cnpj': '00.000.000/0001-00',
        },
        {
            'id': 2,
            'nome': 'HellLandia',
            'cnpj': '00.000.000/0001-00',
        },
    ]);

    return(
        <div>
            {
                list.map((item, index) => (<div className='m-3' key={index}><ItemFornecedor  item={item} /></div>))
            }
        </div>
    );
}

export default ListaFornecedores;