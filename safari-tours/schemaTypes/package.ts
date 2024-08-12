import {defineType} from 'sanity'

export default defineType({
  name: 'package',
  title: 'Package',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Package Title',
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
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'duration',
      title: 'Duration (days)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
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
      name: 'itinerary',
      title: 'Itinerary',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
})
