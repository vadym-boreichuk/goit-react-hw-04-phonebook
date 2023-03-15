import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/Form';
import { Div, Container, Title } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onDelete = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  const addContact = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;
    const normalizedName = name.toLowerCase();
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.find(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      return alert(`${name} is already in contacts!`);
    }
    setContacts(prevContacts => [contact, ...prevContacts]);

    event.currentTarget.reset();
  };

  const filterContacts = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <Div>
        <Title>Phonebook</Title>

        <ContactForm addContact={addContact} />
      </Div>
      <Div>
        <Title>Contacts</Title>
        <Filter value={filter} onChange={filterContacts} />
        <ContactList onClick={onDelete} contacts={getFilteredContacts()} />
      </Div>
    </Container>
  );
};
