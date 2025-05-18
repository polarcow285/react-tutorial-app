import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  //Type of function where input is string, return is void
  onSelect: (item: string) => void;
}

function ListGroup({ items, heading, onSelect }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {/*if condition is true, whole expression evaluates to paragraph*/}
      {items.length === 0 && <p>no items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelect(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
