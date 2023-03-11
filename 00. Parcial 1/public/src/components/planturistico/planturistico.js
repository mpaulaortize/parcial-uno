class  ExtendsHTMLElement {
    static get observedAttributes(){
        return (["Destino","Duración en semanas","Costo","descripción","Actividades"])
    }

    constructor(){
        super();
        this.attachShadow([mode="open"]);
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowroot.innerhtml= 
        `
        <Section>
        <p>${this.destino}<p>
        <p>${this.duración-en-semanas}<p>
        <p>${this.costo}<p>
        <p>${this.descripción}<p>
        <p>${this.actividades}<p>
        <section>
        `
    }

}

customElements.define(planturistico,"plan turistico");
exportdefault.planturistico;
