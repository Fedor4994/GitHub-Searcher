import { ReactComponent as SearchIcon } from "assets/icon-search.svg";
import s from "./SearchForm.module.scss";
import Button from "components/Button/Button";

type SearchFormProps = {
  onSubmit: (text: string) => void;
  isError: boolean;
};

const SearchForm = ({ onSubmit, isError }: SearchFormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const text = form.username.value;

    if (text.trim()) {
      onSubmit(text);
      form.reset();
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className={s.search}>
        <label htmlFor="search" className={s.label}>
          <SearchIcon />
        </label>
        <input
          type="text"
          className={s.textField}
          id="search"
          name="username"
          placeholder="Search GitHub username..."
        />
        {isError && <div className={s.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};

export default SearchForm;
