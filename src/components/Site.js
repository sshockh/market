import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Site(props) {

    return (
        <div className='layout'>
            <Header
                cartItemCount={Object.keys(props.cart).length}
                isAuth={props.isAuth}
                username={props.username}
                logout={props.logout}
            />
            <Main
                cart={props.cart}
                categories={props.categories}
                addToCart={props.addToCart}
                removeFromCart={props.removeFromCart}
                filterByCategory={props.filterByCategory}
            />
            <Footer />
        </div>
    );
}

export default Site;