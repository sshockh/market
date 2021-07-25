import Logo from './Logo';
import Search from './Search';
import CartButton from './CartButton';
import AuthMenuButton from './AuthMenuButton';

function Header(props) {
    return (
        <header className="header">
            <Logo />
            <Search />
            <CartButton />
            <AuthMenuButton
                isAuth={props.isAuth}
                username={props.username}
                logout={props.logout}
            />
        </header>
    );
}

export default Header;