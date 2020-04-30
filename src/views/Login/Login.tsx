import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';
import helpers from '../../common/helpers/helpers';
import inputsModel from '../../common/models/loginFormModel';
import MainSection from '../../common/components/MainSection/MainSection';
import Form from '../../common/components/Form/Form';
import Spinner from '../../common/components/Spinner/Spinner';
import constants from '../../common/contstants/api';
import userActions from '../../state/user/actions';
import { RootState } from '../../state/index';
import * as styles from './Login.module.scss';

const Login: FunctionComponent = () => {

  const dispatch = useDispatch();

  const loginStatus = useSelector((state: RootState) => state.user.loginRequestStatus);

  const onSubmit = () => {
    const userData = helpers.getValuesFromInputs(inputsModel);
    dispatch(userActions.loginAction(userData));
  };

  return(
    <React.Fragment>
      {loginStatus === constants.REQUEST.STATUS.SUCCESS && <Redirect to='/' />}
      <MainSection>
      {loginStatus === constants.REQUEST.STATUS.SENDING ?
        <Spinner spinnerText='Login in progress' /> :
        <Form formInputs={inputsModel} showAvatar onSubmit={onSubmit} submitButtonText='LOG IN'>
          {loginStatus === constants.REQUEST.STATUS.FAILURE && (
            <div className={styles.warning}>Email or password is not correct</div>)}
        </Form>}
      </MainSection>
    </React.Fragment>
  )
}

export default Login;
