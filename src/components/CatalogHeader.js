const options = [
    'Популярные',
    'Новинки',
    'Сначала дешевые',
    'Сначала дорогие',
    'По размеру скидки',
    'Высокий рейтинг'
]

function CatalogHeader(props) {

    return (
        <div className='catalog-header'>
            <select>
                {
                    options.map(value => (
                        <option value={value} key={value}>{value}</option>
                    ))
                }
            </select>
        </div>
    );
}

export default CatalogHeader;