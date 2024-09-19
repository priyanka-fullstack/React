function Products(props){
    return(
        <>
        <div style={{textAlign:"center"}}>
            <img src={props.img} alt="Product" />
            <h4>{props.name}</h4>
            <p>{props.desc}</p>
            <h4>{props.price}</h4>
        </div>
        </>
    )
}

export default Products;