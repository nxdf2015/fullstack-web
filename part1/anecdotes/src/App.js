import React, { useState } from "react";

const useVote = (init = []) => {
  const [votes, setVotes] = useState(init);
  const [idMax, setIdMax] = useState(-1);

  const vote = (id) => {
    if (idMax === -1){
      setIdMax(id)
    }
    else if (votes[id] >= votes[idMax]) {
      setIdMax(id);
    }
    setVotes((votes) => [
      ...votes.slice(0, id),
      votes[id] + 1,
      ...votes.slice(id + 1),
    ]);
  };
  
   
  const getVote = (id) => votes[id];
  console.log(votes)
  return { idMax , vote, getVote };
};
const App = (props) => {
  const [selected, setSelected] = useState(0);
  const size = props.anecdotes.length;
  const { idMax , vote, getVote } = useVote(Array(size).fill(0));

  const randomIndex = () => {
    const id = Math.floor(Math.random() * size);
    setSelected(id);
  };
  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <div style={{ height: 80, width: "50%" }}>
        {props.anecdotes[selected]}
        has {getVote(selected)} votes
      </div>
      <button onClick={() => vote(selected)}>vote</button>
      <button onClick={randomIndex}>next anecdote</button>
      <h1>Anecdotes with most votes</h1>
      <div style={{ height: 80, width: "50%" }}>
        {props.anecdotes[idMax]}
        has {getVote(idMax)} votes
      </div>
    </div>
  );
};

export default App;
