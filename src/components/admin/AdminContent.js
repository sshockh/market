import { Switch, Route } from 'react-router-dom';
import Users from '../admin/Users';
import ProductsAdmin from '../admin/ProductsAdmin';
import Orders from '../admin/Orders';

function AdminContent(props) {


    return (
        <Switch>
            <Route path='/admin/users' component={Users} />
            <Route path='/admin/products' component={ProductsAdmin} />
            <Route path='/admin/orders' component={Orders} />
        </Switch>
    )

}

export default AdminContent;