import{
    getAllEmployess
}from '../module/employess.js';

export const getAllClients = async() =>{
    let res = await fetch ("http://localhost:5501/clients")
    let data = await res.json();
    return data;
}

/*
export const getNameClientsWitchNameSalesManager = async(data) =>{
    let employees = await getAllEmployess()
    let dataUpdated = data.map(item =>{
        return {
            name_client: item.client_name,
            Sales_Manager: (employees.filter(
                employees => employees.employee_code === item.code_employee_sales_manager
            )).map(item =>{
                return item.name + ' ' + item.lastname1+' ' + item.lastname2
            }).join('')
        };

    });
    return dataUpdated
}*/


//opcion desestructurando:

export const getNameClientsWitchNameSalesManager = async(data) => {
    let employees = await getAllEmployess();
    let dataUpdated = data.map(({ client_name, code_employee_sales_manager }) => {
        let Sales_Manager = (employees
            .filter(employee => employee.employee_code === code_employee_sales_manager)
            .map(({ name, lastname1, lastname2 }) => `${name} ${lastname1} ${lastname2}`)
            .join('')
        );

        return { name_client: client_name, Sales_Manager };
    });

    return dataUpdated;
}
