// 천천히 나타나는 애니메이션을 적용한다.
const useFadeIn = (duration = 1) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease`;
      current.style.opacity = 1;
    }
  }, []);
  if(typeof duration !== "number") return;
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fastEl = useFadeIn(1);
  const slowEl = useFadeIn(3);
  return (
    <div className="App">
      <h1 {...fastEl}>Hi</h1> {/*spread oprator에 의해 속성이 적용된다.*/}
      <p {...slowEl}>I am ihl. nice to meet you!</p>
    </div>
  );
};
