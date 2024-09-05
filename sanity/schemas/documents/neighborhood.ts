import { defineType } from "sanity";

export default defineType({
    title: 'Neighborhood Map',
    name: 'mapMarker',
    type: 'document',
    fields: [
        {
            title: 'Condo',
            name: 'condo',
            type: 'geopoint'
        },
        {
            title: 'Location',
            name: 'neighborhoods',
            type: 'array',
            of: [
                {
                    title: 'Place',
                    name: 'place',
                    type: 'object',
                    fields: [
                        {
                            title: 'Neighborhood Name',
                            name: 'neighborhoodName',
                            type: 'string',
                        },
                        {
                            title: 'Category',
                            name: 'category',
                            type: 'string',
                            options: {
                                list: [
                                    {title: 'Dining', value: 'Dining'},
                                    {title: 'Transportation', value: 'Transportation'},
                                    {title: 'Shopping', value: 'Shopping'},
                                    {title: 'Recreation', value: 'Recreation'},
                                    {title: 'Fitness', value: 'Fitness'},
                                ]
                            }
                        },
                        // {
                        //     title: 'Is Condo',
                        //     name: 'isCondo',
                        //     type: 'boolean',
                        //     description: 'Enable this if this is the condo'
                        // },
                        {
                            title: 'Location',
                            name: 'location',
                            type: 'geopoint'
                        }
                    ],
                    preview: {
                        select: {
                          title: 'neighborhoodName',
                          subtitle: 'category',
                        },
                      },
                }
            ],
        }
    ],
    preview: {
        select: {
            title: 'nieghborhoods'
        },
        prepare() {
            return {
                title: 'Edit Neighborhood Map'
            }
        }
    }
})