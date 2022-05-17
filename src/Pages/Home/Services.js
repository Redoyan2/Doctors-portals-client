import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';
import Service from './Service';
import PrimaryButton from '../../Shared pages/PrimaryButton';

const Services = () => {
    const Services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'This is a better treatment',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'This is a better treatment',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'This is a better treatment',
            img: whitening
        },
    ]
    return (
        <div className='my-12'>
            <div className='text-center'>
                <h3 className='text-primary text-2xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl text-accent'>Services We Provide </h2>
            </div>
            <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    Services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='px-12'>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>GET STARTED</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;