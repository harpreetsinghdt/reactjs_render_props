import { useAccContext } from "./Accordion";

const AccordianItem = ({ id, title, children, classname }) => {
  const { openItemId, toggleItem } = useAccContext();
  const isOpen = openItemId === id;
  // function handleClick() {
  //   toggleItem(id);
  // }
  return (
    <li className={classname}>
      <h3 onClick={() => toggleItem(id)}>{title}</h3>
      <div
        className={
          isOpen ? "accordion-item-content open" : "accordion-item-content"
        }
      >
        {children}
      </div>
    </li>
  );
};

export default AccordianItem;
