import React from "react";
import CommonPages from "../commonPages/CommonPages";
import aboutImg from "../../assets/images/aboutus.png";


const AboutUs = () => {
  return (
    <>
      <CommonPages
        title="About"
        subtitle="SastoBazar"
        description1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              sint ea recusandae, repellendus placeat rem aliquam quae impedit
              neque fuga perspiciatis quasi animi deserunt. Modi unde veniam
              assumenda sapiente facilis!"
        description2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        sint ea recusandae, repellendus placeat rem aliquam quae impedit
        neque fuga perspiciatis quasi animi deserunt. Modi unde veniam
        assumenda sapiente facilis!"
        buttonText="Learn more"
        visit="/more-info"
        imageAbout={aboutImg}
      />
    </>
  );
};

export default AboutUs;
