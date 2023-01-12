import { GithubUser } from "types/user";
import s from "./UserTitle.module.scss";

interface UserTitleProps
  extends Pick<GithubUser, "login" | "name" | "created_at"> {}

const localDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

const UserTitle = ({ name, login, created_at: created }: UserTitleProps) => {
  const joinedDate = localDate.format(new Date(created));

  return (
    <div className={s.userTitle}>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{joinedDate}</span>
    </div>
  );
};

export default UserTitle;
