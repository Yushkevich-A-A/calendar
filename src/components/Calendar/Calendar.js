import React from 'react';
import CalendarInformation from './CalendarInformation/CalendarInformation';
import WeekTable from './WeekTable/WeekTable';

function Calendar(props) {
    let { date } = props;
    

    return(
        <div className="ui-datepicker">
            <CalendarInformation date={date}/>
            <WeekTable date={date}/>
        </div>
    )
}

export default Calendar;