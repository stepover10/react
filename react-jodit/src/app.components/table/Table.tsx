import React from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';

const Table: React.FC<any> = ({ columns, data }) => {

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  console.log(headerGroups)

  return (
    <StyledWrapper>
      <table {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups &&
              headerGroups.map((headerGroup) => (
                // Apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers && headerGroup.headers.map((column) => (
                      // Apply the header cell props
                      <th {...column.getHeaderProps()}>
                        {
                          // Render the header
                          column.render('Header')
                        }
                      </th>
                    ))
                  }
                </tr>
              ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows &&
              rows.map((row) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr {...row.getRowProps()}>
                    {
                      // Loop over the rows cells
                      row.cells.map((cell) => {
                        // Apply the cell props
                        return (
                          <td {...cell.getCellProps()}>
                            {
                              // Render the cell contents
                              cell.render('Cell')
                            }
                          </td>
                        );
                      })
                    }
                  </tr>
                );
              })
          }
        </tbody>
      </table>
    </StyledWrapper>
  );
};

export default Table;

const StyledWrapper = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border-top: 2px solid black;
    border-bottom: 1px solid #e0e0e0;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 7px;
      border-bottom: 1px solid #e0e0e0;
      border-right: none;
    }
  }
`;
