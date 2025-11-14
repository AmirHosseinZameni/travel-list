export default function Stats({ items }) {
  // function packedItems() {
  //   const packLength = items.filter((item) => item.packed === true);

  //   return packLength.length;
  // }

  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding Items!</em>
      </p>
    );
  const numPackes = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((numPackes / items.length) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything, Ready to go!"
          : `💼 You have ${items.length} items on your list, and you already packed
        ${numPackes}(${percentage}%)`}
      </em>
    </footer>
  );
}