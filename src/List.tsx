import { IListItem } from "./App";

interface ListProps {
  listItems: IListItem[];
  onItemSelection: (value: number) => void;
}

function List(props: ListProps) {
  const { listItems, onItemSelection } = props;

  return (
    <div className="list-wrapper">
      {listItems.map((listItem) => {
        return (
          <div key={listItem.value} className="list-item">
            <input
              type="checkbox"
              id="item"
              name="item"
              onChange={(e) => onItemSelection(Number(e.target.value))}
              value={listItem.value}
              checked={listItem.selected}
            ></input>
            <label htmlFor="item">{listItem.value}</label>
          </div>
        );
      })}
    </div>
  );
}

export default List;
