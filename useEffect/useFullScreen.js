// 요소를 FullScreen으로 보거나 보지않기, FullScreen일 때의 콜백 등록
// simple 버전
const useFullScreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") callback(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") callback(false);
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullScreen = (isFull) => {
    console.log(isFull ? "Full!" : "Small!");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullScreen);
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://cdn.pixabay.com/photo/2019/04/14/20/05/duck-meet-4127713_960_720.jpg" />
        <button onClick={exitFull}>exit!</button>
      </div>
      <button onClick={triggerFull}>Full!</button>
    </div>
  );
};

export default App;


// 호환성을 고려한 버전(trigger만)
const triggerFull = () => {
    if (element.current) {
      if(element.current.requestFullscreen) element.current.requestFullscreen();
      else if(element.current.mozRequestFullScreen) element.current.mozRequestFullScreen() //firefox
      else if(element.current.webkitRequestFullscreen) element.current.webkitRequestFullScreen(); //opera
      else if(element.current.msRequestFullscreen) element.current.msRequestFullscreen();

      if (callback && typeof callback === "function") callback(true);
    }
  };

