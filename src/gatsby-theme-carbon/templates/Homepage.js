import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/cloudnative3.jpg';

const BannerText = () => <h1>Cloud-Native Learning Journey </h1>;

const FirstLeftText = () => <p>Cloud Ecosystem</p>;

const FirstRightText = () => (
  <p>
<<<<<<< HEAD
      This Learning Journey, optimized for IBM Cloud users, enables them to deliver cloud-native solutions with Red Hat OpenShift on IBM Cloud.
=======
      This Learning Journey, optimized for IBM Cloud developers and operators, enables them to deliver cloud-native solutions with Red Hat OpenShift on IBM Cloud.
>>>>>>> origin/master
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
<<<<<<< HEAD
      These practices and assets enable our partners to understand how to develop and deliver standard enterprise applications on IBM Cloud.
=======
      These practices and assets enable our customers to understand how to develop and deliver standard enterprise applications on IBM Cloud.
>>>>>>> origin/master
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
