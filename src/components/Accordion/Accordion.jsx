import { useContext, createContext, useState } from "react";
import AccordianItem from "./AccordionItem";

const Context = createContext();

export function useAccContext() {
  const ctx = useContext(Context);
  if (!ctx) {
    throw new Error(
      "Accordion releted components must be wrapped by <Accordion>."
    );
  }

  return ctx;
}

const Accordian = ({ children, classname }) => {
  const [openItemId, setOpenItemId] = useState();
  // function openItem(id) {
  //   setOpenItemId(id);
  // }
  // function closeItem() {
  //   setOpenItemId(null);
  // }
  function toggleItem(id) {
    setOpenItemId((prev) => (prev === id ? null : id));
  }
  const contextValue = {
    openItemId: openItemId,
    toggleItem: toggleItem,
  };
  return (
    <Context.Provider value={contextValue}>
      <ul className={classname}>{children}</ul>
    </Context.Provider>
  );
};

export default Accordian;

Accordian.Item = AccordianItem;
