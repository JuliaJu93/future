import React from 'react';

import arrow_down from '../../../img/arrow_down.png';
import arrow_up from '../../../img/arrow_up.png';

function TableHead({onClickFirstName, onClickLastName, directionArrowFirstName, directionArrowLastName}) {

  return (
        <thead>
            <tr>
                <th>
                    id
                </th>
                <th>
                    first name
                    <button onClick = {onClickFirstName}>
                        {!directionArrowFirstName &&<img src={arrow_down} alt = 'arrow down'></img>}
                        {directionArrowFirstName &&<img src={arrow_up} alt = 'arrow up'></img>}
                    </button>
                </th>
                <th>
                    last name
                    <button onClick = {onClickLastName}>
                        {!directionArrowLastName &&<img src={arrow_down} alt = 'arrow down'></img>}
                        {directionArrowLastName &&<img src={arrow_up} alt = 'arrow up'></img>}
                    </button>
                </th>
                <th>
                    email
                </th>
                <th>
                    phone
                </th>
            </tr>
        </thead>
  );
}

export default TableHead;