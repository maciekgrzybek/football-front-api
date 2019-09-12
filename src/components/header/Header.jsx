import React from 'react';
import { PageHeader, Icon } from 'antd';
import { navigate } from '@reach/router';

import styles from './Header.module.css';

function Header({ title, subTitle, backIcon = <Icon type="arrow-left" />, extra}) {
  return (
    <PageHeader
      onBack={() => navigate('/')}
      className={styles.header}
      title={title}
      subTitle={subTitle}
      backIcon={backIcon}
      extra={extra}
    />
  );
}

export default Header;
