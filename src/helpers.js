export  async function fetchData(){
    const req = await fetch('http://localhost:3000/product.json');
    const products = await req.json();
    return products;
}

const BUTTON_ADD =
    {
        id: "add",
        cl: "btn btn-default btn-md btn-success",
        label: "Aggiungi"
    }
const BUTTON_DET={
    id: "detail",
    cl: "btn btn-default btn-md btn-info",
    label: "Dettaglio"
}
export const BUTTONS=[BUTTON_ADD,BUTTON_DET]
