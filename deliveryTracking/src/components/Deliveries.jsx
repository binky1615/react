const Deliveries = ({place, orderID, status}) => {
    return (
        <div className="order">
            <div className="orderInfoTop">
                <h3>Package from {place}</h3>
                <p>{status}</p>
            </div>
            <p>Order ID {orderID}</p>
        </div>
    );
}
 
export default Deliveries;