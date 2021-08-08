// 스크롤 x, y좌표를 알려주는 훅
const useScroll = () => {
  const [state, setSate] = useState({
    x: 0,
    y: 0
  });

  const onScroll = () => {
    setSate({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

const App = () => {
  const { x, y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h1>
      <p>I am ihl. nice to meet you!</p>
    </div>
  );
};

export default App;
