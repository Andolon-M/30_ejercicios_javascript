import { MyDetails } from "./components/myDetails.js";
import "./components/clock.js";
import { Mycard } from "./components/myCard.js";

let buttons= document.querySelectorAll("button");
let report__menu = document.querySelectorAll(".report__menu button");
let report__details = document.querySelector(".report__details");
let route = document.querySelector("#route");

buttons.forEach(button => {
    button-addEventListener("click", (e)=>{
        for (let button of report__menu) button.classList.remove("report__active");
        e. target.classList.add("report__active");
        

        if(e.target.innerHTML=="clients"){
            route.innerHTML = "Report / Clients";
            report__details.innerHTML = /*html*/ `
            <my-details logic="getAllClientsFromSpain" query="6. Devuelve un listado con el nombre de los todos los clientes españoles."></my-details>
            <my-details logic="getAllClientsFromSpainAndRepresentative11Or30" query="16. Devuelve un listado con todos los clientes que sean de la ciudad de Madrid y cuyo representante de ventas tenga el código de empleado 11 o 30."></my-details>
            <my-details logic="getClientsEmploy" query="#. Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante."></my-details>

            `
        }
        if(e.target.innerHTML=="requests"){
            route.innerHTML = "Report / Requests";
            report__details.innerHTML = /*html*/ `
            
            <my-details logic="getOrderStatuses" query="7. Devuelve un listado con los distintos estados por los que puede pasar un pedido."></my-details>

            `
        }
        if(e.target.innerHTML=="offices"){
            route.innerHTML = "Report / Offices";
            report__details.innerHTML = /*html*/ `
            
            <my-details logic="getAllOfficesCodeAndCity" query="1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas."></my-details>
            <my-details logic="getAllOfficesFromSpainCityAndMovil" query="2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España."></my-details>

            `
        }
        if(e.target.innerHTML=="employees"){
            route.innerHTML = "Report / Employees";
            report__details.innerHTML = /*html*/ `
            
            <my-details logic="getAllEmployeesWithBossAndCodeSeven" query="3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7."></my-details>
            <my-details logic="getBossFullNameAndEmail" query="4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa."></my-details>
            <my-details logic="getAllEmployeesNotSalesReps" query="5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas."></my-details>

            `
        }
    })
})


let [clients] = report__menu;
clients.click();
customElements.define("my-details" , MyDetails)
customElements.define ("my-card", Mycard)

