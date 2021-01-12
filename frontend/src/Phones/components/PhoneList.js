import React from 'react';
import Card from '../../shared/components/UIElements/Card/Card';
import Spinner from '../../shared/components/UIElements/Spinner/Spinner';

import PhoneItem from './PhoneItem';
import './PhoneList.css';

const PhoneList = (props) => {
  if (props.isLoading) {
    return <Spinner />;
  }
  if (!props.items || props.items.length === 0) {
    return (
      <Card>
        <h2>No se encontraton telefonos</h2>
      </Card>
    );
  }

  return (
    <React.Fragment>
      {props.isLoading && <Spinner />}
      <ul className='phone-list'>
        {props.items.map((phone) => {
          return (
            <PhoneItem
              key={phone.id}
              id={phone.id}
              image={phone.imageUrl}
              title={phone.title}
              description={phone.description}
              color={phone.color}
              price={phone.price}
            />
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default PhoneList;
