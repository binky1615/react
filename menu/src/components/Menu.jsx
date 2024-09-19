const Menu = ({title, price, image, desc}) => {
    return ( 
    <div className="menuElement">
        <img src={image} alt="" />
        <div className="menuInfo">
            <h3>{title}</h3>
            <h3>{price}</h3>
            <p>{desc}</p>
        </div>
    </div>
     );
}
 
export default Menu;