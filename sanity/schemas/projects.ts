import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
    }),
    defineField({
      title: 'Created At',
      description: 'Used for ordering projects by date.',
      name: 'createdAt',
      type: 'datetime',
    }),
    defineField({
      title: 'Image Url',
      name: 'image',
      type: 'string',
      placeholder: '/images/[image].webp',
    }),
    defineField({
      title: 'Link',
      name: 'link',
      type: 'url',
    }),
    defineField({
      title: 'Repo',
      name: 'repo',
      type: 'url',
    }),
    defineField({
      title: 'Technologies',
      name: 'technologies',
      type: 'array',
      of: [
        {
          title: 'Technologies',
          name: 'technologies',
          type: 'string',
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Created At',
      name: 'createdAtDesc',
      by: [{field: 'createdAt', direction: 'desc'}],
    },
  ],
})
