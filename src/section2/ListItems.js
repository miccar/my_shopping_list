
export function ListItems(props){

    const listLi= props?.data?.map((el,index)=>{
        return <li key={el.id} className={props.activeRow === index?  'list-group-item active':'list-group-item'}
                   tabIndex={index}>{el.title}</li>
    })
    const ulElement=<ul onClick={props.onChangeRow}>{listLi}</ul>

    return <div className="container-fluid xpad">
        <div className="card">
            <div className="card-header"> Prodotti
            </div>
            <div className="card-body">
                {ulElement}
            </div>
        </div>
    </div>
}