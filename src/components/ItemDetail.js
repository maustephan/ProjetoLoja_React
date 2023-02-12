function ItemDetail({ item }){
    return (
        <>  
            <div>
                <img src={item.pictureUrl} alt="" />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>{item.category}</p>
                <h3>R${item.price}</h3>
            </div>
        </>
    );
}

export default ItemDetail;