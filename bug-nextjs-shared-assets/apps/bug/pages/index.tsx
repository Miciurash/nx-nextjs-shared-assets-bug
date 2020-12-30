import React from 'react';

import styles from './index.module.css';

//import cat from "@bug-nextjs-shared-assets/shared/assets"

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <h2>Resources &amp; Tools</h2>

      <img src="/assets/cat.jpg" alt="Cat" />
    </div>
  )
}

export default Index;
