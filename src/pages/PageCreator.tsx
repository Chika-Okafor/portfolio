//DEPENDENCY IMPORTS
import { motion } from "framer-motion";
import { ReactElement } from "react";

//INTERFACE DEFINITION
interface IProps {
  id: string;
  className?: string;
  dataTestID?: string;
  children?: ReactElement | string;
  childrenClassName?: string;
  grandChildren?: ReactElement | string;
}

const PageCreator = (props: IProps) => {
  //PROPS DECONSTRUCTION
  const {
    id,
    className,
    dataTestID,
    children,
    childrenClassName,
    grandChildren,
  } = props;

  //SET ANIMATION VARIANTS
  const menuVariants = {
    pullUp: { opacity: 1, y: "-100%" },
    pullDown: { opacity: 1, y: "0%" },
  };

  const defaultChildren: ReactElement = (
    <div className={childrenClassName ? childrenClassName : "page-content"}>
      {grandChildren ? grandChildren : "No Child Elements"}
    </div>
  );

  return (
    <motion.div
      id={id}
      className={className ? className : "page-content-container"}
      data-testid={dataTestID}
      initial={"pullUp"}
      animate={"pullDown"}
      transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
      variants={menuVariants}
      layout
    >
      {children ? children : defaultChildren}
    </motion.div>
  );
};

export default PageCreator;
