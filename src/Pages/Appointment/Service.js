import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-black">{name}</h2>
                <p>
                    {
                        slots.length > 0 
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>No Slot Available</span> 
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                  
                        <label disabled={slots.length===0} 
                    onClick={()=>setTreatment(service)} for="booking-modal" className="btn btn-primary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;