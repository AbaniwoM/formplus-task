import React, { useEffect, useState } from 'react';
import Card from './Card';

const All = ({ all }) => {
  return (
    <div className='all-container'>
      <div className='all-header'>
        <div className='all-templates'>All Templates</div>
        <div className='template-amount'>2000 templates</div>
      </div>
      <div className='boxes'>
          {all.map((details, index) => 
            <Card details={details} key={index} />
          )}
      </div>
    </div>
  )
};

export default All;
