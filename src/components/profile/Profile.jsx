import css from './Profile.module.css';
const Profile = props => {
  return (
    <>
      <div className={css.profileCard}>
        <div className={css.profileBox}>
          <img className={css.profileImg} src={props.image} alt="User avatar" />
          <p className={css.profileUserName}>{props.name}</p>
          <p className={css.profileTag}>@{props.tag}</p>
          <p className={css.profileLocation}>{props.location}</p>
        </div>

        <ul className={css.profileList}>
          <li className={css.profileItem}>
            <span className={css.profileTextFollowers}>Followers</span>
            <span className={css.profileNumbersFollowers}>
              {props.stats.followers}
            </span>
          </li>
          <li className={css.profileItem}>
            <span className={css.profileTextViews}>Views</span>
            <span className={css.profileNumbersViews}>{props.stats.views}</span>
          </li>
          <li className={css.profileItem}>
            <span className={css.profileTextLikes}>Likes</span>
            <span className={css.profileNumbersLikes}>{props.stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
