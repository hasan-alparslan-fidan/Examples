// class Counter extends React.Component {
//   state = {
//     count: 0,
//   };

//   increment = () => {
//     const { count } = this.state;
//     const { onChange } = this.props;
//     this.setState({ count: count + 1 });
//     onChange("increment", count + 1);
//   };
//   decrement = () => {
//     const { count } = this.state;
//     const { onChange } = this.props;
//     this.setState({ count: count - 1 });
//     onChange("decrement", count - 1);
//   };

//   render() {
//     const { count } = this.state;
//     const { title } = this.props;

//     return (
//       <div>
//         <h1>{title}</h1>
//         <button onClick={this.increment}>increment</button>
//         <div className="counter">{count}</div>
//         <button onClick={this.decrement}>decrement</button>
//       </div>
//     );
//   }
// }

import React, { useState, useRef, useEffect } from "react";

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const { title, onChange } = props;

  const prevCount = usePrevious(count);
  const prevTestCount = usePrevious(props.testNumber);

  const increment = () => {
    setCount(count + 1);
    onChange("increment", count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
    onChange("decrement", count - 1);
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={increment}>increment</button>
      <div className="counter">Current : {count}</div>
      <div className="counter">Previous : {prevCount}</div>
      <h2>Current Test number: {props.testTestCount}</h2>
      <h2>Previous Test number: {prevTestCount}</h2>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default Counter;
