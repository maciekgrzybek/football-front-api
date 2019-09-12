import React from 'react';
import { PageHeader, Icon } from 'antd';
import { navigate } from '@reach/router';

import styles from './Header.module.css';

function Header({ title, subTitle, backIcon = <Icon type="arrow-left" /> }) {
  return (
    <PageHeader
      onBack={() => navigate('/')}
      className={styles.header}
      title={title}
      subTitle={subTitle}
      backIcon={backIcon}
    />
  );
}

export default Header;
