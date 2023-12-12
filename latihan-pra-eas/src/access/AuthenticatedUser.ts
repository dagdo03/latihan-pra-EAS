import { Access } from 'payload/config'

export const AuthenticatedUser: Access = ({ req: { user } }) => {
  // allow authenticated users
  if (!user) {
    return false
  }
  return true
}