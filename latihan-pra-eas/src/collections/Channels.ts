import { CollectionConfig } from 'payload/types'

const Channels: CollectionConfig = {
  slug: 'channels',
  admin: {
    useAsTitle: 'id',
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'author',
      type: 'relationship',
      relationTo: "users",
    },
    {
        name: 'channel',
        type: 'text',
        required: false
    }
  ],
}

export default Channels
