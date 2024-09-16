import Feed from "./Feed";
import { NewsProvider } from "./context/NewsContext";

function App() {
  return (
    <NewsProvider>
      <Feed />
    </NewsProvider>
  );
}

export default App;
