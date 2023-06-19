import user from 'user';
import data from 'data';
import friends from 'friends';
import transactions from 'transactions';
import Profile from './Profile/Profile';
import Statistic from './Statistic/Statistic';
import FriendsList from './FriendsList/FriendsList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const { username, tag, location, avatar, stats } = user;

export const App = () => {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
