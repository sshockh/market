function StickyTableHeader(props) {

    const { key, desc } = props.sortOptions || {};

    // html с символом сортировки
    const arrowTag = () => {

        const [symbol, color] = desc ? ['↓', 'red'] : ['↑', 'blue'];
        const style = { color };

        return <span className='arrow' style={style}>{symbol}</span>;
    }


    const handleClick = (col) => {
        if (col.sorted)
            props.doSort(col.key);
    }

    return (
        <div className='sticky-table-header scroll-copy'
            style={{ scrollLeft: props.scroll }}
        >
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
                            {key === col.key ? arrowTag() : <div className='arrow'></div>}
                        </div>
                    )
                })
            }
        </div >
    )
}

export default StickyTableHeader;