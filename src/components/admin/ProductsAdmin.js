import React from 'react';
import TableContainer from '../table/TableContainer';
import data from '../../products';

class ProductsAdmin extends React.Component {
    state = {
        columns: [
            {
                key: "id",
                title: 'id',
                width: 100,
                propName: 'id',
                sorted: true
            },
            {
                key: "name",
                title: 'Наименование',
                width: 400,
                propName: 'name',
                sorted: true,
                searchable: true
            },
            {
                key: "desc",
                title: 'Описание',
                width: 600,
                propName: 'desc',
                sorted: true,
                searchable: true
            },
            {
                key: "category",
                title: 'Категория',
                width: 250,
                propName: 'category',
                sorted: true
            },
            {
                key: "price",
                title: 'Цена',
                width: 150,
                propName: 'price',
                sorted: true
            },
            {
                key: "availableCount",
                title: 'Остаток',
                width: 150,
                propName: 'availableCount',
                sorted: true
            }
        ],
        data
    }

    render() {
        return (
            <TableContainer
                columns={this.state.columns}
                data={this.state.data}
                loaded={false}
            />
        )
    }

}

export default ProductsAdmin;