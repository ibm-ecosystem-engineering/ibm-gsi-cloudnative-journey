import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/cloudnative3.jpg';

const BannerText = () => <h1>Cloud-Native Learning Journey </h1>;

const FirstLeftText = () => <p>Cloud Ecosystem</p>;

const FirstRightText = () => (
  <p>
      This Learning Journey, optimized for IBM Cloud developers and operators, enables them to deliver cloud-native solutions with Red Hat OpenShift on IBM Cloud.
    <a
      className={calloutLink}
      href="https://www.ibm.com/cloud"
    >
      IBM Cloud →
    </a>
  </p>
);

const SecondLeftText = () => <p>Cloud-Native Journey</p>;

const SecondRightText = () => (
  <p>
      These practices and assets enable our customers to understand how to develop and deliver standard enterprise applications on IBM Cloud.
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
