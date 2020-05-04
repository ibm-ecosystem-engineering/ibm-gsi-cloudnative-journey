import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/cloudnative3.jpg';

const BannerText = () => <h1>Cloud Native Learning Journey </h1>;

const FirstLeftText = () => <p>GSI Labs</p>;

const FirstRightText = () => (
  <p>
      This Learning Journey is optimised for IBM Partners. To enable them to delivery cloud native solutions with Red Hat OpenShift on IBM Cloud.
    <a
      className={calloutLink}
      href="https://www.ibm.com/cloud"
    >
      IBM Cloud →
    </a>
  </p>
);

const SecondLeftText = () => <p>Garage Method</p>;

const SecondRightText = () => (
  <p>
      The Enablement leverages the IBM Garage principles, practices and assets, enabling consistency in delivery to all our partner channels
    <a
      className={calloutLink}
      href="https://www.ibm.com/garage/method"
    >
      IBM Garage Method →
    </a>
  </p>
);


const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
