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
            sortSettings: {
                columnKey: null,
                desc: false
            }
        }
    }

    /* 
        Принимает массив объетов, 
        возращает новый массив из объектов, содержащих в свойствах строку this.state.searchText.
        Список свойств для поиска формируется из колонок с признаком searchable
    */
    filterBySearchText(objectArray) {

        if (!this.state.searchText) return objectArray.slice(); // возвращаем копию массива
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

        return objectArray.filter(searchInObjectProps);
    }

    sortObject

    render() {
        return this.props.loaded
            ? <div >Загрузка</div>
            : <StickyTable
                columns={this.props.columns}
                data={this.props.data}
            />
    }
}

export default TableContainer;
