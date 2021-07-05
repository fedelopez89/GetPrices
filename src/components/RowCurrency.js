
import React from 'react'
import { getCurrencies } from '../helpers/getCurrencies'

const RowCurrency = ({cur}) => {
    return (
        <>
            <tr>
                <td scope="row">
                    <p>{cur.id}</p>
                </td>
                <td scope="row">
                    <p>{cur.compra}</p>
                </td>
                <td scope="row">
                    <p>{cur.venta}</p>
                </td>
            </tr>
        </>
    )
}

export default RowCurrency
