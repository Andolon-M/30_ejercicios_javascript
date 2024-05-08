//Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.

import { json } from "milliparsec";

export const  getFullNameAndEmails = async() =>{
    let res = await fetch("http://localhost:5502/employees?code_boss=7");
    let data = await res.json();
    let dataUptapted = data.map(item => {
        return {
            name: item.name,
            fullLastName: item.lastname1+' '+item.lastname2,
            email: item.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
        }
    })
    return dataUptapted
}   


//devuelve todos los empleados de la empresa
export const getAllEmployess = async () => {
    let res = await fetch("http://localhost:5502/employees");
    let data = await res.json();
    return data;
}

//devuelve el gefe de la empresa
export const getComapnyBoos = async (data) => {
    let bossComany = data.filter(employe => employe.code_boss == null)
    return bossComany;
}