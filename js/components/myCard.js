import {
    getClientsEmploy,
    getAllClientsFromSpainAndRepresentative11Or30,
    getAllClientsFromSpain
} from "../module/clients.js"
import { getAllEmployeesNotSalesReps, getAllEmployeesWithBossAndCodeSeven, getBossFullNameAndEmail } from "../module/employess.js";
import { getAllOfficesCodeAndCity, getAllOfficesFromSpainCityAndMovil } from "../module/offices.js";
import { getOrderStatuses } from "../module/request.js";


export class Mycard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
        this.shadowRoot.innerHTML = /*html*/`
        
            <link rel="stylesheet" href="../css/myCard.css">
            <div class="report__card">
                <div class="card__title">
                    <div>...</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>...</p>
                        <p><b>Ciudad: </b>....</p>
                    </div>
                </div>
            </div>
        `
    }
    // ************************************************************


    // query #
    async getClientsEmployDesign() {
        let data = await getClientsEmploy();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>${val.name_employee}</p>
                        <p><b>Ciudad: </b>${val.city}</p>
                    </div>
                </div>
            </div>
            `;
        });

    }

    // query 16
    async getAllClientsFromSpainAndRepresentative11Or30Design() {
        // console.log(await getAllClientsFromSpainAndRepresentative11Or30());
        let data = await getAllClientsFromSpainAndRepresentative11Or30();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del contacto: </b>${val.contact_name}</p>
                        <p><b>Telefono: </b>${val.phone}</p>
                    </div>
                </div>
            </div>
            `;
        });
    }

    // query 1
    async getAllOfficesCodeAndCityDesing() {
        //console.log(await getAllOfficesCodeAndCity())
        let data = await getAllOfficesCodeAndCity();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                <div class="card__title">
                    <div>${val.codigo}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Ciudad: </b>${val.ciudad}</p>
                    </div>
                </div>
            </div>
            `;
        });
    }

    // query 2
    async getAllOfficesFromSpainCityAndMovilDesing() {
        let data = "no hay informaicons";
        data = await getAllOfficesFromSpainCityAndMovil();
        console.log(data);

        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                <div class="card__title">
                    <div>${val.ciudad}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Telefono: </b>${val.telefono}</p>
                    </div>
                </div>
            </div>
            `;
        });
    }

    // query 3
    async getAllEmployeesWithBossAndCodeSevenDesign() {
        let data = await getAllEmployeesWithBossAndCodeSeven();
        // console.log(data);
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                <div class="card__title">
                    <div>${val.nombre} ${val.apellidos}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Email: </b>${val.email}</p>
                    </div>
                </div>
            </div>
            `;
        });
    }

    //query 4
    async getBossFullNameAndEmailDesing() {
        let data = await getBossFullNameAndEmail();
        // console.log(data)

        this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                <div class="card__title">
                    <div>${data.nombre} ${data.apellidos}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Email: </b>${data.email}</p>
                    </div>
                </div>
            </div>
            `;

    }


    //query 5 
    async getAllEmployeesNotSalesRepsDesing() {
        let data = await getAllEmployeesNotSalesReps();
        // console.log(data);
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                <div class="card__title">
                    <div>${val.nombre} ${val.apellidos}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Puesto: </b>${val.puesto}</p>
                    </div>
                </div>
            </div>
            `;
        });

    }


    // query 6
    async getAllClientsFromSpainDesing() {
        let data = await getAllClientsFromSpain();
        // console.log(data);
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                <div class="card__title">
                    <div>${val.nombre_cliente}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del contacto: </b>${val.nombre_contacto} ${val.apellido_contacto}</p>
                        <p><b>Telefono: </b>${val.telefono}</p>
                        <p><b>Fax: </b>${val.fax}</p>
                        <p><b>Direccion 1: </b>${val.direccion1}</p>
                        <p><b>Direccion 2: </b>${val.direccion2}</p>
                        <p><b>Ciudad: </b>${val.ciudad}</p>
                    </div>
                </div>
            </div>
            `;
        });
    }

    // query 7
    async getOrderStatusesDesing() {
        let data = await getOrderStatuses();
        // console.log(data);
        // Dentro de tu Web Component
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
        <div class="report__card">
            <div class="card__title">
                <div>Estados Disponibles</div>
            </div>
            <div class="card__body">
                <div class="body__marck">
                    <p><b>Estado: </b>${val}</p>
                </div>
            </div>
        </div>
    `;
        });

    }


    // configuracion del observador y del su respuesta
    static get observedAttributes() {
        return ['query'];
    }
    attributeChangedCallback(name, old, now) {
        //query #
        if (name === 'query' && now == 'getClientsEmploy') {
            this.getClientsEmployDesign();
        }

        //query 16
        if (name === 'query' && now == "getAllClientsFromSpainAndRepresentative11Or30") {
            this.getAllClientsFromSpainAndRepresentative11Or30Design();
        }

        //query 1
        if (name === "query" && now == "getAllOfficesCodeAndCity") {
            this.getAllOfficesCodeAndCityDesing();
        }

        //query 2
        if (name === "query" && now == "getAllOfficesFromSpainCityAndMovil") {
            this.getAllOfficesFromSpainCityAndMovilDesing();
        }

        //query 3
        if (name === "query" && now == "getAllEmployeesWithBossAndCodeSeven") {
            this.getAllEmployeesWithBossAndCodeSevenDesign();
        }

        //query 4
        if (name === "query" && now == "getBossFullNameAndEmail") {
            this.getBossFullNameAndEmailDesing()
        }

        //query 5
        if (name === "query" && now == "getAllEmployeesNotSalesReps") {
            this.getAllEmployeesNotSalesRepsDesing();
        }

        //query 6
        if (name === "query" && now == "getAllClientsFromSpain") {
            this.getAllClientsFromSpainDesing();
        }

        //query 7
        if (name === "query" && now == "getOrderStatuses") {
            this.getOrderStatusesDesing();
        }
    }
}