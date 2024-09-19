const Food = ({title, price, image, desc}) => {
    return ( 
  <div className="item">
            <img src={image} alt="" />
            <div className="itemInfo">
                <div className="itemInfoTop">
                    <h3>{title}</h3>
                    <h3 className="priceText">{price}</h3>
                </div>
                <p>{desc}</p>
            </div>
        </div>
        )}
 
export default Food;