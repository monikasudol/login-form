import React, { FunctionComponent, ReactNode } from 'react';
import * as styles from './MainSection.module.scss';

interface IMainSectionProps {
  children: ReactNode;
}

const MainSection: FunctionComponent<IMainSectionProps> = (props: IMainSectionProps) => {
  const { children } = props;
  return(
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default MainSection;
