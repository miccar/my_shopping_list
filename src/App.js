import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import {useEffect, useState} from "react";
import {ListItems} from "./section2/ListItems";
import {Button} from "./section2/Button";
import {APP_PATH, CAR_PATH, DETAIL_PATH, fetchData} from "./helpers";
import {Navbar} from "./section1/Navbar";
import {useHistory} from 'react-router-dom'
import {withRouter} from 'react-router-dom';
import {
    Switch,
    Route
} from "react-router-dom";
import {Cart} from "./cartpage/Cart";
import {Detail} from "./detailpage/Detail";

function App() {


    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [activeRow, setActiveRow] = useState(0)
    const [selectedItem, setSelectedItem] = useState()
    const [cartList, setCartList] = useState([])
    const [badgeCart, setBadgeCart] = useState(0)
    const history = useHistory()


    const onBuy = () => {
        setCartList([])
        setBadgeCart(0)
        setActiveRow(0)
        history.push(APP_PATH)
    }
    const goBack = () => {
        history.push(APP_PATH)
    }


    const onHandleAdd = () => {

        if (selectedItem && !cartList.includes(selectedItem)) {
            setCartList([...cartList, selectedItem])
            setBadgeCart(badgeCart + 1)
        }

    }
    const onHandleAddFromDetail = () => {

        if (selectedItem && !cartList.includes(selectedItem)) {
            setCartList([...cartList, selectedItem])
            setBadgeCart(badgeCart + 1)
        }
        history.push(APP_PATH)
    }



    const onHandleDetail = () => {
        history.push(DETAIL_PATH)
    }


    const onChangeRow = (e) => {
        e.preventDefault();
        const idx = e.target.tabIndex
        setActiveRow(idx)


    }

    useEffect(() => {
        setSelectedItem(data[activeRow])
    }, [activeRow,data])


    useEffect(() => {
        fetchData().then(data => {
            setData(data)
        })
        setLoading(false);
    }, [])

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }
    return (

        <div id="main-div">
            <Switch>
                <Route path={CAR_PATH}>
                    <Cart cartList={cartList} btnIdx={2} onBuy={onBuy} />
                </Route>
                <Route path={DETAIL_PATH}>
                    <Detail btnIdx={3} btnIdx2={0} goBack={goBack} item={selectedItem} add={onHandleAddFromDetail}/>
                </Route>
                <Route path={APP_PATH}>
                    <Navbar badgeCart={badgeCart}/>
                    <ListItems data={data} activeRow={activeRow} onChangeRow={onChangeRow}/>
                    <Button btnIdx={1} action={onHandleDetail}/>
                    <Button btnIdx={0} action={onHandleAdd}/>
                </Route>
            </Switch>
        </div>

    );


}


export default withRouter(App);
