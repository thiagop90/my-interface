export interface APIUser {
  login: string
  name: string
  public_repos: number
  avatar_url: string
  location?: string
}

export interface APIRepo {
  name: string
  owner: {
    login: string
  }
  html_url: string
  language?: string
  description?: string
  homepage?: string
}
