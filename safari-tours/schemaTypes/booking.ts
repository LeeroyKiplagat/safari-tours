import {defineType} from 'sanity'

export default defineType({
  name: 'booking',
  title: 'Booking',
  type: 'document',
  fields: [
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(100),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(15),
    },
    {
      name: 'package',
      title: 'Package',
      type: 'reference',
      to: [{type: 'package'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'specialRequests',
      title: 'Special Requests',
      type: 'text',
    },
  ],
})
