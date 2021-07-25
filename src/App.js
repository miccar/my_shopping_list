import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import {useEffect, useState} from "react";
import {ListItems} from "./section2/ListItems";
import {Button} from  "./section2/Button";
import {fetchData} from "./helpers";
import {Navbar} from "./section1/Navbar";
import {useHistory} from 'react-router-dom'

function App() {


    const [data,setData]=useState([])
    const [isLoading, setLoading] = useState(true);
    const [activeRow,setActiveRow]=useState(0)
    const [selectedItem,setSelectedItem]=useState()
    const [cartList,setCartList] =useState([])
    const [badgeCart,setBadgeCart]=useState(0)

    const history=useHistory()

    const onCartEvent=()=>{
        history.push("/cartpage")

    }

    const onHandleAdd=()=>{
         if(selectedItem && !cartList.includes(selectedItem)){
             setCartList([...cartList,selectedItem])
             setBadgeCart(badgeCart+1)
         }


    }
    const onHandleDetail=()=>{
       // alert("handleDetail")
    }


    const onChangeRow=(e)=>{
        e.preventDefault();
        const idx=e.target.tabIndex
        setActiveRow(idx)


    }

    useEffect(()=>{
        setSelectedItem(data[activeRow])

    },[activeRow])



    useEffect(()=>{
        fetchData().then(data=>{
            setData(data)
            setSelectedItem(data[activeRow])
        })
        setLoading(false);
    },[])

        if (isLoading) {
            return <div className="App">Loading...</div>;
        }
        return (
            <div id="main-div">
                <Navbar badgeCart={badgeCart} onCartEvent={onCartEvent} />
                {/*<Button btnIdx={1} action={onHandleDetail}/>*/}
                <ListItems data={data} activeRow={activeRow} onChangeRow={onChangeRow} />
                <Button btnIdx={0} action={onHandleAdd}/>
            </div>

        );


}


export default App;
