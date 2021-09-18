import React from "react";
import { v4 } from 'uuid';
import moment from 'moment';
import 'moment/locale/ru';

moment().local('ru');

function WeekdayName(props) {
    const { arrayDay } = props;
    return(
        <tr>
        {
        arrayDay.map( (item, index) => {
            const nameDayWeek = item.replace(item[0], item[0].toUpperCase());
            return (
                <th scope='col' key={v4()} title={nameDayWeek}>
                {moment().locale('ru').weekday(index).format('dd')}
                </th>)
            })
        }
        </tr>
    )
}

export default WeekdayName;