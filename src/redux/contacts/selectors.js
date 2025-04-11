export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = state => {
  const contacts = selectContacts(state);
  const filter = state.filters.name.toLowerCase();
  
  return contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter) ||
    contact.number.toLowerCase().includes(filter)
  );
}; 