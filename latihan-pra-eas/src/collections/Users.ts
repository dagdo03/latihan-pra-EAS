import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: () => true
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: false
    }
  ],
}

export default Users
