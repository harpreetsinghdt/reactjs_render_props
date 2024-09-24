import React from "react";

import { useAccContext } from "./Accordion";

const AccordionContent = ({ id, children, classname }) => {
  const { openItemId } = useAccContext();
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
