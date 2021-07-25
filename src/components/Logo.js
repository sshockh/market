import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to="/home">
            <img className="logo" src="/img/logo.png" alt="logo" />
        </Link>
    )
}

export default Logo;