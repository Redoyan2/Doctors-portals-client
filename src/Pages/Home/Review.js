import React from 'react';

const Review = ({ review }) => {

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl gap-5">
            <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Praesentium quibusdam quidem
                    veniam culpa beatae at obcaecati assumenda aliquid,
                    reiciendis voluptatem.
                </p>
                <div className='flex mt-5'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div className='mx-5'>
                        <h2 className="card-title">
                            {review.name}
                        </h2>
                        <p>{review.location}</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;