import React, { FC, useCallback, useState } from "react";

interface IChild {
  count: number;
  onClick(): void;
}

// const Child: FC<IChild> = ({ count, onClick }) => {
//   console.log("child rendered");
//   return (
//     <div className="p-10 mt-10 border-solid rounded-sm">
//       <h4>This is child</h4>
//       <p>{count}</p>
//       <button onClick={onClick}>Increment Count</button>
//     </div>
//   );
// };

const Child: FC<IChild> = React.memo(({ count, onClick }) => {
  console.log("child rendered");
  return (
    <div className="p-10 mt-10 border-solid rounded-sm">
      <h4>This is child</h4>
      <p>{count}</p>
      <button onClick={onClick}>Increment Count</button>
    </div>
  );
});

const ReactProfiler = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  //   const handleClick = () => {
  //     setCount((c) => c + 1);
    //   };
    
    console.log("parent rerender")

  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div className="p-10">
      <h2>This is parent component</h2>
      <input
        value={text}
        placeholder="type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <p>text:{text}</p>
      <Child count={count} onClick={handleClick} />
    </div>
  );
};

export default ReactProfiler;
