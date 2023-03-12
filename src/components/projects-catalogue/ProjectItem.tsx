//INTERFACE DEFINITIONS
interface IProps {
  headerText: string;
  bodyText: string;
}

const ProjectItem = (props: IProps) => {
  //PROPS DECONSTRUCTION
  const { headerText, bodyText } = props;
  return (
    <div className="project-item snap-child">
      <h1 className="project-item-header">{headerText}</h1>
      <p className="project-item-body">{bodyText}</p>
    </div>
  );
};

export default ProjectItem;
