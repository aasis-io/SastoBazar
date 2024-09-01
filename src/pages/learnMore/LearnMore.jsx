import React from "react";
import CommonPages from "../commonPages/CommonPages";
import aboutImg from "../../assets/images/aboutus.png"; 
// Use another Image

const LearnMore = () => {
  return (
    <>
      <CommonPages
        title="Information"
        subtitle="MoreOver"
        description1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          sint ea recusandae, repellendus placeat rem aliquam quae impedit
          neque fuga perspiciatis quasi animi deserunt. Modi unde veniam
          assumenda sapiente facilis!"
        description2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
    sint ea recusandae, repellendus placeat rem aliquam quae impedit
    neque fuga perspiciatis quasi animi deserunt. Modi unde veniam
    assumenda sapiente facilis!"
        buttonText="Contact Us"
        visit="/more-info"
        imageAbout={aboutImg}
        // use another image
      />
    </>
  );
};

export default LearnMore;
