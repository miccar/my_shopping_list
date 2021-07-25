import {BUTTONS} from "../helpers";

export function Button(props){

    const btn=BUTTONS[props.btnIdx]

    return  <div className="container-fluid"><button key={btn.id}  className={btn.cl} onClick={props.action}>
        {btn.label}
    </button></div>
}


