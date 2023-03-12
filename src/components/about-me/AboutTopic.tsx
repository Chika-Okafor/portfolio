//INTERFACE DEFINITIONS
interface IProps {
  headerText: string;
  bodyText: string;
}

const AboutTopic = (props: IProps) => {
  //PROPS DECONSTRUCTION
  const { headerText, bodyText } = props;
  return (
    <div className="about-topic snap-child">
      <h1 className="about-topic-header">{headerText}</h1>
      <p className="about-topic-body">{bodyText}</p>
    </div>
  );
};

export default AboutTopic;
