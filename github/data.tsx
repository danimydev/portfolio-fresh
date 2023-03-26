import { GitHubRepo } from "./interfaces.tsx";

const GITHUB_REPOSITORIES = [
  {
    id: 419883755,
    node_id: "R_kgDOGQbq6w",
    name: "api-proxy-server",
    full_name: "danimydev/api-proxy-server",
    private: false,
    owner: {
      login: "danimydev",
      id: 31113489,
      node_id: "MDQ6VXNlcjMxMTEzNDg5",
      avatar_url: "https://avatars.githubusercontent.com/u/31113489?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/danimydev",
      html_url: "https://github.com/danimydev",
      followers_url: "https://api.github.com/users/danimydev/followers",
      following_url:
        "https://api.github.com/users/danimydev/following{/other_user}",
      gists_url: "https://api.github.com/users/danimydev/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/danimydev/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/danimydev/subscriptions",
      organizations_url: "https://api.github.com/users/danimydev/orgs",
      repos_url: "https://api.github.com/users/danimydev/repos",
      events_url: "https://api.github.com/users/danimydev/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/danimydev/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/danimydev/api-proxy-server",
    description:
      "A simple api proxy server to securely store your configuration (key, urls) it also implements cache ...",
    fork: false,
    url: "https://api.github.com/repos/danimydev/api-proxy-server",
    forks_url: "https://api.github.com/repos/danimydev/api-proxy-server/forks",
    keys_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/danimydev/api-proxy-server/teams",
    hooks_url: "https://api.github.com/repos/danimydev/api-proxy-server/hooks",
    issue_events_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/events",
    assignees_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/branches{/branch}",
    tags_url: "https://api.github.com/repos/danimydev/api-proxy-server/tags",
    blobs_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/languages",
    stargazers_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/stargazers",
    contributors_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/contributors",
    subscribers_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/subscribers",
    subscription_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/subscription",
    commits_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/merges",
    archive_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/downloads",
    issues_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/labels{/name}",
    releases_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/danimydev/api-proxy-server/deployments",
    created_at: "2021-10-21T21:37:21Z",
    updated_at: "2022-09-01T05:14:38Z",
    pushed_at: "2022-09-01T05:14:33Z",
    git_url: "git://github.com/danimydev/api-proxy-server.git",
    ssh_url: "git@github.com:danimydev/api-proxy-server.git",
    clone_url: "https://github.com/danimydev/api-proxy-server.git",
    svn_url: "https://github.com/danimydev/api-proxy-server",
    homepage: "",
    size: 50,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["api", "backend", "nodejs", "proxy-server"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
  {
    id: 474822586,
    node_id: "R_kgDOHE03ug",
    name: "auth-microservice",
    full_name: "danimydev/auth-microservice",
    private: false,
    owner: {
      login: "danimydev",
      id: 31113489,
      node_id: "MDQ6VXNlcjMxMTEzNDg5",
      avatar_url: "https://avatars.githubusercontent.com/u/31113489?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/danimydev",
      html_url: "https://github.com/danimydev",
      followers_url: "https://api.github.com/users/danimydev/followers",
      following_url:
        "https://api.github.com/users/danimydev/following{/other_user}",
      gists_url: "https://api.github.com/users/danimydev/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/danimydev/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/danimydev/subscriptions",
      organizations_url: "https://api.github.com/users/danimydev/orgs",
      repos_url: "https://api.github.com/users/danimydev/repos",
      events_url: "https://api.github.com/users/danimydev/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/danimydev/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/danimydev/auth-microservice",
    description:
      "Node JS microservice that supports jwt and multiple oauth providers",
    fork: false,
    url: "https://api.github.com/repos/danimydev/auth-microservice",
    forks_url: "https://api.github.com/repos/danimydev/auth-microservice/forks",
    keys_url:
      "https://api.github.com/repos/danimydev/auth-microservice/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/danimydev/auth-microservice/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/danimydev/auth-microservice/teams",
    hooks_url: "https://api.github.com/repos/danimydev/auth-microservice/hooks",
    issue_events_url:
      "https://api.github.com/repos/danimydev/auth-microservice/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/danimydev/auth-microservice/events",
    assignees_url:
      "https://api.github.com/repos/danimydev/auth-microservice/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/danimydev/auth-microservice/branches{/branch}",
    tags_url: "https://api.github.com/repos/danimydev/auth-microservice/tags",
    blobs_url:
      "https://api.github.com/repos/danimydev/auth-microservice/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/danimydev/auth-microservice/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/danimydev/auth-microservice/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/danimydev/auth-microservice/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/danimydev/auth-microservice/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/danimydev/auth-microservice/languages",
    stargazers_url:
      "https://api.github.com/repos/danimydev/auth-microservice/stargazers",
    contributors_url:
      "https://api.github.com/repos/danimydev/auth-microservice/contributors",
    subscribers_url:
      "https://api.github.com/repos/danimydev/auth-microservice/subscribers",
    subscription_url:
      "https://api.github.com/repos/danimydev/auth-microservice/subscription",
    commits_url:
      "https://api.github.com/repos/danimydev/auth-microservice/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/danimydev/auth-microservice/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/danimydev/auth-microservice/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/danimydev/auth-microservice/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/danimydev/auth-microservice/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/danimydev/auth-microservice/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/danimydev/auth-microservice/merges",
    archive_url:
      "https://api.github.com/repos/danimydev/auth-microservice/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/danimydev/auth-microservice/downloads",
    issues_url:
      "https://api.github.com/repos/danimydev/auth-microservice/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/danimydev/auth-microservice/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/danimydev/auth-microservice/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/danimydev/auth-microservice/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/danimydev/auth-microservice/labels{/name}",
    releases_url:
      "https://api.github.com/repos/danimydev/auth-microservice/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/danimydev/auth-microservice/deployments",
    created_at: "2022-03-28T02:47:46Z",
    updated_at: "2022-09-08T16:51:17Z",
    pushed_at: "2023-02-24T19:35:08Z",
    git_url: "git://github.com/danimydev/auth-microservice.git",
    ssh_url: "git@github.com:danimydev/auth-microservice.git",
    clone_url: "https://github.com/danimydev/auth-microservice.git",
    svn_url: "https://github.com/danimydev/auth-microservice",
    homepage: "",
    size: 167,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["jwt-authentication", "microservice", "nodejs", "oauth2"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
  {
    id: 464038133,
    node_id: "R_kgDOG6io9Q",
    name: "bug-tracker-api",
    full_name: "danimydev/bug-tracker-api",
    private: false,
    owner: {
      login: "danimydev",
      id: 31113489,
      node_id: "MDQ6VXNlcjMxMTEzNDg5",
      avatar_url: "https://avatars.githubusercontent.com/u/31113489?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/danimydev",
      html_url: "https://github.com/danimydev",
      followers_url: "https://api.github.com/users/danimydev/followers",
      following_url:
        "https://api.github.com/users/danimydev/following{/other_user}",
      gists_url: "https://api.github.com/users/danimydev/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/danimydev/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/danimydev/subscriptions",
      organizations_url: "https://api.github.com/users/danimydev/orgs",
      repos_url: "https://api.github.com/users/danimydev/repos",
      events_url: "https://api.github.com/users/danimydev/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/danimydev/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/danimydev/bug-tracker-api",
    description: "clean api for a bug-tracker app with memory based database",
    fork: false,
    url: "https://api.github.com/repos/danimydev/bug-tracker-api",
    forks_url: "https://api.github.com/repos/danimydev/bug-tracker-api/forks",
    keys_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/danimydev/bug-tracker-api/teams",
    hooks_url: "https://api.github.com/repos/danimydev/bug-tracker-api/hooks",
    issue_events_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/issues/events{/number}",
    events_url: "https://api.github.com/repos/danimydev/bug-tracker-api/events",
    assignees_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/branches{/branch}",
    tags_url: "https://api.github.com/repos/danimydev/bug-tracker-api/tags",
    blobs_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/languages",
    stargazers_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/stargazers",
    contributors_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/contributors",
    subscribers_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/subscribers",
    subscription_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/subscription",
    commits_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/danimydev/bug-tracker-api/merges",
    archive_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/downloads",
    issues_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/labels{/name}",
    releases_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/danimydev/bug-tracker-api/deployments",
    created_at: "2022-02-27T04:36:25Z",
    updated_at: "2022-02-27T05:13:35Z",
    pushed_at: "2022-04-10T22:11:22Z",
    git_url: "git://github.com/danimydev/bug-tracker-api.git",
    ssh_url: "git@github.com:danimydev/bug-tracker-api.git",
    clone_url: "https://github.com/danimydev/bug-tracker-api.git",
    svn_url: "https://github.com/danimydev/bug-tracker-api",
    homepage: null,
    size: 127,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
  },
  {
    id: 475710816,
    node_id: "R_kgDOHFrFYA",
    name: "docker-nodejs",
    full_name: "danimydev/docker-nodejs",
    private: false,
    owner: {
      login: "danimydev",
      id: 31113489,
      node_id: "MDQ6VXNlcjMxMTEzNDg5",
      avatar_url: "https://avatars.githubusercontent.com/u/31113489?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/danimydev",
      html_url: "https://github.com/danimydev",
      followers_url: "https://api.github.com/users/danimydev/followers",
      following_url:
        "https://api.github.com/users/danimydev/following{/other_user}",
      gists_url: "https://api.github.com/users/danimydev/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/danimydev/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/danimydev/subscriptions",
      organizations_url: "https://api.github.com/users/danimydev/orgs",
      repos_url: "https://api.github.com/users/danimydev/repos",
      events_url: "https://api.github.com/users/danimydev/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/danimydev/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/danimydev/docker-nodejs",
    description:
      "Best docker and docker-compose container architecture for node js",
    fork: false,
    url: "https://api.github.com/repos/danimydev/docker-nodejs",
    forks_url: "https://api.github.com/repos/danimydev/docker-nodejs/forks",
    keys_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/danimydev/docker-nodejs/teams",
    hooks_url: "https://api.github.com/repos/danimydev/docker-nodejs/hooks",
    issue_events_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/issues/events{/number}",
    events_url: "https://api.github.com/repos/danimydev/docker-nodejs/events",
    assignees_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/branches{/branch}",
    tags_url: "https://api.github.com/repos/danimydev/docker-nodejs/tags",
    blobs_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/languages",
    stargazers_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/stargazers",
    contributors_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/contributors",
    subscribers_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/subscribers",
    subscription_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/subscription",
    commits_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/danimydev/docker-nodejs/merges",
    archive_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/downloads",
    issues_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/labels{/name}",
    releases_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/danimydev/docker-nodejs/deployments",
    created_at: "2022-03-30T03:53:17Z",
    updated_at: "2022-10-25T16:05:14Z",
    pushed_at: "2022-10-25T16:12:08Z",
    git_url: "git://github.com/danimydev/docker-nodejs.git",
    ssh_url: "git@github.com:danimydev/docker-nodejs.git",
    clone_url: "https://github.com/danimydev/docker-nodejs.git",
    svn_url: "https://github.com/danimydev/docker-nodejs",
    homepage: null,
    size: 17,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Dockerfile",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
  },
  {
    id: 458666581,
    node_id: "R_kgDOG1ayVQ",
    name: "library-api",
    full_name: "danimydev/library-api",
    private: false,
    owner: {
      login: "danimydev",
      id: 31113489,
      node_id: "MDQ6VXNlcjMxMTEzNDg5",
      avatar_url: "https://avatars.githubusercontent.com/u/31113489?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/danimydev",
      html_url: "https://github.com/danimydev",
      followers_url: "https://api.github.com/users/danimydev/followers",
      following_url:
        "https://api.github.com/users/danimydev/following{/other_user}",
      gists_url: "https://api.github.com/users/danimydev/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/danimydev/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/danimydev/subscriptions",
      organizations_url: "https://api.github.com/users/danimydev/orgs",
      repos_url: "https://api.github.com/users/danimydev/repos",
      events_url: "https://api.github.com/users/danimydev/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/danimydev/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/danimydev/library-api",
    description: "An API using clean arquitecture approach and TDD",
    fork: false,
    url: "https://api.github.com/repos/danimydev/library-api",
    forks_url: "https://api.github.com/repos/danimydev/library-api/forks",
    keys_url:
      "https://api.github.com/repos/danimydev/library-api/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/danimydev/library-api/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/danimydev/library-api/teams",
    hooks_url: "https://api.github.com/repos/danimydev/library-api/hooks",
    issue_events_url:
      "https://api.github.com/repos/danimydev/library-api/issues/events{/number}",
    events_url: "https://api.github.com/repos/danimydev/library-api/events",
    assignees_url:
      "https://api.github.com/repos/danimydev/library-api/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/danimydev/library-api/branches{/branch}",
    tags_url: "https://api.github.com/repos/danimydev/library-api/tags",
    blobs_url:
      "https://api.github.com/repos/danimydev/library-api/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/danimydev/library-api/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/danimydev/library-api/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/danimydev/library-api/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/danimydev/library-api/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/danimydev/library-api/languages",
    stargazers_url:
      "https://api.github.com/repos/danimydev/library-api/stargazers",
    contributors_url:
      "https://api.github.com/repos/danimydev/library-api/contributors",
    subscribers_url:
      "https://api.github.com/repos/danimydev/library-api/subscribers",
    subscription_url:
      "https://api.github.com/repos/danimydev/library-api/subscription",
    commits_url:
      "https://api.github.com/repos/danimydev/library-api/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/danimydev/library-api/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/danimydev/library-api/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/danimydev/library-api/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/danimydev/library-api/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/danimydev/library-api/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/danimydev/library-api/merges",
    archive_url:
      "https://api.github.com/repos/danimydev/library-api/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/danimydev/library-api/downloads",
    issues_url:
      "https://api.github.com/repos/danimydev/library-api/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/danimydev/library-api/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/danimydev/library-api/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/danimydev/library-api/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/danimydev/library-api/labels{/name}",
    releases_url:
      "https://api.github.com/repos/danimydev/library-api/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/danimydev/library-api/deployments",
    created_at: "2022-02-12T23:47:29Z",
    updated_at: "2022-02-12T23:51:56Z",
    pushed_at: "2022-03-25T15:12:27Z",
    git_url: "git://github.com/danimydev/library-api.git",
    ssh_url: "git@github.com:danimydev/library-api.git",
    clone_url: "https://github.com/danimydev/library-api.git",
    svn_url: "https://github.com/danimydev/library-api",
    homepage: null,
    size: 393,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "unlicense",
      name: "The Unlicense",
      spdx_id: "Unlicense",
      url: "https://api.github.com/licenses/unlicense",
      node_id: "MDc6TGljZW5zZTE1",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
  },
  {
    id: 314722164,
    node_id: "MDEwOlJlcG9zaXRvcnkzMTQ3MjIxNjQ=",
    name: "python-sockets",
    full_name: "danimydev/python-sockets",
    private: false,
    owner: {
      login: "danimydev",
      id: 31113489,
      node_id: "MDQ6VXNlcjMxMTEzNDg5",
      avatar_url: "https://avatars.githubusercontent.com/u/31113489?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/danimydev",
      html_url: "https://github.com/danimydev",
      followers_url: "https://api.github.com/users/danimydev/followers",
      following_url:
        "https://api.github.com/users/danimydev/following{/other_user}",
      gists_url: "https://api.github.com/users/danimydev/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/danimydev/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/danimydev/subscriptions",
      organizations_url: "https://api.github.com/users/danimydev/orgs",
      repos_url: "https://api.github.com/users/danimydev/repos",
      events_url: "https://api.github.com/users/danimydev/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/danimydev/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/danimydev/python-sockets",
    description:
      "Python server-client application using sockets, threads and so libraries",
    fork: false,
    url: "https://api.github.com/repos/danimydev/python-sockets",
    forks_url: "https://api.github.com/repos/danimydev/python-sockets/forks",
    keys_url:
      "https://api.github.com/repos/danimydev/python-sockets/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/danimydev/python-sockets/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/danimydev/python-sockets/teams",
    hooks_url: "https://api.github.com/repos/danimydev/python-sockets/hooks",
    issue_events_url:
      "https://api.github.com/repos/danimydev/python-sockets/issues/events{/number}",
    events_url: "https://api.github.com/repos/danimydev/python-sockets/events",
    assignees_url:
      "https://api.github.com/repos/danimydev/python-sockets/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/danimydev/python-sockets/branches{/branch}",
    tags_url: "https://api.github.com/repos/danimydev/python-sockets/tags",
    blobs_url:
      "https://api.github.com/repos/danimydev/python-sockets/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/danimydev/python-sockets/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/danimydev/python-sockets/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/danimydev/python-sockets/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/danimydev/python-sockets/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/danimydev/python-sockets/languages",
    stargazers_url:
      "https://api.github.com/repos/danimydev/python-sockets/stargazers",
    contributors_url:
      "https://api.github.com/repos/danimydev/python-sockets/contributors",
    subscribers_url:
      "https://api.github.com/repos/danimydev/python-sockets/subscribers",
    subscription_url:
      "https://api.github.com/repos/danimydev/python-sockets/subscription",
    commits_url:
      "https://api.github.com/repos/danimydev/python-sockets/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/danimydev/python-sockets/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/danimydev/python-sockets/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/danimydev/python-sockets/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/danimydev/python-sockets/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/danimydev/python-sockets/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/danimydev/python-sockets/merges",
    archive_url:
      "https://api.github.com/repos/danimydev/python-sockets/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/danimydev/python-sockets/downloads",
    issues_url:
      "https://api.github.com/repos/danimydev/python-sockets/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/danimydev/python-sockets/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/danimydev/python-sockets/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/danimydev/python-sockets/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/danimydev/python-sockets/labels{/name}",
    releases_url:
      "https://api.github.com/repos/danimydev/python-sockets/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/danimydev/python-sockets/deployments",
    created_at: "2020-11-21T03:11:43Z",
    updated_at: "2022-09-17T00:31:46Z",
    pushed_at: "2022-09-17T00:31:42Z",
    git_url: "git://github.com/danimydev/python-sockets.git",
    ssh_url: "git@github.com:danimydev/python-sockets.git",
    clone_url: "https://github.com/danimydev/python-sockets.git",
    svn_url: "https://github.com/danimydev/python-sockets",
    homepage: "",
    size: 181,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Python",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["mpi", "pillow", "python", "sockets", "threads"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
  },
  {
    id: 420283515,
    node_id: "R_kgDOGQ0Eew",
    name: "tensorflow-microservice",
    full_name: "danimydev/tensorflow-microservice",
    private: false,
    owner: {
      login: "danimydev",
      id: 31113489,
      node_id: "MDQ6VXNlcjMxMTEzNDg5",
      avatar_url: "https://avatars.githubusercontent.com/u/31113489?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/danimydev",
      html_url: "https://github.com/danimydev",
      followers_url: "https://api.github.com/users/danimydev/followers",
      following_url:
        "https://api.github.com/users/danimydev/following{/other_user}",
      gists_url: "https://api.github.com/users/danimydev/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/danimydev/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/danimydev/subscriptions",
      organizations_url: "https://api.github.com/users/danimydev/orgs",
      repos_url: "https://api.github.com/users/danimydev/repos",
      events_url: "https://api.github.com/users/danimydev/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/danimydev/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/danimydev/tensorflow-microservice",
    description:
      "Express microservice that implements image classification using tensorflow to get predictions",
    fork: false,
    url: "https://api.github.com/repos/danimydev/tensorflow-microservice",
    forks_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/forks",
    keys_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/teams",
    hooks_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/hooks",
    issue_events_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/events",
    assignees_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/tags",
    blobs_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/languages",
    stargazers_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/stargazers",
    contributors_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/contributors",
    subscribers_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/subscribers",
    subscription_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/subscription",
    commits_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/merges",
    archive_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/downloads",
    issues_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/notifications{?since,all,participatin...",
    labels_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/labels{/name}",
    releases_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/danimydev/tensorflow-microservice/deployments",
    created_at: "2021-10-23T01:16:44Z",
    updated_at: "2022-08-19T20:00:31Z",
    pushed_at: "2023-02-16T13:21:35Z",
    git_url: "git://github.com/danimydev/tensorflow-microservice.git",
    ssh_url: "git@github.com:danimydev/tensorflow-microservice.git",
    clone_url: "https://github.com/danimydev/tensorflow-microservice.git",
    svn_url: "https://github.com/danimydev/tensorflow-microservice",
    homepage: "",
    size: 47,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "express",
      "image-classification",
      "microservice",
      "nodejs",
      "tensorflow",
    ],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
  {
    id: 602793954,
    node_id: "R_kgDOI-3n4g",
    name: "weather-js",
    full_name: "danimydev/weather-js",
    private: false,
    owner: {
      login: "danimydev",
      id: 31113489,
      node_id: "MDQ6VXNlcjMxMTEzNDg5",
      avatar_url: "https://avatars.githubusercontent.com/u/31113489?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/danimydev",
      html_url: "https://github.com/danimydev",
      followers_url: "https://api.github.com/users/danimydev/followers",
      following_url:
        "https://api.github.com/users/danimydev/following{/other_user}",
      gists_url: "https://api.github.com/users/danimydev/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/danimydev/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/danimydev/subscriptions",
      organizations_url: "https://api.github.com/users/danimydev/orgs",
      repos_url: "https://api.github.com/users/danimydev/repos",
      events_url: "https://api.github.com/users/danimydev/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/danimydev/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/danimydev/weather-js",
    description: "Weather API wrapper",
    fork: false,
    url: "https://api.github.com/repos/danimydev/weather-js",
    forks_url: "https://api.github.com/repos/danimydev/weather-js/forks",
    keys_url: "https://api.github.com/repos/danimydev/weather-js/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/danimydev/weather-js/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/danimydev/weather-js/teams",
    hooks_url: "https://api.github.com/repos/danimydev/weather-js/hooks",
    issue_events_url:
      "https://api.github.com/repos/danimydev/weather-js/issues/events{/number}",
    events_url: "https://api.github.com/repos/danimydev/weather-js/events",
    assignees_url:
      "https://api.github.com/repos/danimydev/weather-js/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/danimydev/weather-js/branches{/branch}",
    tags_url: "https://api.github.com/repos/danimydev/weather-js/tags",
    blobs_url:
      "https://api.github.com/repos/danimydev/weather-js/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/danimydev/weather-js/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/danimydev/weather-js/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/danimydev/weather-js/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/danimydev/weather-js/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/danimydev/weather-js/languages",
    stargazers_url:
      "https://api.github.com/repos/danimydev/weather-js/stargazers",
    contributors_url:
      "https://api.github.com/repos/danimydev/weather-js/contributors",
    subscribers_url:
      "https://api.github.com/repos/danimydev/weather-js/subscribers",
    subscription_url:
      "https://api.github.com/repos/danimydev/weather-js/subscription",
    commits_url:
      "https://api.github.com/repos/danimydev/weather-js/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/danimydev/weather-js/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/danimydev/weather-js/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/danimydev/weather-js/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/danimydev/weather-js/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/danimydev/weather-js/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/danimydev/weather-js/merges",
    archive_url:
      "https://api.github.com/repos/danimydev/weather-js/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/danimydev/weather-js/downloads",
    issues_url:
      "https://api.github.com/repos/danimydev/weather-js/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/danimydev/weather-js/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/danimydev/weather-js/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/danimydev/weather-js/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/danimydev/weather-js/labels{/name}",
    releases_url:
      "https://api.github.com/repos/danimydev/weather-js/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/danimydev/weather-js/deployments",
    created_at: "2023-02-17T00:27:41Z",
    updated_at: "2023-02-17T06:03:47Z",
    pushed_at: "2023-02-17T06:04:05Z",
    git_url: "git://github.com/danimydev/weather-js.git",
    ssh_url: "git@github.com:danimydev/weather-js.git",
    clone_url: "https://github.com/danimydev/weather-js.git",
    svn_url: "https://github.com/danimydev/weather-js",
    homepage: null,
    size: 11,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mpl-2.0",
      name: "Mozilla Public License 2.0",
      spdx_id: "MPL-2.0",
      url: "https://api.github.com/licenses/mpl-2.0",
      node_id: "MDc6TGljZW5zZTE0",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
  },
  {
    id: 600228639,
    node_id: "R_kgDOI8bDHw",
    name: "wolfy",
    full_name: "danimydev/wolfy",
    private: false,
    owner: {
      login: "danimydev",
      id: 31113489,
      node_id: "MDQ6VXNlcjMxMTEzNDg5",
      avatar_url: "https://avatars.githubusercontent.com/u/31113489?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/danimydev",
      html_url: "https://github.com/danimydev",
      followers_url: "https://api.github.com/users/danimydev/followers",
      following_url:
        "https://api.github.com/users/danimydev/following{/other_user}",
      gists_url: "https://api.github.com/users/danimydev/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/danimydev/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/danimydev/subscriptions",
      organizations_url: "https://api.github.com/users/danimydev/orgs",
      repos_url: "https://api.github.com/users/danimydev/repos",
      events_url: "https://api.github.com/users/danimydev/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/danimydev/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/danimydev/wolfy",
    description:
      "Wolfram Alpha API fully covered wrapper built with TypeScript.",
    fork: false,
    url: "https://api.github.com/repos/danimydev/wolfy",
    forks_url: "https://api.github.com/repos/danimydev/wolfy/forks",
    keys_url: "https://api.github.com/repos/danimydev/wolfy/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/danimydev/wolfy/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/danimydev/wolfy/teams",
    hooks_url: "https://api.github.com/repos/danimydev/wolfy/hooks",
    issue_events_url:
      "https://api.github.com/repos/danimydev/wolfy/issues/events{/number}",
    events_url: "https://api.github.com/repos/danimydev/wolfy/events",
    assignees_url:
      "https://api.github.com/repos/danimydev/wolfy/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/danimydev/wolfy/branches{/branch}",
    tags_url: "https://api.github.com/repos/danimydev/wolfy/tags",
    blobs_url: "https://api.github.com/repos/danimydev/wolfy/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/danimydev/wolfy/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/danimydev/wolfy/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/danimydev/wolfy/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/danimydev/wolfy/statuses/{sha}",
    languages_url: "https://api.github.com/repos/danimydev/wolfy/languages",
    stargazers_url: "https://api.github.com/repos/danimydev/wolfy/stargazers",
    contributors_url:
      "https://api.github.com/repos/danimydev/wolfy/contributors",
    subscribers_url: "https://api.github.com/repos/danimydev/wolfy/subscribers",
    subscription_url:
      "https://api.github.com/repos/danimydev/wolfy/subscription",
    commits_url: "https://api.github.com/repos/danimydev/wolfy/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/danimydev/wolfy/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/danimydev/wolfy/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/danimydev/wolfy/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/danimydev/wolfy/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/danimydev/wolfy/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/danimydev/wolfy/merges",
    archive_url:
      "https://api.github.com/repos/danimydev/wolfy/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/danimydev/wolfy/downloads",
    issues_url: "https://api.github.com/repos/danimydev/wolfy/issues{/number}",
    pulls_url: "https://api.github.com/repos/danimydev/wolfy/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/danimydev/wolfy/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/danimydev/wolfy/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/danimydev/wolfy/labels{/name}",
    releases_url: "https://api.github.com/repos/danimydev/wolfy/releases{/id}",
    deployments_url: "https://api.github.com/repos/danimydev/wolfy/deployments",
    created_at: "2023-02-10T21:55:06Z",
    updated_at: "2023-02-22T16:19:26Z",
    pushed_at: "2023-02-16T20:41:50Z",
    git_url: "git://github.com/danimydev/wolfy.git",
    ssh_url: "git@github.com:danimydev/wolfy.git",
    clone_url: "https://github.com/danimydev/wolfy.git",
    svn_url: "https://github.com/danimydev/wolfy",
    homepage: "",
    size: 35,
    stargazers_count: 3,
    watchers_count: 3,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mpl-2.0",
      name: "Mozilla Public License 2.0",
      spdx_id: "MPL-2.0",
      url: "https://api.github.com/licenses/mpl-2.0",
      node_id: "MDc6TGljZW5zZTE0",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["api-wrapper", "wolfram-alpha"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 3,
    default_branch: "main",
  },
  {
    id: 474181656,
    node_id: "R_kgDOHENwGA",
    name: "wolfy-discord-bot",
    full_name: "danimydev/wolfy-discord-bot",
    private: false,
    owner: {
      login: "danimydev",
      id: 31113489,
      node_id: "MDQ6VXNlcjMxMTEzNDg5",
      avatar_url: "https://avatars.githubusercontent.com/u/31113489?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/danimydev",
      html_url: "https://github.com/danimydev",
      followers_url: "https://api.github.com/users/danimydev/followers",
      following_url:
        "https://api.github.com/users/danimydev/following{/other_user}",
      gists_url: "https://api.github.com/users/danimydev/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/danimydev/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/danimydev/subscriptions",
      organizations_url: "https://api.github.com/users/danimydev/orgs",
      repos_url: "https://api.github.com/users/danimydev/repos",
      events_url: "https://api.github.com/users/danimydev/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/danimydev/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/danimydev/wolfy-discord-bot",
    description: "Node JS bot to make request to Wolfram Alpha API",
    fork: false,
    url: "https://api.github.com/repos/danimydev/wolfy-discord-bot",
    forks_url: "https://api.github.com/repos/danimydev/wolfy-discord-bot/forks",
    keys_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/danimydev/wolfy-discord-bot/teams",
    hooks_url: "https://api.github.com/repos/danimydev/wolfy-discord-bot/hooks",
    issue_events_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/events",
    assignees_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/branches{/branch}",
    tags_url: "https://api.github.com/repos/danimydev/wolfy-discord-bot/tags",
    blobs_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/languages",
    stargazers_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/stargazers",
    contributors_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/contributors",
    subscribers_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/subscribers",
    subscription_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/subscription",
    commits_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/merges",
    archive_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/downloads",
    issues_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/labels{/name}",
    releases_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/danimydev/wolfy-discord-bot/deployments",
    created_at: "2022-03-25T22:32:52Z",
    updated_at: "2023-02-18T00:28:47Z",
    pushed_at: "2023-02-18T00:28:43Z",
    git_url: "git://github.com/danimydev/wolfy-discord-bot.git",
    ssh_url: "git@github.com:danimydev/wolfy-discord-bot.git",
    clone_url: "https://github.com/danimydev/wolfy-discord-bot.git",
    svn_url: "https://github.com/danimydev/wolfy-discord-bot",
    homepage: "",
    size: 217,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mpl-2.0",
      name: "Mozilla Public License 2.0",
      spdx_id: "MPL-2.0",
      url: "https://api.github.com/licenses/mpl-2.0",
      node_id: "MDc6TGljZW5zZTE0",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["bot", "discord-js", "nodejs", "typescript", "wolfram-alpha"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
];

export const gitHubRepos: GitHubRepo[] = GITHUB_REPOSITORIES.map((repo) => {
  return {
    clone_url: repo.clone_url,
    created_at: repo.created_at,
    deployments_url: repo.deployments_url,
    description: repo.description,
    full_name: repo.full_name,
    git_url: repo.git_url,
    homepage: repo.homepage,
    html_url: repo.html_url,
    id: repo.id,
    language: repo.language,
    languages_url: repo.languages_url,
    license: repo.license,
    name: repo.name,
    owner: repo.owner,
    pushed_at: repo.pushed_at,
    ssh_url: repo.ssh_url,
    svn_url: repo.svn_url,
    topics: repo.topics,
    updated_at: repo.updated_at,
  };
});

export const LANGUAGE_CLASSES = new Map()
  .set("javascript", "bg-[#f7ec11]")
  .set("typescript", "bg-[#1c8eff]")
  .set("python", "bg-[#1ed652]")
  .set("dockerfile", "bg-[#13458a]");
