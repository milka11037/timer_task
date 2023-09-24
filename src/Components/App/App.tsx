import React from 'react';


import { Form } from '../Form/Form';
import { Timer } from '../Timer/Timer';
import { Messages } from '../Messages/Messages';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Form/>
      <Timer/>
      <Messages/>
    </div>
  );
};

export default App;
