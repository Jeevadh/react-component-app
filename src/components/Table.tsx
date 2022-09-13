import React from 'react';
import DataTable from 'react-data-table-component';
import '../style/components/table.css';
import Loading from './Loader';

interface TableProps {
    btnName?: string;
    columns?: any;
    data?: any;
    paginationTotalRows?: number
    onChangePage?: any;
    progressPending?: boolean;
    onChangeRowsPerPage?: any
}


const Table: React.FC<TableProps> = ({ columns, data, paginationTotalRows, onChangePage, onChangeRowsPerPage, progressPending }) => {
    return (
        <>
            <div className='table-blk'>
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    paginationServer
                    onChangePage={onChangePage}
                    paginationTotalRows={paginationTotalRows}
                    onChangeRowsPerPage={onChangeRowsPerPage}
                    progressPending={progressPending}
                    progressComponent={<Loading addclass='w-12 h-12' />}
                    responsive
                />
            </div>
        </>
    );
};

export default Table;