import React from 'react';

const Card = ({ title, tools }) => (
  <div
    className='card text-white text-center w-full h-1/2 rounded-md transform transition-transform hover:scale-110 flex flex-col justify-center'
    style={{
      backgroundImage: 'url(/assets/bgc2.jpg)',
      backgroundSize: 'cover',
    }}
  >
    <h2 className='font-bold'>{title}</h2>
    <ul className='px-6 py-4 flex flex-col gap-6 '>
      {tools.map((tool, index) => (
        <li
          key={index}
          className='bg-green-500 w-full hover:bg-green-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer'
        >
          {tool}
        </li>
      ))}
    </ul>
  </div>
);

const CardList = ({ cards }) => (
  <div className='card-list flex flex-col sm:flex-row justify-center ml-20 mr-20 items-center  h-screen gap-10 '>
    {cards.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </div>
);

const YourComponent = () => {
  const cards = [
    {
      title: 'STD Utils',
      tools: [
        'Manage Feeders',
        'Pump Energy',
        'Scheduled Outage',
        'Unscheduled Outage',
      ],
    },
    {
      title: 'ED Utils',
      tools: ['DT Asset Mapper', 'Transformer Damages'],
    },
    {
      title: 'Workshop Utils',
      tools: [
        'Asset Induction',
        'Central Workshop',
        'Induct/Remap Asset',
        'Damage Entry',
      ],
    },
    {
      title: 'Reports',
      tools: ['Reported Assets', 'AT & C Losses'],
    },
    {
      title: '',
      tools: ['Helpdesk'],
    },
  ];

  return (
    <div style={{ background: 'url(/assets/test2.jpg)' }}>
      <CardList cards={cards} />
    </div>
  );
};

export default YourComponent;
