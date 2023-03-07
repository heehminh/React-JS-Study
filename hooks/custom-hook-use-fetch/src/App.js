import { useFetch } from "./useFetch";

const baseUrl = "https://jsonplaceholder.typicode.com";

function App() {
  const { data: userData } = useFetch(baseUrl, "users");
  const { data: postData } = useFetch(baseUrl, "posts");
  const { data: todoData } = useFetch(baseUrl, "todos");

  return (
    <div>
      <h1>useFetch</h1>
      {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
      {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
      {todoData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
    </div>
  );
}

export default App;
