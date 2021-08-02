import { Switch, Route } from 'react-router-dom';
import UsersAdmin from '../admin/UsersAdmin';
import ProductsAdmin from '../admin/ProductsAdmin';
import Orders from '../admin/Orders';

function AdminContent(props) {


    return (
        <Switch>
            <Route path='/admin/users' component={UsersAdmin} />
            <Route path='/admin/products' component={ProductsAdmin} />
            <Route path='/admin/orders' component={Orders} />
        </Switch>
    )

}

export default AdminContent;