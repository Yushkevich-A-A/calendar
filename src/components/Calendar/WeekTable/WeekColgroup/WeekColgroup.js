import React from "react";
import { v4 } from 'uuid';

function WeekColgroup(props) {
    const { arrayDay } = props;

    return(
        <colgroup>
            {arrayDay.map( (item, index) => {
                return (index < 5) ? 
                        <col key={v4()}/> : 
                        <col key={v4()} className="ui-datepicker-week-end"/>
                })}
        </colgroup>  
    )
}

export default WeekColgroup;