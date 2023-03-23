import { GitHubRepo } from "./interfaces.tsx";

export default class GitHubAPI {
  static readonly baseUrl = "https://api.github.com/users/danimydev";

  static async getUserRepositories(): Promise<GitHubRepo[]> {
    return await (await fetch(`${this.baseUrl}/repos`)).json() as GitHubRepo[];
  }
}
