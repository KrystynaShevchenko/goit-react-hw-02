import FriendListItem from '../friendListItem/FriendListItem';
import css from './FriendList.module.css';
const FriendList = ({ friends }) => {
  return (
    <ul className={css.friensList}>
      {friends.map(friend => {
        return (
          <li className={css.friendsItem} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default FriendList;
