import React from 'react';
import TableBody from './TableBody';
import './table.css'

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // описание колонок таблицы
            columns: [
                {
                    key: "id",
                    title: 'id',
                    width: 50,
                    propName: 'id'
                },
                {
                    key: "name",
                    title: 'Наименование',
                    width: 400,
                    propName: 'name'
                },
                {
                    key: "price",
                    title: 'Цена',
                    width: 200,
                    propName: 'price'
                },
                {
                    key: "availableCount",
                    title: 'Остаток',
                    width: 200,
                    propName: 'availableCount'
                },
                {
                    key: "desc",
                    title: 'Описание',
                    width: 600,
                    propName: 'desc'
                }
            ],
            data: [
                {
                    id: 1,
                    name: 'Лодка ПВХ',
                    desc: 'Великолепный вариант для семейного отдыха и рыбалки. Выбор истинного лоха рыбака',
                    price: 4000.0,
                    img: '/lodka_pvh.jpg',
                    availableCount: 99,
                    category: 105
                },
                {
                    id: 2,
                    name: 'Лодка ПВХ Ривьера 3400 СК (КОМПАКТ) надувная под мотор',
                    desc: 'Лодка Ривьера 3400 СК версии компакт/лайт/light - это прекрасный пример качественной лодки по адекватной цене с отличными техническими характеристиками',
                    price: 39170.0,
                    img: 'river-3400-1.jpg',
                    availableCount: 7,
                    category: 105
                },
                {
                    id: 3,
                    name: 'Лодка ПВХ DRAGON 330 Classic PRO 9мм сборная слань на стрингерах',
                    desc: 'Лодка ПВХ Dragon 330 Classic PRO - надежная моторная лодка из армированной ткани плотностью 1100 г/м2 с классическими баллонами. В базовой комплекатации идут мягкие накладки на сиденья',
                    price: 31990.0,
                    img: '/dragon-330-classic-base-1.jpg',
                    availableCount: 5,
                    category: 105
                },
                {
                    id: 4,
                    name: 'Лодка ПВХ Аква 2800 надувная под мотор',
                    desc: 'Надувная лодка АКВА 2800 имеет положительные отзывы владельцев благодаря хорошим соотношениям цены и характеристик. Кокпит: 208x62 см. По периметру установлен привальный брус с волноотбойником',
                    price: 16520.0,
                    img: '/1698_2.jpg',
                    availableCount: 2,
                    category: 105
                },
                {
                    id: 5,
                    name: 'Фирменная футболка ZoMarket',
                    desc: 'Zoooooooo',
                    price: 2999.99,
                    img: '/zo.jpg',
                    availableCount: 999,
                    category: 101
                }
            ],

        }
    }

    render() {

        return (
            <div className="table">
                <div className="table-header"></div>
                <div className="table-body">
                    {
                        this.state.data.map(item =>
                        (
                            <div className='table-row' key={item.id}>
                                {
                                    this.state.columns.map(col => {

                                        const style = {
                                            minWidth: col.width,
                                            maxWidth: col.width
                                        };

                                        return (<div
                                            className='table-cell'
                                            key={col.key + '_' + item.id}
                                            style={style}
                                        >
                                            {item[col.propName]}
                                        </div>)
                                    })
                                }
                            </div>
                        ))
                    }
                </div>
            </div >
        );
    }

}

export default Table;
