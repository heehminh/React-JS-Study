import { useState } from "react";
import "./App.css";
import Page from "./components/Page";

function App() {
  const [isDark, setIsDark] = useState(false);

  // 부모(App) => 자녀(Page) Props 전달
  return <Page isDark={isDark} setIsDark={setIsDark} />;
}

export default App;
