import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../../Shared pages/PrimaryButton';

const ContactUs = () => {
    return (
        <section style={{ background: `url(${appointment})` }}>
            <div className='text-center p-10'>
                <h3 className='text-primary text-xl'>Contact Us</h3>
                <h1 className='text-4xl text-white'>Stay Connected With Us </h1>
            </div>
            <form className='text-center'>
               <input className='text rounded-md my-2 p-1 px-5 lg:max:w-50' placeholder='Email Address' type="text" /><br></br>
               <input className='text rounded-md my-2 p-1 px-5 lg:max:w-50' placeholder='Subject' type="text" /><br></br>
               <input className='text rounded-md my-2 py-6 px-5 lg:max:w-50' placeholder='Your massage' type="text" />
                <PrimaryButton>Submit </PrimaryButton>
            </form>


            <div class="form-control">
                <label class="label">
                    <span class="label-text">Your Email</span>
                </label>
                <label class="input-group input-group-vertical">
                    <span>Email</span>
                    <input type="text" placeholder="info@site.com" class="input input-bordered" />
                </label>
            </div>
        </section>

    );
};

export default ContactUs;