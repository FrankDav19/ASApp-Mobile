export interface IUser {
  name: string,
  image?: string,
  username: string,
  email: string,
  password: string,
  uiType: UiType
}

enum UiType {
  Basic = 0,
  Advanced = 1
}
