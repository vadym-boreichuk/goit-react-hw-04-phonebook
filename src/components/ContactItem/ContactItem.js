import PropTypes from 'prop-types';
import { Button, Item, Parag } from './ContactItem.styled';

export const ContactItem = ({ name, number, onClick, id }) => {
  return (
    <Item>
      <Parag>
        {name}: {number}
      </Parag>
      <Button onClick={() => onClick(id)}>Delete</Button>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
