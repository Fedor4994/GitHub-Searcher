import s from "./UserStat.module.scss";
import { GithubUser } from "types/user";

interface UserStatProps
  extends Pick<GithubUser, "public_repos" | "following" | "followers"> {}

const UserStat = ({
  public_repos: repos,
  following,
  followers,
}: UserStatProps) => {
  return (
    <div className={s.userStat}>
      <div className={s.info}>
        <div className={s.infoTitle}>Repos</div>
        <div className={s.infoNumber}>{repos}</div>
      </div>
      <div className={s.info}>
        <div className={s.infoTitle}>Following</div>
        <div className={s.infoNumber}>{following}</div>
      </div>
      <div className={s.info}>
        <div className={s.infoTitle}>Followers</div>
        <div className={s.infoNumber}>{followers}</div>
      </div>
    </div>
  );
};

export default UserStat;
