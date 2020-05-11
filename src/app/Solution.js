import React from 'react';

function PlayerStatus() {
  const [status, setStatus] = React.useState("online");
  const [counter, setCounter] = React.useState(0);

  // Toggle between the two status values - 'away' and 'online'
  function toggleStatus() {
    if (status === "online") {
      setStatus("away");
    } else if (status === "away") {
      setStatus("online");
    }
  }
  
  // Implement effect hook below.
  // Update the counter when status changes.
  React.useEffect(() => {
    setCounter(counter + 1);
  }, [status]); 

  return (
    <div>
      <h1>{status}</h1>
      <h3>{counter}</h3>
      <button onClick={toggleStatus}>Toggle status</button>
    </div>
  );
};

export default PlayerStatus;