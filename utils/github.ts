import { GITHUB_REPOSITORIES, GITHUB_USER } from "../utils/data.ts";

const GITHUB_URLS = {
  userAvatar: "https://avatars.githubusercontent.com/u/31113489?v=4",
  user: "https://api.github.com/users/danimydev",
  htmlUser: "https://www.github.com/danimydev",
  userRepositories: "https://api.github.com/users/danimydev/repos",
};

export type Repository = {
  name: string;
  html_url: string;
  description: string;
  url: string;
  created_at: string;
  updated_at: string;
  language: string;
  topics: string[];
  fork: boolean;
};

export type User = {
  login: string;
  name: string;
  company: string;
  blog: string;
  location: string;
};

export const fetchRepositories = async () => {
  try {
    const response = await fetch(GITHUB_URLS.userRepositories);
    const repositories = await response.json() as Repository[];
    return repositories.filter((repository) => !repository.fork);
  } catch (_error) {
    return GITHUB_REPOSITORIES.filter((repository) =>
      !repository.fork
    ) as Repository[];
  }
};

export const fetchUser = async () => {
  try {
    const response = await fetch(GITHUB_URLS.user);
    const user = await response.json() as User;
    return user;
  } catch (_error) {
    return GITHUB_USER as User;
  }
};
