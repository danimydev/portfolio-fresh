export interface GitHubOwner {
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface License {
  key: string;
  name: string;
  url: string;
  spdx_id: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  owner: GitHubOwner;
  html_url: string;
  description: string;
  languages_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string | null;
  language: string;
  license: License | null;
  topics: string[];
}
