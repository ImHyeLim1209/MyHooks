//useRef: document.querySelector()처럼
//          component의 어떤 부분을 선택할 수 있는 방법

// element.current: DOM의 요소에 대한 참조는 current 프로퍼티에 존재한다.
//                 mount가 된 후에만 current가 존재한다.

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    // mount
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    
    return () => {
      if (element.current) {
        // unmount
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []); // 2번째 인자가 없다면 addEventListener가 여러번 실행되서 click 이벤트에 여러 개의 onClick 함수가 추가된다.
  if(typeof onClick !== "function") return;
  return element;
};

const App = () => {
  const sayHello = () => {
    console.log("Hello!!");
  };
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
