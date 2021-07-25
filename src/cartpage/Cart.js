import {withRouter} from 'react-router-dom';
import {Button} from "../section2/Button";

export function Cart(props) {

    const list = props.cartList;
    console.log(list)
    const buyingList = list.map((prod) => {
        return <div key={prod.id}>{prod.title}</div>
    })


    return list.length > 0 ? (<div className="container-fluid">

            <div className="card">
                <div className="card-header"> Articoli nel Carrello</div>
                <div className="card-body">
                    <ul>{buyingList}</ul>
                    <Button btnIdx={props.btnIdx} action={props.onBuy}/></div>
            </div>

        </div>
    ) : <div className="container-fluid">Non c è niente nel carrello</div>
}

export default withRouter(Cart);