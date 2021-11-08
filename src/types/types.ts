export type PhotosType = {
  small: string
  large: string
}
export type ContactsType = {
  [index:string]: string
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
export type UserProfileType = {
  fullName: string
  userId: number
  aboutMe: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  contacts: ContactsType
  photos: PhotosType
}
export type PostType = {
  id: number,
  message: string
  likesCount: number
}
export type UserType = {
  id: number
  name: string
  status: string | null
  photos: PhotosType
  followed: boolean
}