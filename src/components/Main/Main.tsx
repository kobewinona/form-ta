import React from 'react';

import styles from './Main.module.css';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

const Main = () => {
  return (
    <main className={styles.layout}>
      <RegistrationForm />
    </main>
  );
};

export default Main;
