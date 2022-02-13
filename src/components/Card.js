import React from 'react';

const Card = ({details}) => {
    // console.log(details.category);
  return (
    <div className='box'>
            <h2>{details.name}</h2>
            <p>{details.description}</p>
            <div className='use-template-cover'>
              <div className='use-template'><a href={details.link}>Use Template</a></div>
            </div>
    </div>
  );
};

export default Card;

// category: (3) ['Health', 'E-commerce', 'Education']
// created: "2022-02-05T20:52:21.582272"
// description: "cupidatat tempor incididunt aliqua. elit,"
// link: "https://formpl.us/templates"
// name: "reprehenderit minim commodo"
