import React, { FunctionComponent }  from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import * as styles from './Spinner.module.scss';

interface ISpinnerProps {
  spinnerText: string;
}

const Spinner: FunctionComponent<ISpinnerProps> = ({ spinnerText } : ISpinnerProps) => (
  <div className={styles.wrapper}>
    <CircularProgress size={100} thickness={5} color='secondary'/>
    <span className={styles.text}>{spinnerText}</span>
  </div>
)

export default Spinner;
