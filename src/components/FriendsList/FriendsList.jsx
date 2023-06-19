import PropTypes from 'prop-types';
import css from './FriendsList.module.css';
import FriendsListItem from '../FriendsListItem/FriendsListItem';

const FriendsList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendsListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendsList;
