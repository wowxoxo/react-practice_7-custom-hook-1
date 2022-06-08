import React from 'react';
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';
import LikesCounterWrapper from './components/LikesCounter';

function App() {
  const LikesForwardCounter = LikesCounterWrapper(ForwardCounter)

  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
      <LikesForwardCounter />
    </React.Fragment>
  );
}

export default App;
