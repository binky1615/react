import {useNavigate, useParams} from 'react-router-dom'
import products from '../products.js'

const ProductDetailPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    //find the id in the product list that's the same as the id in the url :3
    const product = products.find((prod) => prod.id === Number(id));

    if(!product){
        return <h2>what the sigma</h2>
    }

    return ( 
        <section>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <button onClick={() => navigate(-1)} >back</button>
        </section>
     );
}
 
export default ProductDetailPage;