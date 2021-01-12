import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import Spinner from '../../shared/components/UIElements/Spinner/Spinner';

import * as actions from '../../store/actions/index';
import PhoneList from '../components/PhoneList';

const PhoneListContainer = (props) => {
  const { onFetchPhones } = props;
  useEffect(() => {
    onFetchPhones();
  }, [onFetchPhones]);
  return (
    <React.Fragment>
      {props.isLoading ? (
        <Spinner />
      ) : (
        <PhoneList items={props.phones} isLoading={props.isLoading} />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    phones: state.phones.phones,
    isLoading: state.phones.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPhones: () => dispatch(actions.fetchPhones()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneListContainer);
