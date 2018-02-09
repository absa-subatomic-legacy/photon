import * as React from 'react';

import './Profile.css';

export interface Props {
  name: string;
  forkProject?: (url: string) => void;
}

export default function Profile({ name, forkProject }: Props) {
  var click = () => {
    if (forkProject) {
      forkProject('https://github.com/absa-subatomic/photon');
    }
  };
  
  return (
    <div>
      <p>
        Hello! My name is <strong>{name}</strong>.
        My name was passed in through a route param!
      </p>
      <button onClick={click}>Fork the Project</button>
    </div>
  );
}
