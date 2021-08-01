import React from 'react';
import TableHeader from './TableHeader';
import PropTypes from 'prop-types'
import './table.css'

class Table extends React.Component {

    static propTypes = {
        fitOnPage: PropTypes.bool
    }

    static defaultProps = {
        fitOnPage: true
    }

    constructor(props) {
        super(props);
        this.state = {
            // настройки сортировки
            sorting: {
                columnKey: 'price',
                desc: false
            },
            sortedData: props.data, // отсортированные данные - !!! переписать с useMemo
            searchText: '' // текст из строки поиска
        }
    }

    sort = (key) => {
        //alert(JSON.stringify(this.state.sorting, null, ' '));
        const col = this.props.columns.find(col => col.key === key);

        if (col && col.sorted) {
            const currentSorting = this.state.sorting;

            if (currentSorting && currentSorting.columnKey === key) {
                currentSorting.desc
                    ? this.cancelSort()
                    : this.reverseSort(key);
            } else {

                this.setState({

                    sortedData: this.props.data.slice().sort((a, b) => {
                        return a[key] > b[key] ? 1 : -1;
                    }),
                    sorting: {
                        columnKey: key,
                        desc: false
                    }
                })
            }

        } else this.cancelSort();
    }

    reverseSort = (key) => {
        const reverseData = this.state.sortedData.slice();
        this.setState({
            sortedData: reverseData.reverse(),
            sorting: {
                columnKey: key,
                desc: true
            }
        })
    }

    cancelSort = () => {
        this.setState({
            sortedData: this.props.data,
            sorting: {
                columnKey: null,
                desc: false
            }
        });
    }

    changeSearchText = (evt) => {
        this.setState({
            searchText: evt.target.value
        });
    }

    filter = (data) => {

        if (!this.state.searchText) return data;

        // колонки для поиска
        const searchColumns = this.props.columns.filter(col => {
            return col.searchable;
        })
        console.log(searchColumns);
        // регулярное выражение
        const regexp = new RegExp(String(this.state.searchText), 'i');
        console.log(regexp);
        console.log(data);
        const filteredData = data.filter(item => {

            for (let i = 0; i < searchColumns.length; i++) {
                const col = searchColumns[i];
                if (item[col.key] && regexp.test(String(item[col.key])))
                    return true;
            }
            return false;
        });
        console.log(filteredData);
        return filteredData;
    }

    render() {

        return (
            <div className='table-x-scroll-container'>
                <div className="table">
                    <input
                        type="text"
                        placeholder='Введите строку для поиска'
                        value={this.state.searchText}
                        onChange={this.changeSearchText}
                    />
                    <TableHeader
                        columns={this.props.columns}
                        sorting={this.state.sorting}
                        sort={this.sort}
                    />
                    <div className="table-body">
                        {
                            this.filter(this.state.sortedData).map(item =>
                            (
                                <div className='table-row' key={item.id}>
                                    {
                                        this.props.columns.map((col, i) => {

                                            const style = {
                                                minWidth: col.width,
                                                maxWidth: col.width
                                            };

                                            return (<div
                                                className='table-cell '
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
            </div>
        );
    }

}

export default Table;
