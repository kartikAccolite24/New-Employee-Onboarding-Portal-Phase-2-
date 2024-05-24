import PropTypes from 'prop-types'; 
import React, { useState } from 'react';

import style from './Faq.module.css';

export default function FAQ({ id, title, desc }) {
  const [toggle, setToggle] = useState(false);

  const onHandlestate = () => {
    setToggle(!toggle);
  };

  return (
    <article className={style.faq}>
      <div>
        <h7>{title}</h7>
        <button type="button" onClick={onHandlestate}>
          {toggle ? '-' : '+'}
        </button>
      </div>
      {toggle && <p className={style.desc}>{desc}</p>}
    </article>
  );
}

// Define prop types for your component
FAQ.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired, // Add prop type validation for 'desc'
};
