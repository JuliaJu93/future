import React from 'react';

import ArrowUpImg from '../arrow_img/arrow_up_img';
import ArrowDownImg from '../arrow_img/arrow_down_img';

function TableHead() {
  return (
        <thead>
            <tr>
                <th>
                    id
                    <ArrowUpImg />
                    <ArrowDownImg />
                </th>
                <th>
                    first name
                    <ArrowUpImg />
                    <ArrowDownImg />
                </th>
                <th>
                    last name
                    <ArrowUpImg />
                    <ArrowDownImg />
                </th>
                <th>
                    email
                    <ArrowUpImg />
                    <ArrowDownImg />
                </th>
                <th>
                    phone
                    <ArrowUpImg />
                    <ArrowDownImg />
                </th>
            </tr>
        </thead>
  );
}

export default TableHead;