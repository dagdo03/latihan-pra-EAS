import { CollectionConfig } from 'payload/types'
import { AuthenticatedUser } from '../access/AuthenticatedUser'

const Channels: CollectionConfig = {
  slug: 'channels',
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
      type: 'text',
      required: true
    },
    {
        name: 'channel',
        type: 'text',
        required: false
    }
  ],
}

export default Channels
