import React from 'react';
import PropTypes from 'prop-types';
import './sticky_table.css';

class StickyTable extends React.Component {

    static propTypes = {
        fitOnPage: PropTypes.bool, // по ширине страницы
        columns: PropTypes.arrayOf(PropTypes.shape({
            key: PropTypes.string.isRequired,
            title: PropTypes.string,
            width: PropTypes.number,
            propName: PropTypes.string,
            sortable: PropTypes.bool,
            searchable: PropTypes.bool
        }))
    }

    static defaultProps = {
        fitOnPage: false,
        columns: [
            {
                key: "id",
                title: 'id',
                width: 50,
                propName: 'id',
                searchable: true
            },
            {
                key: "name",
                title: 'Наименование',
                width: 500,
                propName: 'name',
                sortable: true,
                searchable: true
            },
            {
                key: "price",
                title: 'Цена',
                width: 200,
                propName: 'price',
                sortable: true,
                searchable: true
            },
            {
                key: "availableCount",
                title: 'Остаток',
                width: 200,
                propName: 'availableCount',
                sortable: true,
                searchable: true
            },
            {
                key: "desc",
                title: 'Описание',
                width: 800,
                propName: 'desc',
                searchable: true
            }
        ],
    }

    handleXScroll = (evt) => {
        const divs = document.querySelectorAll('.scroll-copy');
        const shift = evt.target.scrollLeft;
        divs.forEach(d => {
            d.scrollLeft = shift;
        })
    }

    render() {
        return (
            <div className='sticky-table-container'>
                <div className='sticky-table-header scroll-copy'>
                    <div className="item item-sticky">item 1</div>
                    <div className="item">item 2</div>
                    <div className="item">item 3</div>
                    <div className="item">item 4</div>
                    <div className="item">item 5</div>
                    <div className="item">item 6</div>
                    <div className="item">item 7</div>
                    <div className="item">item 8</div>
                    <div className="item">item 9</div>
                    <div className="item">item 10</div>
                </div>
                <div className='sticky-table-row scroll-copy'>
                    <div className="item item-sticky">item 1</div>
                    <div className="item">item 2</div>
                    <div className="item">item 3</div>
                    <div className="item">item 4</div>
                    <div className="item">item 5</div>
                    <div className="item">item 6</div>
                    <div className="item">item 7</div>
                    <div className="item">item 8</div>
                    <div className="item">item 9</div>
                    <div className="item">item 10</div>
                </div>
                <div className='sticky-table-row scroll-copy'>
                    <div className="item item-sticky">item 1</div>
                    <div className="item">item 2</div>
                    <div className="item">item 3</div>
                    <div className="item">item 4</div>
                    <div className="item">item 5</div>
                    <div className="item">item 6</div>
                    <div className="item">item 7</div>
                    <div className="item">item 8</div>
                    <div className="item">item 9</div>
                    <div className="item">item 10</div>
                </div>
                <div className='sticky-table-row scroll-copy'>
                    <div className="item item-sticky">item 1</div>
                    <div className="item">item 2</div>
                    <div className="item">item 3</div>
                    <div className="item">item 4</div>
                    <div className="item">item 5</div>
                    <div className="item">item 6</div>
                    <div className="item">item 7</div>
                    <div className="item">item 8</div>
                    <div className="item">item 9</div>
                    <div className="item">item 10</div>
                </div>
                <div className='sticky-table-row scroll-copy'>
                    <div className="item item-sticky">item 1</div>
                    <div className="item">item 2</div>
                    <div className="item">item 3</div>
                    <div className="item">item 4</div>
                    <div className="item">item 5</div>
                    <div className="item">item 6</div>
                    <div className="item">item 7</div>
                    <div className="item">item 8</div>
                    <div className="item">item 9</div>
                    <div className="item">item 10</div>
                </div>
                <div className='sticky-table-row scroll-copy'>
                    <div className="item item-sticky">item 1</div>
                    <div className="item">item 2</div>
                    <div className="item">item 3</div>
                    <div className="item">item 4</div>
                    <div className="item">item 5</div>
                    <div className="item">item 6</div>
                    <div className="item">item 7</div>
                    <div className="item">item 8</div>
                    <div className="item">item 9</div>
                    <div className="item">item 10</div>
                </div>
                <div className='sticky-table-row scroll-copy'>
                    <div className="item item-sticky">item 1</div>
                    <div className="item">item 2</div>
                    <div className="item">item 3</div>
                    <div className="item">item 4</div>
                    <div className="item">item 5</div>
                    <div className="item">item 6</div>
                    <div className="item">item 7</div>
                    <div className="item">item 8</div>
                    <div className="item">item 9</div>
                    <div className="item">item 10</div>
                </div>
                <div className='sticky-table-row scroll-copy'>
                    <div className="item item-sticky">item 1</div>
                    <div className="item">item 2</div>
                    <div className="item">item 3</div>
                    <div className="item">item 4</div>
                    <div className="item">item 5</div>
                    <div className="item">item 6</div>
                    <div className="item">item 7</div>
                    <div className="item">item 8</div>
                    <div className="item">item 9</div>
                    <div className="item">item 10</div>
                </div>
                <div className='sticky-table-row scroll-copy'>
                    <div className="item item-sticky">item 1</div>
                    <div className="item">item 2</div>
                    <div className="item">item 3</div>
                    <div className="item">item 4</div>
                    <div className="item">item 5</div>
                    <div className="item">item 6</div>
                    <div className="item">item 7</div>
                    <div className="item">item 8</div>
                    <div className="item">item 9</div>
                    <div className="item">item 10</div>
                </div>
                <div className='sticky-table-row scroll-copy'>
                    <div className="item item-sticky">item 1</div>
                    <div className="item">item 2</div>
                    <div className="item">item 3</div>
                    <div className="item">item 4</div>
                    <div className="item">item 5</div>
                    <div className="item">item 6</div>
                    <div className="item">item 7</div>
                    <div className="item">item 8</div>
                    <div className="item">item 9</div>
                    <div className="item">item 10</div>
                </div>
                <div className='sticky-table-row scroll-copy'>
                    <div className="item item-sticky">item 1</div>
                    <div className="item">item 2</div>
                    <div className="item">item 3</div>
                    <div className="item">item 4</div>
                    <div className="item">item 5</div>
                    <div className="item">item 6</div>
                    <div className="item">item 7</div>
                    <div className="item">item 8</div>
                    <div className="item">item 9</div>
                    <div className="item">item 10</div>
                </div>
                <div className='sticky-table-row scroll-copy'>
                    <div className="item item-sticky">item 1</div>
                    <div className="item">item 2</div>
                    <div className="item">item 3</div>
                    <div className="item">item 4</div>
                    <div className="item">item 5</div>
                    <div className="item">item 6</div>
                    <div className="item">item 7</div>
                    <div className="item">item 8</div>
                    <div className="item">item 9</div>
                    <div className="item">item 10</div>
                </div>
                <div className='sticky-table-row scroll-copy'>
                    <div className="item item-sticky">item 1</div>
                    <div className="item">item 2</div>
                    <div className="item">item 3</div>
                    <div className="item">item 4</div>
                    <div className="item">item 5</div>
                    <div className="item">item 6</div>
                    <div className="item">item 7</div>
                    <div className="item">item 8</div>
                    <div className="item">item 9</div>
                    <div className="item">item 10</div>
                </div>
                <div
                    className='sticky-table-x-scroll'
                    onScroll={this.handleXScroll}
                >
                    <div className="item item-sticky">item 1</div>
                    <div className="item">item 2</div>
                    <div className="item">item 3</div>
                    <div className="item">item 4</div>
                    <div className="item">item 5</div>
                    <div className="item">item 6</div>
                    <div className="item">item 7</div>
                    <div className="item">item 8</div>
                    <div className="item">item 9</div>
                    <div className="item">item 10</div>
                </div>
            </div>
        );
    }
}

export default StickyTable;