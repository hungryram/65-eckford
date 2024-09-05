import { defineType } from "sanity";

export default defineType({
    title: 'Line',
    name: 'line',
    type: 'object',
    fields: [
        {
            title: 'Enable Horizontal Line',
            name: 'lines',
            type: 'string',
            options: {
                list: [
                    { title: 'Horizontal', value: 'horizontal' },
                    { title: 'Vertical', value: 'vertical' },
                ]
            }
        },
    ]
})