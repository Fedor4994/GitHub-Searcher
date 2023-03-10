export type GithubUser = {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

export type GithubError = {
  message: string;
  documentation_url: string;
};

// login: "Fedor4994";
// id: 103943126;
// avatar_url: "https://avatars.githubusercontent.com/u/103943126?v=4";
// html_url: "https://github.com/Fedor4994";
// repos_url: "https://api.github.com/users/Fedor4994/repos";
// name: "Fedor Sosnin";
// company: null;
// blog: "";
// location: null;
// bio: null;
// twitter_username: null;
// public_repos: 39;
// followers: 1;
// following: 1;
// created_at: "2022-04-18T13:39:53Z";
