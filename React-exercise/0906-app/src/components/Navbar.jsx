import React, { useState } from 'react';
// import React, { useState } from 'react';
import styles from '../components/Navbar.module.css';


export default function Navbar() {
      const [showPageList, setShowPageList]= useState(false);
      const pageListClassName = `${styles.pageList} ${
        showPageList ? "" :styles.noShow
    }`;
    return (
      <nav>
          <div className={styles.navbar}>
            <div className={styles.changeList} 
            onClick={() => {
              setShowPageList(showPageList => !showPageList);
              // 此項可將原先showPageList setting反轉，即原本是（false) !後變ture
            }}
            ></div>
          </div>
        <div className={pageListClassName}>
          <button>home page</button>
          <button>Task</button>
          <button>calender</button>
          <button>problem</button>
          <button>Setting</button>

        </div>

      </nav>
    );
}

