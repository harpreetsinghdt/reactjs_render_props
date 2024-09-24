import React from "react";
import { useAccContext } from "./Accordion";

const AccordionTitle = ({ id, children, classname }) => {
  const { toggleItem } = useAccContext();
  return (
    <h3 className={classname} onClick={() => toggleItem(id)}>
      {children}
    </h3>
  );
};

export default AccordionTitle;
