import { Link } from 'react-router-dom';

function CartButton() {
    return (
        <Link to="/cart">
            <img className='cart-button' src="/img/cart.svg" alt="toCart" />
        </Link>
    );
}

export default CartButton;