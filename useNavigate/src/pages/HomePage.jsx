import ProductCart from "../component/ProductCart";
import products from "../component/Product.js"

const HomePage = () => {
    return ( 
        <section>
            <h1>products</h1>
            <div className="productList">
                {products.map((product) => (
                    <ProductCart key={product.id} product={product} />
                ))}
            </div>
        </section>

     );
}
 
export default HomePage;