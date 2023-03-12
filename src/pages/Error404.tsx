//COMPONENT IMPORTS
import PageCreator from "./page-creator/PageCreator";

const Error404 = () => {
  return (
    <PageCreator
      id="default-404"
      dataTestID="default-404"
      grandChildren="Error 404!"
    />
  );
};

export default Error404;
