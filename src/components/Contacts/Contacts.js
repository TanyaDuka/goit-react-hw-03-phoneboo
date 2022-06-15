import React from 'react';
import propTypes from 'prop-types';
import s from './Contacts.module.css';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <div className={s.container}>
      <ul className={s.element}>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}:{number}
            <button
              className={s.deleteButton}
              type="button"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: propTypes.func.isRequired,
};

export default Contacts;
