function Products(props) {
    return <div className="products">
        {
            Object.keys(props.products).map(key => (
                <div className="product-row" key={key}>
                    {props.products[key].name}
                </div>
            ))
        }
    </div>;
}

export default Products;