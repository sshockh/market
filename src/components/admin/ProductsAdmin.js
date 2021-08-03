import React from 'react';
import TableContainer from '../table/TableContainer';

class ProductsAdmin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return <TableContainer loaded={false} />
    }

}

export default ProductsAdmin;