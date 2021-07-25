import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Catalog from './Catalog';
import Categories from './Categories';
import Cart from './Cart';

function Main(props) {
    return (
        <main className='main'>
            <div className='categories'>
                <Categories
                    categories={props.categories}
                    filterByCategory={props.filterByCategory}
                />
            </div>
            <div className='content'>
                <Switch>
                    <Route path="/catalog" render={() =>
                        <Catalog
                            products={props.products}
                        />}
                    />
                    <Route path="/cart" render={() =>
                        <Cart
                            cart={props.cart}
                            addToCart={props.addToCart}
                            removeFromCart={props.removeFromCart}
                        />
                    } />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </main>
    );
}

export default Main;