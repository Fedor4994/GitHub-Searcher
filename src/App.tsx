import { useState } from "react";
import Container from "components/Container/Container";
import Header from "components/Header/Header";
import SearchForm from "components/SearchForm/SearchForm";
import UserCard from "components/UserCard/UserCard";
import { defaultUser } from "mock";
import { GithubError, GithubUser } from "types/user";
import { isGithubUser } from "utils/typeguards";

function App() {
  const [user, setUser] = useState<GithubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const user = (await res.json()) as GithubUser | GithubError;

    if (isGithubUser(user)) {
      setUser(user);
    } else {
      setUser(null);
    }
  };

  return (
    <Container>
      <Header />
      <SearchForm isError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
}

export default App;
