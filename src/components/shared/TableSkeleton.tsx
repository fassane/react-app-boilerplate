import React from "react";
import VolkenoSkeleton from "volkeno-react-skeleton";
import "volkeno-react-skeleton/dist/index.css";

interface TableProps {
    headers: {
        text: string;
    }[];
}

const TableSkeleton: React.FC<TableProps> = ({ headers }) => {
    return (
        <div className="col-md-12">
            <table className="table table striped">
                <thead>
                    <tr>
                        {headers?.map((col, i) => (
                            <th
                                scope="col"
                                style={{
                                    textAlign: "left",
                                    color: "#010235",
                                    fontFamily: "Poppins",
                                    fontSize: "15px",
                                    fontWeight: "400",
                                }}
                                key={col.text + i}
                            >
                                {col.text}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {[...Array(5)]?.map((item, i) => (
                        <tr key={i}>
                            {headers?.map((col, i) => (
                                <td key={col.text + i}>
                                    <VolkenoSkeleton
                                        height={30}
                                        variant="rect"
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableSkeleton;
