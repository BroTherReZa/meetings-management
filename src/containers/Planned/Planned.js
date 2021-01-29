import React from 'react'
import Meetings from '../../components/parts/Meetings/Meetings'

import './Planned.css'

const Planned = (props) => {
    return (
        <div className="planned">
            <h1>فهرست جلسات برنامه ریزی شده</h1>
            <div className="date-line">شنبه ۴ بهمن ماه</div>
            <Meetings filter="planned" />
            <div className="date-line">یکشنبه ۵ بهمن ماه</div>
        </div>
    )
}

export default Planned