import { CollectionConfig } from 'payload/types'

const Chats: CollectionConfig = {
  slug: 'chats',
  auth: true,
  admin: {
    useAsTitle: 'id',
  },
  fields: [
    {
        name: 'message',
        type: 'textarea',
        required: false
    }
  ],
}

export default Chats
