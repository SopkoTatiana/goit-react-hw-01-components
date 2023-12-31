import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({
  username,
  tag,
  location,
  avatar = '',
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <div className="description">
        <img src={avatar} alt="User avatar" className={css.img} />
        <p className={css.name}>{username}</p>
        <p className={css.title}>@{tag}</p>
        <p className={css.description}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stats__item}>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={css.stats__item}>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={css.stats__item}>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
