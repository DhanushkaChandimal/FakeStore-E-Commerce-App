import Product from "./Product"

const ProductList = ({ productList }) => {

    return (
        <div>
            <h1 className="text-center">Products</h1>
            <div className="d-flex flex-wrap gap-3">
                {productList.map((item) => {
                    return <Product key={item.id} productDetails = {item}/>
                })}
            </div>
        </div>
    )
}

export default ProductList