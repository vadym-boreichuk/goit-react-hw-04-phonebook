import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/Form';
import { Div, Container, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContact = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;
    const normalizedName = name.toLowerCase();
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === normalizedName
      )
    ) {
      return alert(`${name} is already in contacts!`);
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));

    event.currentTarget.reset();
  };

  filterContacts = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    // console.log('render');
    const { addContact, filterContacts, state, onDelete } = this;
    return (
      <Container>
        <Div>
          <Title>Phonebook</Title>

          <ContactForm addContact={addContact} />
        </Div>
        <Div>
          <Title>Contacts</Title>
          <Filter value={state.filter} onChange={filterContacts} />
          <ContactList
            onClick={onDelete}
            contacts={this.getFilteredContacts()}
          />
        </Div>
      </Container>
    );
  }
}
