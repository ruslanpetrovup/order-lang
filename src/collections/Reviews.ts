import { CollectionConfig } from 'payload'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  access: {
    read: () => true,
    create: ({ req: { user } }) => {
      return Boolean(user)
    },
    update: ({ req: { user } }) => {
      return Boolean(user)
    },
    delete: ({ req: { user } }) => {
      return Boolean(user)
    },
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      required: true,
    },
    {
      name: 'employees',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'position',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
