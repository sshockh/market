import { Switch, Route } from 'react-router-dom';
import UsersAdmin from '../admin/UsersAdmin';
import ProductsAdmin from '../admin/ProductsAdmin';

function AdminContent(props) {


    return (
        <Switch>
            <Route path='/admin/users' component={UsersAdmin} />
            <Route path='/admin/products' component={ProductsAdmin} />
        </Switch>
    )

}

export default AdminContent;