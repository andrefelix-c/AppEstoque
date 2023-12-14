import { useState } from 'react';
import ItemMovimentacao from '../components/itemMovimentacao';

function ListaMovimentacao(){
    const [list, setList] = useState([
        {
            'id': 1,
            'tipo': 'Entrada',
            'data_hora': '23/01/2001 - 13:59',
            'produto_id': 3,
            'quantidade': 3,
            'fornecedor_id': 4,
            'valor': 48.9
        },
        {
            'id': 2,
            'tipo': 'Saída',
            'data_hora': '23/01/2001 - 13:59',
            'produto_id': 3,
            'quantidade': 3,
            'fornecedor_id': 4,
            'valor': 48.9
        }
    ]);

    return(
        <div>
            {
                list.map((item, index) => (<div className='m-3' key={index}><ItemMovimentacao  item={item} /></div>))
            }
        </div>
    );
}

export default ListaMovimentacao;