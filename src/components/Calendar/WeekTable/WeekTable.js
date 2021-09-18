import React from 'react';
import { v4 } from 'uuid';
import WeekColgroup from './WeekColgroup/WeekColgroup';
import WeekdayName from './WeekdayName/WeekdayName';
import moment from 'moment';
import 'moment/locale/ru';

moment().local('ru');

function WeekTable(props) {
    const { date } = props;

    
    const arrayDay = moment.weekdays(true);
    const currentMonth = moment(date).month();
    const currentDate = moment(date).date();
    const firstDayInMonth = moment(date).startOf('month');
    const offsetToPreviouseDays = firstDayInMonth.weekday();
    let counterCalendar = firstDayInMonth.subtract( offsetToPreviouseDays,'d');
    const amountWeeks = getAmountWeeks(date);

    return (
        <table className='ui-datepicker-calendar'>  
        <WeekColgroup  arrayDay={arrayDay}/>
        <thead>
        <WeekdayName  arrayDay={arrayDay}/>
        </thead>
        <tbody>
        {
        amountWeeks.map(() => {
            return (
                <tr key={v4()}>
                    {
                    arrayDay.map(() => {
                        const cloneDate = counterCalendar.clone();
                        counterCalendar.add(1, 'd');
                        return <td key={v4()} className={
                                (cloneDate.month() !== currentMonth ? 'ui-datepicker-other-month':
                                cloneDate.date() === currentDate ? 'ui-datepicker-today': null )
                            }>{cloneDate.date()}</td>
                        })
                    }
                </tr>
            )
        })
        }
        </tbody>
    </table>
    )
}

function getAmountWeeks(date) {
    const startMonth = moment(date).startOf('month');
    const daysOfMOnth = startMonth.daysInMonth();
    let amountWeeks = 0;

    const arrAmountWeek = [];

    if (startMonth.weekday() !== 0) {
        amountWeeks++;
        const offsetToStartWeek = 7 - startMonth.weekday();
            ((daysOfMOnth - offsetToStartWeek) / 7  % 1 === 0) ?
            amountWeeks += (daysOfMOnth - offsetToStartWeek) / 7:
            amountWeeks += (daysOfMOnth - offsetToStartWeek) / 7 + 1;
    } else {
            ((daysOfMOnth / 7)  % 1 === 0) ? 
            amountWeeks += daysOfMOnth / 7 : 
            amountWeeks += daysOfMOnth / 7 + 1;
    };

    amountWeeks = Math.floor(amountWeeks)

    for(let i = 0; i < amountWeeks; i++ ) {
        arrAmountWeek.push('');
    }

    return arrAmountWeek;
}

export default WeekTable;
