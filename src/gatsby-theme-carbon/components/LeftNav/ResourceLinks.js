import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [

  {
    title: 'IBM Cloud',
    href: 'https://www.ibm.com/cloud',
  },
  {
    title: 'IBM Cloud Paks',
    href: 'https://www.ibm.com/cloud/paks/',
  },
  {
    title: 'IBM PartnerWorld',
    href: 'https://www.ibm.com/partnerworld/public',
  },  
  {
    title: 'IBM Cloud Native',
    href: 'https://ibm-cloud-architecture.github.io/deliverables/cloud-native.html',
  },  
  {
    title: 'IBM Garage Method',
    href: 'https://www.ibm.com/garage/method',
  },

];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
