import UserInfo from "components/UserInfo/UserInfo";
import UserStat from "components/UserStat/UserStat";
import UserTitle from "components/UserTitle/UserTitle";
import { GithubUser } from "types/user";
import s from "./UserCard.module.scss";
interface UserCardProps extends GithubUser {}

const UserCard = (props: UserCardProps) => {
  return (
    <div className={s.userCard}>
      <img src={props.avatar_url} alt={props.login} className={s.avatar} />
      <UserTitle
        name={props.name}
        login={props.login}
        created_at={props.created_at}
      />
      <p className={`${s.bio}${props.bio ? "" : ` ${s.empty}`}`}>
        {props.bio || "This profile has no bio"}
      </p>
      <UserStat
        followers={props.followers}
        following={props.following}
        public_repos={props.public_repos}
      />
      <UserInfo
        blog={props.blog}
        company={props.company}
        location={props.location}
        twitter_username={props.twitter_username}
      />
    </div>
  );
};

export default UserCard;
