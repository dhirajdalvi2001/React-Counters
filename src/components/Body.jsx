import react, { useState } from "react";

function Body() {
  const [count, setCount] = useState(0);
  const [item1, setItem1] = useState(0);
  const [item2, setItem2] = useState(0);
  const [item3, setItem3] = useState(0);
  const [item4, setItem4] = useState(0);

  return (
    <div className="body">
      <div className="count">{count}</div>
      <div className="reset">
        <button
          className="reset-btn"
          onClick={() => {
            setCount(0);
            setItem1(0);
            setItem2(0);
            setItem3(0);
            setItem4(0);
          }}
        >
          Reset
        </button>
      </div>
      <div className="items">
        {/* Item1 */}
        <div className="item1 item">
          <div className="item-count">{item1}</div>
          <div className="increment">
            <button
              className="item-btn green"
              onClick={() => {
                setItem1(item1 + 1);
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
          <div className="decrement">
            <button
              className="item-btn orange"
              onClick={() => {
                if (item1 != 0) {
                  setItem1(item1 - 1);
                  setCount(count - 1);
                }
              }}
            >
              -
            </button>
          </div>
          <div className="delete">
            <button
              className="item-btn red"
              onClick={() => {
                setCount(count - item1);
                setItem1(0);
              }}
            >
              X
            </button>
          </div>
        </div>
        {/* Item2 */}
        <div className="item2 item">
          <div className="item-count">{item2}</div>
          <div className="increment">
            <button
              className="item-btn green"
              onClick={() => {
                setItem2(item2 + 1);
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
          <div className="decrement">
            <button
              className="item-btn orange"
              onClick={() => {
                if (item2 != 0) {
                  setItem2(item2 - 1);
                  setCount(count - 1);
                }
              }}
            >
              -
            </button>
          </div>
          <div className="delete">
            <button
              className="item-btn red"
              onClick={() => {
                setCount(count - item2);
                setItem2(0);
              }}
            >
              X
            </button>
          </div>
        </div>
        {/* Item3 */}
        <div className="item3 item">
          <div className="item-count">{item3}</div>
          <div className="increment">
            <button
              className="item-btn green"
              onClick={() => {
                setItem3(item3 + 1);
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
          <div className="decrement">
            <button
              className="item-btn orange"
              onClick={() => {
                if (item3 != 0) {
                  setItem3(item3 - 1);
                  setCount(count - 1);
                }
              }}
            >
              -
            </button>
          </div>
          <div className="delete">
            <button
              className="item-btn red"
              onClick={() => {
                setCount(count - item3);
                setItem3(0);
              }}
            >
              X
            </button>
          </div>
        </div>
        {/* Item4 */}
        <div className="item4 item">
          <div className="item-count">{item4}</div>
          <div className="increment">
            <button
              className="item-btn green"
              onClick={() => {
                setItem4(item4 + 1);
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
          <div className="decrement">
            <button
              className="item-btn orange"
              onClick={() => {
                if (item4 != 0) {
                  setItem4(item4 - 1);
                  setCount(count - 1);
                }
              }}
            >
              -
            </button>
          </div>
          <div className="delete">
            <button
              className="item-btn red"
              onClick={() => {
                setCount(count - item4);
                setItem4(0);
              }}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
