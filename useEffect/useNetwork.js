const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "ONLINE!" : "OFFLINE");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>Hi {onLine ? "Online" : "OffLine"}</h1>
      <p>I am ihl. nice to meet you!</p>
    </div>
  );
};

export default App;
