import React from 'react';
import { PageHeader, Icon } from 'antd';
import { navigate } from '@reach/router';

import styles from './Header.module.scss';

function Header({ backIcon = <Icon type="arrow-left" />, ...rest }) {
  return (
    <PageHeader
      onBack={() => navigate('/')}
      className={styles.header}
      backIcon={backIcon}
      {...rest}
    />
  );
}

export default Header;
