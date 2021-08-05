function StickyTableHeader(props) {

    // html с символом сортировки
    const sortingFlagTag = (col) => {
        if (props.sortSettings && props.sortSettings.key === col.key) {

            const tag = props.sortSettings.desc
                ? (<span style={{ color: 'red' }}>↡</span>)
                : (<span style={{ color: 'blue', }}>↟</span>);

            return tag;
        }
        return ' ';
    }


    const handleClick = (col) => {
        if (col.sorted)
            props.sort(col.key);
    }

    return (
        <div className='sticky-table-header scroll-copy'>
            {
                props.columns.map(col => {
                    return (
                        <div
                            className="sticky-table-header-cell"
                            style={props.columnStyles[col.key]}
                            key={'header_' + col.key}
                            onClick={() => handleClick(col)}
                        >
                            {col.title}
                            {sortingFlagTag(col)}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default StickyTableHeader;