import {defineType} from 'sanity'

export default defineType({
  name: 'safari',
  title: 'Safari',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Safari Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'animals',
      title: 'Animals',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'package'}]}],
    },
  ],
})
