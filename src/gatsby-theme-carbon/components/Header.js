import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

const group = 'IBM'; // 'IBM Partner'
const org = 'Cloud-Native Toolkit'; // 'Enterprise Sandbox'

const CustomHeader = props => (
  <Header {...props}>
    <span>{group}</span>&nbsp;{org}
  </Header>
);

export default CustomHeader;
