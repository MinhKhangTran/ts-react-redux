import * as React from "react";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useActions";

export default function App() {
  const [text, setText] = React.useState("");
  const { getRepos } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repoReducer
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getRepos(text);
    setText("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Suche..."
        />
        <button>Suche</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </>
  );
}
