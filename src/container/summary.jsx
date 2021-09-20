import { useHistory } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Summary ({ data }) {
    const { push } = useHistory();

    // getting the needed data from the props data
    const { restaurant, items, user } = data;
    const { name, street, city, state, zipcode } = restaurant;

    // function for generating payment details
    const paymentCalculator = (items) => {
        let totalPrice = 0;
        let taxPayable = 0;
        let orderPrice = 0;

        items.forEach((item) => {
            let price = item.price * item.quantity;
            let tax = ( item.tax_pct / 100) * price;

            orderPrice += price;
            taxPayable += tax;
        });

        totalPrice = orderPrice + taxPayable;

        return { totalPrice, taxPayable, orderPrice }
    }

    const { totalPrice, taxPayable, orderPrice } = paymentCalculator(items);


    return (
        <div className="summarybody">
            <h2>Order Summary</h2>

            {/* page navigation button */}
            <motion.div 
                className="button"
                animate={{ y: 0 }}
                initial={{ y: '100vh' }}
                transition={{ type: 'spring', stiffness: 120 }}
            >
                <button
                    onClick={ () => push('/home') }
                >home</button>
                <button
                    onClick={ () => push('/profile') }
                >profile</button>
            </motion.div>

            {/* list of ordered product */}
            <div className="product-list">
                <h3>Ordered Products</h3>
                {
                    // dynamically generating order cards
                    items.map((item, i) => {
                        return (
                            <motion.div 
                                className="order-item" 
                                key={ item.name }
                                animate={{ x: 0 }}
                                initial={{ x: i % 2 == 0 ?'100vw' : '-100vw' }}
                                transition={{ type: 'spring', stiffness: 120 , delay: i + 1 }}
                            >
                                <h4>{ item.category }</h4>
                                <h3>{ item.name }</h3>
                                <div>
                                    <div>Price: ₹{ item.price }</div>
                                    <div>Quantity: { item.quantity } { item.quantity > 1 ? 'pcs': 'pc' }</div>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>

            {/* price details */}
            <div className="price">
                <p>tax payable: ₹{ taxPayable.toFixed(2) }</p>
                <p>price of items: ₹{ orderPrice.toFixed(2) }</p>
                <p>total price: ₹{ totalPrice.toFixed(2) }</p>
            </div>

            {/* customer details */}
            <div className="customer">
                <h3>Customer's Info</h3>
                <p>Name: { user.name }</p>
                <p>Address: { user.address }</p>
            </div>

            {/* restaurant details */}
            <div className="restaurant">
                <h3>Restaurant Details</h3>
                <p>Name: { name }</p>
                <p>Street: { street }</p>
                <p>City: { city }</p>
                <p>State: { state }</p>
                <p>Zipcode: { zipcode }</p>
            </div>

            {/* reference to tomiwa */}
            <div className='tomiwa' style={{ color: 'rgb(1, 1, 41)', marginTop: '10px', height: '30px', fontWeight: 'bold'}}>
                <div>
                Made with love <FaHeart color='red' fontSize='20px'/> by Tomiwa
                </div>
            </div>
        </div>
    );
}

export default Summary;