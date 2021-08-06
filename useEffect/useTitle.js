// useEffect: componentDidMount + componentDidUpdate + componentWillUnMount
// 페이지에 접속했을 때, 값을 변경하여 rerendering 되었을 때, 페이지에서 나갈 때 작동한다.

// useTitle: Title을 변경해주는 Hook
// 제목변경을 위해 일반적으로는 react-helmet을 사용한다.
const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdator = useTitle("Loading...");
  setTimeout(() => titleUpdator("Home"), 3000);
  return (
    <div className="App">
      <div>Hello!</div>
    </div>
  );
};

export default App;
