import { AboutTopicsList as Topics } from "../../utils/AboutTopicsList";

import AboutTopic from "./AboutTopic";

import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <div className="about-topics-wrapper snap-parent">
      {Topics.map((topic, index) => {
        return (
          <AboutTopic
            headerText={topic.headerText}
            bodyText={topic.bodyText}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default AboutMe;
