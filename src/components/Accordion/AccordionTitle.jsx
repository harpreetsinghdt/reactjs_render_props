import React from "react";
import { useAccContext } from "./Accordion";
import { useAccItemContext } from "./AccordionItem";

const AccordionTitle = ({ children, classname }) => {
  const { toggleItem } = useAccContext();
  const id = useAccItemContext();
  return (
    <h3 className={classname} onClick={() => toggleItem(id)}>
      {children}
    </h3>
  );
};

export default AccordionTitle;
