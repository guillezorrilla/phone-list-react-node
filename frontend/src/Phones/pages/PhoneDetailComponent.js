import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card/Card';
import Spinner from '../../shared/components/UIElements/Spinner/Spinner';

import * as actions from '../../store/actions/index';

import './PhoneDetailComponent.css';

const PhoneDetailComponent = (props) => {
  const { onFetchPhone } = props;
  const phoneId = useParams().phoneId;
  useEffect(() => {
    onFetchPhone(phoneId);
  }, [onFetchPhone, phoneId]);
  const { phone } = props;

  let detailPhone;

  if (!phone) {
    detailPhone = (
      <Card>
        <h3>No se pudieron econtrar telefonos</h3>
      </Card>
    );
  } else {
    detailPhone = (
      <div className='photo-detail__container'>
        <div className='phone-detail__image'>
          <img src={phone.imageUrl} alt={phone.title} />
        </div>
        <Card className='detail-card__container'>
          <div className='phone-detail__info'>
            <h2>{phone.title}</h2>
            <h3>{phone.color}</h3>
            <p>{phone.description}</p>
          </div>
          <div>
            <h3>Especificaciones</h3>
            <ul>
              {phone.especificaciones.map((e) => {
                return (
                  <li key={e.name}>
                    {e.name} : {e.value}
                  </li>
                );
              })}
            </ul>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h2>{`Precio: ${phone.price}`}</h2>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
      {props.isLoading ? <Spinner /> : { detailPhone }}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    phone: state.phones.phone,
    isLoading: state.phones.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPhone: (phoneId) => dispatch(actions.fetchPhoneById(phoneId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneDetailComponent);
