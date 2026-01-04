import { memo, useMemo, useState } from "react";
import Item from "./Item.jsx";
const PackingList = memo(function PackingList({
  items,
  onDeleteItems,
  onToggleItems,
  onClearList,
}) {
  const [sortby, setSortby] = useState("input");

  const sortedItems = useMemo(() => {
    if (sortby === "input") return items;
    if (sortby === "description")
      return items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
    if (sortby === "packed")
      return items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
    return items;
  }, [items, sortby]);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortby}
          onChange={(event) => setSortby(event.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
});

export default PackingList;
