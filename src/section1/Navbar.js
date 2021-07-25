import 'font-awesome/css/font-awesome.min.css';
import {Link} from "react-router-dom";
import {CAR_PATH} from "../helpers";

export function Navbar(props){
    return  (<nav className="navbar navbar navbar-dark bg-dark">
         <div className="container-fluid">
             <span className="navbar-brand mb-0 h1">My Shopping List</span>
             <ul className="navbar-right">
                 <Link to={CAR_PATH} ><i className="fa fa-shopping-cart cartcolor"></i> <span className="badge">{props.badgeCart}</span></Link>
             </ul>
         </div>

    </nav>)
}
