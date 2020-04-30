import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { RootState } from '../../../state/index';
import * as styles from './Header.module.scss';

const Header: FunctionComponent<{}> = () => {

  const username = useSelector((state: RootState) => state.user.username);

  return(
    <header className={styles.container}>
      <div>Logo</div>
      {username ? <div className={styles.userWrapper}>
      <span className={styles.username}>{username}</span>
        <Avatar />
      </div> : <Link to='login'>
        <Button
              type='submit'
              variant='contained'
              color='secondary'
            >
              Log in
            </Button>
      </Link>}
    </header>
  )
}

export default Header;
