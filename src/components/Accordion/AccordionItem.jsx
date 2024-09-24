// import { useAccContext } from "./Accordion";

const AccordianItem = ({ children, classname }) => {
  // const { openItemId, toggleItem } = useAccContext();
  // const isOpen = openItemId === id;
  // function handleClick() {
  //   toggleItem(id);
  // }
  return (
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
  );
};

export default AccordianItem;
