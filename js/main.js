import {
getAllOfficeCodeCiyt,
getAllOfficeCityAnsMovil
} from "./module/offices.js";

import {
    getFullNameAndEmails,
    getAllEmployess,
    getComapnyBoos
} from "./module/employess.js";

import {
    getAll,
    getPaymentsByParameter
} from "./module/payments.js";

import {
    getAllClients,
    getNameClientsWitchNameSalesManager
}from "./module/clients.js";

//1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.
//console.log(await getAllOfficeCodeCiyt());


//2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.
//console.log(await getAllOfficeCityAnsMovil())


//3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.
//console.log(await getFullNameAndEmails());


//4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.
//let data = await getAllEmployess();
//console.log(await getComapnyBoos(data))


/*
8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. 
Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos. Resuelva la consulta:
*/
//let data = await getAll();
//let dataWitFilterByParameter_1 = await getPaymentsByParameter(data, "payment", "PayPal");
//let dataWitFilterByParameter_2 = await getPaymentsByParameter(dataWitFilterByParameter_1, "year", "2008");
//console.log(dataWitFilterByParameter_2);



/*
1.2 1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su
representante de ventas.
*/

let data = await getAllClients();
console.log (await getNameClientsWitchNameSalesManager(data));