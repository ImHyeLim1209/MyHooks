// 유저가 화면을 끄기 전에 경고창을 띄워주는 기능
const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };

  const enablePrevent = () => 
    window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};

const App = () => {
  const { enablePrevent, unprotdisablePreventect } = usePreventLeave();
  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={enablePrevent}>protect</button>
      <button onClick={unprotdisablePreventect}>unprotect</button>
    </div>
  );
};

export default App;
