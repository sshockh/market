//import { Route, Switch, useRouteMatch } from "react-router-dom";

import CatalogHeader from "./CatalogHeader";
import Products from './ProductsContainer';
import Filter from './Filter';

function Catalog(props) {
    return (
        <div className="catalog">
            <CatalogHeader />
            <div className="catalog-main">
                <Products products={props.products} />
                <Filter />
            </div>
        </div>
    )
}

export default Catalog;