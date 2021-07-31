import React from 'react';

function TableHeader(props) {

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
                        >
                            {col.title}
                        </div>
                    )

                })
            }
        </div>
    );
}


export default TableHeader;