import React from 'react';
import "../Table.scss";
import EmptyAlert from '../../../shared/Alert/EmptyAlert';
import TableSkeleton from '../../../shared/TableSkeleton';
import BootstrapTable from 'react-bootstrap-table-next';

const data = [...Array(5)]?.map((i, k) => [
    {    
        id: k,
        label: "Laurent",
        content: "Gassama",
    }
]);


function OptionTable() {

    let isLoading: boolean = false;

    const columns = [
        {
            dataField: "label",
            text: "Labels",
        },
        {
            dataField: "value",
            text: `Contenus`,
            headerStyle: () => {
                return { width: "500px", whiteSpace: "normal" };
            },
            // formatter: contentFormatter
        },
        {
            dataField: "image_value",
            text: "Contenu Image",
            // formatter: imageFormatter
        },
        {
            dataField: "id",
            text: "Actions",
            // formatter: actionFormatter,
        },
    ];
    
    return (
        <div className="col-lg-12">
            <div className="admin-table">
                {!!isLoading && <TableSkeleton headers={columns} />}
                {!isLoading && (
                    <>
                        <BootstrapTable
                            keyField="id"
                            data={data || []}
                            columns={columns as any}
                            condensed
                            hover
                            wrapperClasses="table-responsive admin-table"
                            noDataIndication={() => (
                                <EmptyAlert customTextual="No data" />
                            )}
                            // pagination={paginationFactory({ sizePerPage: 10 })}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default OptionTable