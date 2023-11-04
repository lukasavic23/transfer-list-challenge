import { useState } from "react";
import List from "./List";

export type ListItemDirection = "left" | "right";

export interface IListItem {
  value: number;
  direction: ListItemDirection;
  selected: boolean;
}

function App() {
  const [listItems, setListItems] = useState<IListItem[]>([
    { direction: "left", value: 1, selected: false },
    { direction: "left", value: 2, selected: false },
    { direction: "left", value: 3, selected: false },
    { direction: "left", value: 4, selected: false },
  ]);

  const leftValues = listItems.filter(
    (listItem) => listItem.direction === "left"
  );
  const rightValues = listItems.filter(
    (listItem) => listItem.direction === "right"
  );

  function handleItemSelection(newValue: number) {
    console.log(newValue);
    setListItems((prev) => {
      return prev.map((listItem) => {
        if (listItem.value === newValue) {
          return { ...listItem, selected: !listItem.selected };
        }
        return listItem;
      });
    });
  }

  function handleTransferToRight() {
    setListItems((prev) => {
      return prev.map((item) => {
        if (item.selected) {
          return { ...item, direction: "right", selected: false };
        }

        return item;
      });
    });
  }

  function handleTransferToLeft() {
    setListItems((prev) => {
      return prev.map((item) => {
        if (item.selected) {
          return { ...item, direction: "left", selected: false };
        }

        return item;
      });
    });
  }

  const isButtonToRightDisabled =
    !leftValues.length || !leftValues.some((leftValue) => leftValue.selected);

  const isButtonToLeftDisabled =
    !rightValues.length ||
    !rightValues.some((rightValue) => rightValue.selected);

  return (
    <main className="app-wrapper">
      <section className="list-items-wrapper">
        <List listItems={leftValues} onItemSelection={handleItemSelection} />
        <div className="button-actions">
          <button
            disabled={isButtonToRightDisabled}
            onClick={handleTransferToRight}
          >
            &gt;
          </button>
          <button
            disabled={isButtonToLeftDisabled}
            onClick={handleTransferToLeft}
          >
            &lt;
          </button>
        </div>
        <List listItems={rightValues} onItemSelection={handleItemSelection} />
      </section>
    </main>
  );
}

export default App;
