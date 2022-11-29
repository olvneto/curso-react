import React from 'react';
//import './Table.scss';

const Table = ()=> {
    return <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cookie</td>
            <td>$1.20</td>
            <td>45</td>
          </tr>            
        </tbody>
    </table>
}

export default Table;