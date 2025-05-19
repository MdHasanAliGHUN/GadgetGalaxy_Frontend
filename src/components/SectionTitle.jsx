import React from 'react';

const SectionTitle = ({title, description}) => {
    return (
        <div className='my-15'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black text-center my-3'>{title}</h1>
            <p className='text-lg text-gray-600 font-medium text-center'>{description}</p>
        </div>
    );
};

export default SectionTitle;