import React from "react";
import moment from "moment";
import 'moment/locale/ru';

moment().local('ru');

function CalendarInformation(props) {
    const { date } = props;

    let  weekDay = moment(date).format('dddd');
    weekDay = weekDay.replace(weekDay[0], weekDay[0].toUpperCase());

    let currentMonth = moment(date).format('MMMM');
    currentMonth = currentMonth.replace(currentMonth[0], currentMonth[0].toUpperCase());

    return ( 
        <>
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{weekDay}</div>
                <div className="ui-datepicker-material-date">
                <div className="ui-datepicker-material-day-num">{moment(date).format('D')}</div>
                <div className="ui-datepicker-material-month">{moment(date).format('D MMMM').split(' ')[1]}</div>
                <div className="ui-datepicker-material-year">{moment(date).format('YYYY')}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                <span className="ui-datepicker-month">{currentMonth}</span>&nbsp;<span className="ui-datepicker-year">{moment(date).format('YYYY')}</span>
                </div>
            </div>
        </>
    )
}

export default CalendarInformation;