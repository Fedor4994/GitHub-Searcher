import s from "./UserInfo.module.scss";
import { GithubUser } from "types/user";
import InfoItem from "components/InfoItem/InfoItem";
import { InfoItemProps } from "components/InfoItem/InfoItem";

import { ReactComponent as CompanyIcon } from "assets/icon-company.svg";
import { ReactComponent as LocationIcon } from "assets/icon-location.svg";
import { ReactComponent as TwitterIcon } from "assets/icon-twitter.svg";
import { ReactComponent as BlogIcon } from "assets/icon-website.svg";

interface UserInfoProps
  extends Pick<
    GithubUser,
    "blog" | "company" | "location" | "twitter_username"
  > {}

const UserInfo = ({
  blog,
  company,
  location,
  twitter_username,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <BlogIcon />,
      text: blog,
      isLink: true,
    },
    {
      icon: <TwitterIcon />,
      text: twitter_username,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    },
  ];

  return (
    <div className={s.userInfo}>
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </div>
  );
};

export default UserInfo;
