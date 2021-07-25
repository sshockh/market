import { Link } from 'react-router-dom';

function LoginButton(props) {
    return (
        <Link to='/login'>
            <button className='login-button' >Войти</button>
        </Link>
    )
}

export default LoginButton;