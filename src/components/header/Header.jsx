import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader, Icon } from 'antd';
import { navigate } from '@reach/router';

import styles from './styles.module.scss';

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

Header.propTypes = {
  backIcon: PropTypes.element,
};

export default Header;
