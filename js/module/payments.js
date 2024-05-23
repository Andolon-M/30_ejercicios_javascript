/*
Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que
deberá eliminar aquellos códigos de cliente que aparezcan repetidos. Resuelva la consulta:
*/ 
export const getAll = async()=>{
    let res = await fetch("http://172.16.101.146:5647/payments")
    let data = await res.json();
    return data;
}


export const getPaymentsByParameter = async (data, parameter, valueParameter) => {
    try {
        
        let filteredData;
        
        // Filtra los datos según el parámetro especificado
        if (parameter === 'year') {
            const yearValue = parseInt(valueParameter); // Convertir el valor del año a un entero ya que en el json es un entero
            filteredData = data.filter(item => {
                const date = new Date(item.date_payment);
                return date.getFullYear() === yearValue;
            });
        } else {
            filteredData = data.filter(item => item[parameter] === valueParameter);
        }

        // Ordenar los datos filtrados por fecha de pago en orden descendente
        let orderedData = await orderByDateDescending(filteredData);
        
        return orderedData;
    } catch (error) {
        console.error("Error al obtener y filtrar los pagos:", error);
        return []; // Devuelve un array vacío en caso de error
    }
}


export const orderByDateDescending = async (data) => {
    try {
        
        data.sort((a, b) => {
            // Convierte las fechas de string a objetos Date para poder compararlas
            let dateA = new Date(a.date_payment);
            let dateB = new Date(b.date_payment);
            // Compara las fechas y devuelve el resultado de la comparación
            return dateB - dateA;
        });
        return data;
    } catch (error) {
        console.error("Error al obtener y ordenar los pagos por fecha:", error);
        return []; // Devuelve un array vacío en caso de error
    }
}