import { CollectionConfig } from 'payload/types'
import { AuthenticatedUser } from '../access/AuthenticatedUser'

const Servers: CollectionConfig = {
  slug: 'servers',
  admin: {
    useAsTitle: 'id',
  },
  access: {
    create: AuthenticatedUser,
    read: () => true
  },
  fields: [
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users'
    },
    {
      name: 'name',
      type: 'text',
      required: true
    }
  ],
}

export default Servers
