import PropTypes from 'prop-types';
import css from './FriendsListItem.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => (
  <li className={css.listItem}>
    <span className={isOnline ? css.online : css.offline}></span>
    <img className={css.img} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
