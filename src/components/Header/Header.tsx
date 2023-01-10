import ThemeSwitcher from "components/ThemeSwitcher/ThemeSwitcher";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <p className={s.logo}>GitHub Searcher</p>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
