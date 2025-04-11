import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import styles from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleUpdate = () => {
    if (editedName.trim() && editedNumber.trim()) {
      dispatch(updateContact({ id, name: editedName, number: editedNumber }));
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    dispatch(deleteContact(id));
    setShowDeleteConfirm(false);
  };

  if (isEditing) {
    return (
      <li className={styles.contact}>
        <div className={styles.info}>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className={styles.input}
          />
          <input
            type="text"
            value={editedNumber}
            onChange={(e) => setEditedNumber(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.actions}>
          <button type="button" className={styles.buttonSave} onClick={handleUpdate}>
            Save
          </button>
          <button type="button" className={styles.buttonCancel} onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </div>
      </li>
    );
  }

  return (
    <>
      <li className={styles.contact}>
        <div className={styles.info}>
          <span className={styles.name}>
            <svg className={styles.icon} viewBox="0 0 24 24" width="24" height="24">
              <circle cx="12" cy="7" r="4" fill="currentColor"/>
              <path d="M12 11c-4.97 0-9 4.03-9 9h18c0-4.97-4.03-9-9-9z" fill="currentColor"/>
            </svg>
            {name}
          </span>
          <span className={styles.number}>
            <svg className={styles.icon} viewBox="0 0 24 24" width="24" height="24">
              <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM5.1 5h1.7c.1.9.3 1.8.5 2.6L5.8 9.1c-.4-1.3-.7-2.7-.7-4.1zM19 18.9c-1.4 0-2.8-.2-4.1-.7l1.5-1.5c.8.2 1.7.4 2.6.5v1.7z" fill="currentColor"/>
            </svg>
            {number}
          </span>
        </div>
        <div className={styles.actions}>
          <button type="button" className={styles.buttonEdit} onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button type="button" className={styles.buttonDelete} onClick={() => setShowDeleteConfirm(true)}>
            Delete
          </button>
        </div>
      </li>

      {showDeleteConfirm && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>Are you sure you want to delete {name}?</p>
            <div className={styles.modalActions}>
              <button onClick={handleDelete} className={styles.buttonDelete}>Delete</button>
              <button onClick={() => setShowDeleteConfirm(false)} className={styles.buttonCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact; 