import React from 'react';
import Products from './Products';

// Контейнерный компонент
class ProductsContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            error: null
        }
    }

    getProducts = () => {

        const url = 'http://sshock.ru:49152/products';
        fetch(url, {
            method: 'get',
            headers: new Headers({
                //'Authorization': 'Basic ' + btoa('username:password'),
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                //'Content-Type': 'application/json',

            })
        })
            .then(res => {
                if (res.ok) {
                    const productsObject = {};
                    res.json()
                        .then(arr => {
                            arr.forEach(item => {
                                productsObject[item.id] = item;
                            });

                            this.setState({
                                products: productsObject,
                                error: null
                            });
                        })

                } else {
                    if (res.status === 401)
                        alert('Токен протух');
                    this.setState({
                        products: [],
                        error: res.status
                    })
                }
            })
            .catch(err => {
                console.log('Error->', err);
                this.setState({
                    products: [],
                    error: err
                })
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.getProducts}>get products</button>
                { this.state.error
                    ? (<div>{this.state.error}</div>)
                    : (<Products products={this.state.products} />)}
            </div>
        );
    }

}

export default ProductsContainer;