
export function ListItems(props){

    const listaLi= props?.data?.map((el,index)=>{
        return <li key={el.id} className={props.activeRow === index?  'list-group-item active':'list-group-item'}  tabIndex={index}>{el.title}</li>
    })
    return  <ul onClick={props.onChangeRow}>{listaLi}</ul>

}