import { useState } from 'react';
import ItemProduto from '../components/itemProduto';

function ListaProdutos(){
    const [list, setList] = useState([
        {
            'id': 1,
            'nome': 'Nescau Cereal',
            'descricao': 'Nescau Cereal - 200g',
            'quantidade': 3,
            'preco': 12.9
        },
        {
            'id': 2,
            'nome': 'Leite Maranguape Integral',
            'descricao': 'Leite Maranguape Integral - 1L',
            'quantidade': 3,
            'preco': 4.98
        }
    ]);

    return(
        <div>
            {
                list.map((item, index) => (<div className='m-3' key={index}><ItemProduto  item={item} /></div>))
            }
        </div>
    );
}

export default ListaProdutos;