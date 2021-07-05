import React from 'react';
import RowCurrency from './RowCurrency';

const TableCurrency = ({ currency }) => {
    
    let today = new Date();
    let date1 = today.getDate() + '/' + ( today.getMonth() + 1) + '/' + today.getFullYear();
    let time = today.getHours() + ':' + today.getMinutes() + ":" + today.getSeconds();

    return (<>
        <thead className="thead-dark">
        <div><p >Fecha: {date1} Hora: {time}</p></div>
            <tr>
                <th scope="col">
                    <h5>Moneda</h5>
                </th>
                <th scope="col">
                    <h5>Compra</h5>
                </th>
                <th scope="col">
                    <h5>Venta</h5>
                </th>
            </tr>
        </thead>
        <tbody>
        {
            currency.length > 0 &&
            currency.map(cur => (
                <RowCurrency key={cur.id} cur={cur} />
            ))
        }
        </tbody>
    </>
    )
}

export default TableCurrency
