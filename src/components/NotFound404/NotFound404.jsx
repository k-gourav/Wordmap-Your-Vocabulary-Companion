import React from 'react';
import error404 from "../../assets/images/error-404.png"
import { Link } from 'react-router-dom';
import styles from './Error404.module.css'; 

const NotFound404 = () => {
  return (
    <div className={styles.errorContainer}>
      <img 
        src={error404} 
        alt="Not Found" 
        className={styles.errorImage} 
      />
      <p className={styles.errorMessage}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className={styles.backHomeLink}>
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound404;
