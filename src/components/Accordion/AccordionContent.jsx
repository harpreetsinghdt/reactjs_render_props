import React from "react";

import { useAccContext } from "./Accordion";
import { useAccItemContext } from "./AccordionItem";

const AccordionContent = ({ children, classname }) => {
  const { openItemId } = useAccContext();
  const id = useAccItemContext();
  const isOpen = openItemId === id;
  return (
    <div
      className={
        isOpen ? `${classname ?? ""} open` : `${classname ?? ""} close`
      }
    >
      {children}
    </div>
  );
};

export default AccordionContent;
