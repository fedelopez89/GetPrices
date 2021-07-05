export const getCurrencies = async () => {

    const url = `https://www.dolarsi.com/api/api.php?type=valoresprincipales`;

    const resp = await fetch(url);
    const data = await resp.json();

    const curr = data.map(casa => {
        return {
            id     : casa.casa.nombre,
            compra : casa.casa.compra,
            venta  : casa.casa.venta,
        }
    })
    return curr;
}