import { CollectionConfig } from 'payload/types'

const Chats: CollectionConfig = {
  slug: 'chats',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
        name: 'message',
        type: 'text',
        required: false
    }
  ],
}

export default Chats
