import {defineType} from 'sanity'

export default defineType({
  name: 'planner',
  title: 'Planner',
  type: 'document',
  fields: [
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'adults',
      title: 'Number of Adults',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'children',
      title: 'Number of Children',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'reference',
      to: [{type: 'package'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'contactDetails',
      title: 'Contact Details',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Full Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'email',
          title: 'Email Address',
          type: 'string',
          validation: (Rule) => Rule.required().email(),
        },
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'specialRequests',
          title: 'Special Requests',
          type: 'text',
          validation: (Rule) => Rule.optional(),
        },
      ],
    },
  ],
})
