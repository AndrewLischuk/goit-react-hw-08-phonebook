import styles from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
