import React, { useState } from "react";

const List = (props) => {
  const [text, setText] = useState("");
  const [list, setList] = useState(props.data || []);
  const [error, setError] = useState("");
  const [editedItemId, setEditedItemId] = useState(null);
  const [originalValue, setOriginalValue] = useState(editedItemId);
  const [itemId, setItemId] = useState([]);

  const changeText = (e) => {
    const { value } = e.target;
    setText(value.charAt(0).toUpperCase() + value.slice(1));
    console.log(value);
  };
  const add = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return setError("Reguired field");
    } else if (text.length > 25) {
      return setError("You can only have 25 characters");
    } else {
      setError("");
      setText("");
    }
    const newObject = { id: Math.random(), name: text };
    const newList = [...list, newObject];
    setList(newList);
    console.log(newList);
  };

  const deleteItem = (product) => {
    let deletedList = list.filter((item) => {
      return item.id !== product.id;
    });
    setList(deletedList);
  };
  const handleEdit = (product) => {
    setEditedItemId(product.id);
    console.log(setEditedItemId);
  };
  const editedItem = (e) => {
    const { value } = e.target;
    console.log(value);
    const editedValue = list.map((item) => {
      if (item.id === editedItemId) {
        let newValue = {
          id: item.id,
          name: value,
        };
        console.log(newValue);
        return newValue;
      } else {
        return item;
      }
    });
    setList(editedValue);
  };
  const updateItem = (item) => {
    setEditedItemId(item);
    setOriginalValue(list);
  };
  const closeButton = () => {
    setList(originalValue);
    setEditedItemId("");
  };

  const handleCheckbox = (item) => {
    //const list = itemId.includes(item.id);

    if (itemId.includes(item.id)) {
      // javascript incluedes push concat filter
      const updatedList = itemId.filter((product) => {
        return product !== item.id;
      });
      setItemId(updatedList);
    } else {
      const updatedItems = itemId;
      updatedItems.push(item.id);
      console.log("updated", updatedItems);
      setItemId(updatedItems);
    }
  };
  const checkCheckbox = (item) => {
    console.log("nas itEM", item);
    console.log("provjera", item, itemId.includes(item.id));
    if (itemId.includes(item.id)) return true;
    return false;
  };

  return (
    <div className="newList">
      <input
        className="taskValue"
        type="text"
        value={text}
        name="addText"
        onChange={changeText}
        placeholder="Add new Task"
      />
      <button onClick={add} className="add">
        +
      </button>
      <div className="error">{error}</div>
      <ul>
        {list.map((item, key) => {
          if (item.id === editedItemId) {
            return (
              <>
                <input
                  id="edited"
                  type="text"
                  name="editedItem"
                  onChange={(e) => editedItem(e)}
                  value={item.name}
                />

                <i
                  onClick={updateItem}
                  className="fa-sharp fa-solid fa-check"
                ></i>
                <i onClick={closeButton} className="fa-solid fa-x"></i>
              </>
            );
          }
          return (
            <div className="item">
              <input
                onChange={() => handleCheckbox(item)}
                value={checkCheckbox(item)}
                id="task"
                type="checkbox"
              />
              <label>
                <li
                  className={itemId.includes(item.id) ? "done" : ""}
                  key={key}
                >
                  {item.name}{" "}
                </li>
              </label>
              <i
                onClick={() => handleEdit(item)}
                className="fa-regular fa-pen-to-square"
              ></i>
              <i
                onClick={() => deleteItem(item)}
                className="fa-solid fa-trash"
              ></i>
              <hr className="breakLine" />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
