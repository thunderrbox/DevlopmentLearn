import React from "react";
import "./app.css";
import axios from "axios";

export function App() {
  const [jokes, setJokes] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error); // x6 AxiosError { message: 'Network Error', name: 'AxiosError' }
      });
  });

  return (
    <>
      <h1>Jokes</h1>
      <h2>Jokes Count : {jokes.length}</h2>
      {
        jokes.map((joke, index) =>
        // {
          (// hence we don't want to use return statement here, we can directly return the JSX element for each joke in the list.
        // Index is used so that we can use it as a key for each joke in the list
        // return (
          <div key={joke.id}>
            <h3>{joke.joke}</h3>
          </div>
        // );
      // }
    ))}
    </>
  );
}
export default App;
