import React from 'react';


function TableHeader(props) {

    // html с символом сортировки
    const sortingTag = (col) => {
        if (props.sorting && props.sorting.columnKey === col.key) {

            const tag = props.sorting.desc
                ? (<span style={{ color: 'red' }}>▼</span>)
                : (<span style={{ color: 'green' }}>▲</span>);

            return tag;
        }
        return null;
    }


    const handleClick = (col, evt) => {
        //evt.nativeEvent.preventDefault();
        if (col.sorted)
            props.sort(col.key);
    }

    return (
        <div className="table-header">
            {
                props.columns.map(col => {
                    const style = {
                        minWidth: col.width,
                        maxWidth: col.width
                    };

                    return (
                        <div
                            className='table-header-cell '
                            key={col.key}
                            style={style}
                            onClick={handleClick.bind(null, col)}
                        >
                            {col.title}
                            {sortingTag(col)}
                        </div>
                    )

                })
            }
        </div>
    );
}


export default TableHeader;