import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { Div, List } from './ContactList.styled';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <Div>
      <List>
        {contacts.map(({ name, number, id }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onClick={onClick}
            id={id}
          />
        ))}
      </List>
    </Div>
  );
};

ContactList.propTypes = { contacts: PropTypes.array.isRequired };
