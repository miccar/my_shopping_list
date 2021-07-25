import {Button} from "../section2/Button";
import {withRouter} from "react-router-dom";


export function Detail(props) {


    return <div className="container-fluid">
        <div className="card">
            <div className="card-header"> Dettaglio {props?.item?.title}
            </div>
            <div className="card-body">
                <p>{props?.item?.desc}</p>
                <Button btnIdx={props.btnIdx} action={props.goBack}/>
                <Button btnIdx={props.btnIdx2} action={props.add}/>
            </div>
        </div>
    </div>

}

export default withRouter(Detail);