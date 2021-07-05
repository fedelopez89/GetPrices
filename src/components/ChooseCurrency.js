import React, { useState } from 'react'
import { getCurrencies } from '../helpers/getCurrencies';
import TableCurrency from './TableCurrency';

const ChooseCurrency = () => {

    const [currency, setCurrency] = useState([]);

    const viewPrice = () => {
        getCurrencies().then(data => setCurrency(data))
    }

    return (<div className="d-flex justify-content-center">
        <div>
            <button className="btn btn-outline-info d-block m-auto" onClick={() => viewPrice()}>
                Ver Cotizaciones
            </button>
            <br></br>
            <table className="table table-hover">
                {
                    currency.length > 0 && <TableCurrency currency={currency} />
                }
            </table>
        </div>
    </div>
    )
}

export default ChooseCurrency
