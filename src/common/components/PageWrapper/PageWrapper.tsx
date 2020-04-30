import React, { FunctionComponent, ReactNode } from 'react';
import Header from '../Header/Header';
import * as styles from './PageWrapper.module.scss';

interface IPageWrapperProps {
  noHeader?: boolean;
  children: ReactNode;
}

const PageWrapper: FunctionComponent<IPageWrapperProps> = ({ children, noHeader }) => (
  <div className={styles.container}>
    {!noHeader && <Header />}
    {children}
  </div>
);

export default PageWrapper;
