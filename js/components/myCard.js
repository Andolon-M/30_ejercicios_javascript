import {
    getClientsEmploy,
    getAllClientsFromSpainAndRepresentative11Or30
} from "../module/clients.js"


export class Mycard extends HTMLElement{
    constructor (){
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


    async getClientsEmployDesign(){
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

    async getAllClientsFromSpainAndRepresentative11Or30Design(){
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

    static get observedAttributes(){
        return ['query'];
    }
    attributeChangedCallback(name, old, now){
        
        if(name === 'query' && now == 'getClientsEmploy'){
            this.getClientsEmployDesign();
        }
        if(name === 'query' && now == "getAllClientsFromSpainAndRepresentative11Or30"){
            this.getAllClientsFromSpainAndRepresentative11Or30Design();
        }
    }
}