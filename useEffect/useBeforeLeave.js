// 마우스가 화면을 떠날 때 callback을 실행시킨다.
const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);

  if (typeof onBefore !== "function") return;
  const handle = (event) => { // 화면 위쪽으로 마우스가 나갈 때만 실행시킨다.(그 때가 보통 화면을 끄려고 할 )
    const { clientY } = event;
    if (clientY <= 0) onBefore();
  };
};

const App = () => {
  const begForLife = () => console.log("Please dont leave...");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
};

export default App;
