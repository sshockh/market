import React from 'react';
import Site from './Site';
import Authentification from './Authentification';
import { Route, Switch } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false, // пользователь авторизован
      username: null, // имя пользователя
      products: {
        '1': {
          name: 'Лодка ПВХ',
          desc: 'Великолепный вариант для семейного отдыха и рыбалки. Выбор истинного лоха рыбака',
          price: 4000.0,
          img: '/lodka_pvh.jpg',
          availableCount: 99,
          category: 105
        },
        '2': {
          name: 'Лодка ПВХ Ривьера 3400 СК (КОМПАКТ) надувная под мотор',
          desc: 'Лодка Ривьера 3400 СК версии компакт/лайт/light - это прекрасный пример качественной лодки по адекватной цене с отличными техническими характеристиками',
          price: 39170.0,
          img: 'river-3400-1.jpg',
          availableCount: 7,
          category: 105
        },
        '3': {
          name: 'Лодка ПВХ DRAGON 330 Classic PRO 9мм сборная слань на стрингерах',
          desc: 'Лодка ПВХ Dragon 330 Classic PRO - надежная моторная лодка из армированной ткани плотностью 1100 г/м2 с классическими баллонами. В базовой комплекатации идут мягкие накладки на сиденья',
          price: 31990.0,
          img: '/dragon-330-classic-base-1.jpg',
          availableCount: 5,
          category: 105
        },
        '4': {
          name: 'Лодка ПВХ Аква 2800 надувная под мотор',
          desc: 'Надувная лодка АКВА 2800 имеет положительные отзывы владельцев благодаря хорошим соотношениям цены и характеристик. Кокпит: 208x62 см. По периметру установлен привальный брус с волноотбойником',
          price: 16520.0,
          img: '/1698_2.jpg',
          availableCount: 2,
          category: 105
        },
        '5': {
          name: 'Фирменная футболка ZoMarket',
          desc: 'Zoooooooo',
          price: 2999.99,
          img: '/zo.jpg',
          availableCount: 999,
          category: 101
        },
      },
      cart: {
        '1': 1,
        '4': 1
      },
      categories: {
        "101": {
          name: "Одежда"
        },
        "102": {
          name: "Дом и сад"
        },
        "103": {
          name: "Детские товары"
        },
        "104": {
          name: "Бытовая техника"
        },
        "105": {
          name: "Спорт и отдых"
        },
        "106": {
          name: "Строительство и ремонт"
        },
        "107": {
          name: "Товары для животных"
        },
      }
    }
  }

  setAuth = (isAuth, username) => {
    this.setState({
      isAuth, username
    })
  }

  logout = () => {
    delete localStorage.token;
    this.setState({
      isAuth: false,
      username: null
    });
  }

  // Добавляет в корзину указанное количество товара. Кол-во может быть отрицательным
  addToCart = (productId, count) => {
    if (count === 0) return;

    const cart = { ...this.state.cart };
    const current = cart[productId];
    const product = this.state.products[productId];

    if (typeof current == 'number') {
      let newCount = current + count;
      if (newCount < 1) newCount = 1;
      if (newCount > product.availableCount) newCount = product.availableCount
      cart[productId] = newCount;
    } else {
      cart[productId] = count;
    }

    this.setState({ cart });
  }

  // Удаляет товар из корзины
  removeFromCart = productId => {
    const cart = { ...this.state.cart };
    delete cart[productId];
    this.setState({ cart })
  }

  filterByCategory = categoryId => {
    setTimeout(() => {
      const all = this.state.allProducts;
      const filteredProducts = {};
      Object.keys(this.state.allProducts).forEach(key => {
        if (all[key].category === categoryId)
          filteredProducts[key] = all[key];
      });
      this.setState({ products: filteredProducts });
    }, 500);
  }

  render() {
    return (
      <div onClick={this.onClick}>
        <Switch>
          <Route path="/login" render={
            () => (<Authentification setAuth={this.setAuth} />)
          } />
          <Route path="/admin" render={() => <AdminDashboard />} />
          <Route path="/" render={() => {
            return (<Site
              isAuth={this.state.isAuth}
              username={this.state.username}
              logout={this.logout}
              cart={this.state.cart}
              categories={this.state.categories}
              addToCart={this.addToCart}
              removeFromCart={this.removeFromCart}
              filterByCategory={this.filterByCategory}
            />)
          }
          }
          />
        </Switch>
      </div>
    );
  }

}

export default App;