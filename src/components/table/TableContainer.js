import React from 'react';
import StickyTable from './StickyTable';
import PropTypes from 'prop-types'

// Компонент инкапсулирует действия с данными таблицы на клиенте
class TableContainer extends React.Component {

    static propTypes = {
        fitOnPage: PropTypes.bool, // по ширине страницы
        columns: PropTypes.arrayOf(PropTypes.shape({
            key: PropTypes.string.isRequired,
            title: PropTypes.string,
            width: PropTypes.number,
            propName: PropTypes.string,
            sortable: PropTypes.bool,
            searchable: PropTypes.bool
        })),
        data: PropTypes.array
    }

    static defaultProps = {
        loaded: false,
        columns: [],
        data: []
    }

    constructor(props) {
        super(props);
        this.state = {
            fitOnPage: false,
            searchText: null,
            sortOptions: null,
            renderData: this.props.data
        }
    }

    /* 
        Принимает массив объетов, 
        возращает отфильтрованный массив объектов, содержащих в свойствах строку this.state.searchText.
        Список свойств для поиска формируется из колонок с признаком searchable
    */
    filterBySearchText(array) {

        if (!this.state.searchText) return [...array]; // возвращаем копию массива

        // регулярное выражение
        const regexp = new RegExp(String(this.state.searchText), 'i');
        // список свойств, в которых будет произведен поиск
        const searchProps = this.props.columns
            .filter(col => col.searchable)
            .map(col => col.propName || col.key);
        // функция поиска до первого совпадения в объекте
        function searchInObjectProps(object) {
            for (let i = 0; i < searchProps.length; i++) {
                const prop = searchProps[i];
                if (object[prop] && regexp.test(String(object[prop])))
                    return true;
            }
            return false;
        }

        return array.filter(searchInObjectProps);
    }

    // обработка события сортировки
    doSort = (columnKey) => {
        let sortOptions = null;

        if (columnKey) {
            const { key, desc } = this.state.sortOptions || {};

            if (columnKey === key) {
                // если колонка уже отсортирована по убыванию - отменяем сортировку
                sortOptions = desc ? null : { key, desc: true };
            } else {
                sortOptions = { key: columnKey }
            }
        }
        this.setState({
            sortOptions
        });
    }

    // сортировка массива объектов по свойству
    sortByProp(array) {
        const { key, desc } = this.state.sortOptions || {};
        const newArray = [...array];

        if (!key) return newArray;

        return newArray.sort((a, b) => {
            if (a[key] === b[key]) return 0;
            return desc
                ? a[key] < b[key] ? 1 : -1
                : a[key] > b[key] ? 1 : -1;
        });
    }

    render() {
        return this.props.loaded
            ? <div >Загрузка</div>
            : <StickyTable
                columns={this.props.columns}
                data={
                    this.sortByProp(
                        this.filterBySearchText(this.props.data))
                }
                sortOptions={this.state.sortOptions}
                doSort={this.doSort}
                searchText={this.state.searchText}
            />
    }
}

export default TableContainer;
