import { useCallback, useState } from "react";
import Logo from "./Logo.jsx";
import Form from "./Form.jsx";
import PackingList from "./PackingList.jsx";
import Stats from "./Stats.jsx";

export default function App() {
  const [items, setItems] = useState([]);

  const handleClearList = useCallback(() => {
    setItems([]);
  }, []);

  const handleDeleteItems = useCallback((id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  }, []);

  const handleAddItems = useCallback((item) => {
    setItems((items) => [...items, item]);
  }, []);

  const handleToggleItems = useCallback((id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }, []);

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItems}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
