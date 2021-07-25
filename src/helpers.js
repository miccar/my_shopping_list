
export  async function fetchData(){
    const req = await fetch('http://localhost:3000/product.json');
    const products = await req.json();
    return products;
}


const BUTTON_ADD =
    {
        id: "add",
        cl: "btn btn-default btn-md btn-success pull-right sameline",
        label: "Aggiungi"
    }
const BUTTON_DET={
    id: "detail",
    cl: "btn btn-default btn-md btn-primary pull-right sameline",
    label: "Dettaglio"
}
const BUTTON_SUBMIT={
    id: "submit",
    cl: "btn btn-default btn-md btn-danger pull-right",
    label: "Acquista"
}

const BUTTON_GOBACK={
    id: "goback",
    cl: "btn btn-default btn-md btn-dark pull-right sameline",
    label: "Indietro"
}
export const BUTTONS=[BUTTON_ADD,BUTTON_DET,BUTTON_SUBMIT,BUTTON_GOBACK]
export const CAR_PATH='/cartpage'
export const DETAIL_PATH='/detailpage'
export  const APP_PATH='/'