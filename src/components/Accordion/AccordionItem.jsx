// import { useAccContext } from "./Accordion";

import { createContext, useContext } from "react";

const AccItemContext = createContext();

export function useAccItemContext() {
  const ctx = useContext(AccItemContext);
  if (!ctx) {
    throw new Error(
      "Accordion item releted components must be wrapped by <AccordionItem>."
    );
  }
  return ctx;
}

const AccordianItem = ({ id, children, classname }) => {
  // const { openItemId, toggleItem } = useAccContext();
  // const isOpen = openItemId === id;
  // function handleClick() {
  //   toggleItem(id);
  // }
  return (
    <AccItemContext.Provider value={id}>
      <li className={classname}>
        {/* <h3 onClick={() => toggleItem(id)}>{title}</h3>
      <div
        className={
          isOpen ? "accordion-item-content open" : "accordion-item-content"
        }
      >
        {children}
      </div> */}
        {children}
      </li>
    </AccItemContext.Provider>
  );
};

export default AccordianItem;
