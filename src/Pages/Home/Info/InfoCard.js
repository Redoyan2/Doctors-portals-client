import React from 'react';

const InfoCard = ({img, cardTitle, cardDetails, bgClassName }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl p-3 m-1 ${bgClassName}`}>
        <figure className='pl-4'><img src={img} alt="Album"/></figure>
        <div className="card-body text-white ">
          <h2 className="card-title">{cardTitle}</h2>
          <p>{cardDetails}</p>
        </div>
      </div>
    );
};

export default InfoCard;