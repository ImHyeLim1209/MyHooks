// 동작하기 직전에 confirm 모달창을 띄워 진짜 실행할 것인지 확인한다.
const useConfirm = (message, callback, rejection) => {
  if (callback && typeof callback !== "function") return;
  if (rejection && typeof rejection !== "function") return;

  const confirmAction = () => {
    // window.confirm(): 확인, 취소 두 버튼을 갖는 모달창 팝업
    if (window.confirm(message)) callback();
    else rejection();
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={confirmDelete}>Delete the world?</button>
    </div>
  );
};

export default App;
