import products from './Product.js'
import {useNavigate} from 'react-router-dom'
const ProductCart = ({product}) => {

    const navigate = useNavigate();

    function goToDetail(){
        navigate(`/products/${product.id}`)
    }

    return ( 
        <section onClick={goToDetail}>
            <h2>{product.name}</h2>
        </section>
     );
}
 
export default ProductCart;