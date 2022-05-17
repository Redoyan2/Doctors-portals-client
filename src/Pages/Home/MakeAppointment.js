import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../../Shared pages/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{background: `url(${appointment})`}} className='flex justify-center items-center '>
            <div className='flex-1 hidden lg:block '>
                <img className='mt-[-150px]' src={doctor} alt="" srcset="" />
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-primary text-2xl text-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white py-3' >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro suscipit pariatur error veniam cum itaque, eum praesentium natus
                    voluptas obcaecati ab quam earum vel quis consequuntur
                    dolorem! At quam sed, iste aut autem ex corrupti, assumenda
                    optio est aliquid eos.
                </p>
                <PrimaryButton>MAKE APPOINTMENT</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;