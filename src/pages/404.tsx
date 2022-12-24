//COMPONENT IMPORTS
import PageCreator from "./PageCreator";

const Default404 = () => {
  return (
    <PageCreator
      id="default-404"
      dataTestID="default-404"
      grandChildren="Error 404!"
    />
  );
};

export default Default404;
