import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {

    handlePlusClick(id, count) {
        this.props.addToCart(id, count);
    }

    handleRemoveClick(id) {
        this.props.removeFromCart(id);
    }

    render() {
        const props = this.props;
        let sum = 0;

        if (Object.keys(props.cart).length === 0) return (<h1>Корзина пуста</h1>);

        return (
            <div className='cart'>
                <h1>Корзина</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Наименование товара</th>
                            <th>Количество</th>
                            <th>Цена</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(props.cart).map(key => {
                            let { name, price, availableCount } = props.products[key];
                            let count = props.cart[key];
                            sum += price * count;

                            return (
                                <tr key={key}>
                                    <td><Link to="/catalog">{name}</Link></td>
                                    <td>
                                        {<button
                                            disabled={count < 2}
                                            onClick={this.handlePlusClick.bind(this, key, -1)}
                                        >-</button>}
                                        <span> {count} </span>
                                        <button
                                            disabled={count > availableCount - 1}
                                            onClick={this.handlePlusClick.bind(this, key, 1)
                                            }>+</button>
                                    </td>
                                    <td>{price}</td>
                                    <td><button
                                        onClick={this.handleRemoveClick.bind(this, key)}
                                    >X</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan="2" >Стоимость товаров</th>
                            <th>{sum}</th>
                        </tr>
                    </thead>
                </table>
                <button>Оформить заказ</button>
            </div>
        );
    }
}

export default Cart;