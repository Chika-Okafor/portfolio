interface IProps {
  headerText: string;
  bodyText: string;
}

const SkillItem = (props: IProps) => {
  const { headerText, bodyText } = props;
  return (
    <div className="skill-item snap-child">
      <h1 className="skill-item-header">{headerText}</h1>
      <p className="skill-item-body">{bodyText}</p>
    </div>
  );
};

export default SkillItem;
