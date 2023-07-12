import { Repository, User } from "./types.ts";

export default class GitHubAPI {
  static readonly baseUrl = "https://api.github.com/users/danimydev";
  static readonly username = "danimydev";

  static async getUser(): Promise<User> {
    return await (await fetch(this.baseUrl))
      .json() as User;
  }

  static async getUserRepositories(): Promise<Repository[]> {
    return await (await fetch(`${this.baseUrl}/repos`))
      .json() as Repository[];
  }

  static async getUserFollowers(): Promise<Repository[]> {
    return await (await fetch(`${this.baseUrl}/followers`))
      .json() as Repository[];
  }
}
