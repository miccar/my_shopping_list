import 'font-awesome/css/font-awesome.min.css';

export function Navbar(props){
    return  (<nav className="navbar navbar navbar-dark bg-dark">
         <div className="container-fluid">
             <span className="navbar-brand mb-0 h1">Navbar</span>
             <ul className="navbar-right">
                 <li><a href="#" onClick={props.onCartEvent} id="cart"><i className="fa fa-shopping-cart cartcolor"></i> <span className="badge">{props.badgeCart}</span></a>
                 </li>
             </ul>
         </div>

    </nav>)
}