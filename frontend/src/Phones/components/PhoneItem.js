import React from 'react';

import Button from '../../shared/components/UIElements/Button/Button';
import Card from '../../shared/components/UIElements/Card/Card';

import './PhoneItem.css';

const PhoneItem = (props) => {
  return (
    <li className='phone-item'>
      <Card className='phone-item__content'>
        <div className='phone-item__image'>
          <img src={props.image} alt={props.title} />
        </div>
        <div className='phone-item__info'>
          <h2>{props.title}</h2>
          <p>{`Color: ${props.color}`}</p>
          <p>{props.description}</p>
          <h3>{`Precio: ${props.price} Euros`}</h3>
        </div>
        <div className='phone-item__actions'>
          <Button to={`/phones/${props.id}`}>Ver Detalles</Button>
        </div>
      </Card>
    </li>
  );
};

export default PhoneItem;
