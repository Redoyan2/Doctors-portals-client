import { format } from 'date-fns';
import React, { useState } from 'react';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    return (
        <div>
            <h2 className='text-xl text-primary text-center'>Available Appointment on {format(date, 'PP')}</h2>
        </div>
    );
};

export default AvailableAppointment;