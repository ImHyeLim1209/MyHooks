// hooks: react state machine에 연결하는 간단한 방법!
import { useState } from "react";
import "./styles.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue); // useState로 내가 만들 hooks에서 기억할 정보를 저장한다.
  
  const onChange = (event) => { // useInput이 관리하는 값이 변경되면 할 일
    const { target: { value } } = event; // event.target.value를 가져온다.
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length < 10;
  const name = useInput("ihl", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name}></input>
      <input placeholder="Name" value={name.value} onChange={name.onChange}></input> {/* 윗 줄과 동일하다. */}
    </div>
  );
};

export default App;
