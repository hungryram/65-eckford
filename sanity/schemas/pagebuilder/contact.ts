import { defineType } from "sanity";
import { paddingBottom, paddingTop } from "../lib/classes";

export default defineType({
  title: 'Contact Page',
  name: 'contactPage',
  type: 'object',
  groups: [
    { title: 'Content', name: 'content' },
    { title: 'Settings', name: 'settings' },
  ],
  fields: [
    {
      title: 'Content',
      name: 'content',
      type: 'contentEditor'
    },
    {
      title: 'One Column',
      name: 'oneColumn',
      type: 'boolean'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image'
  },
    {
      title: 'Hide Contact Information',
      name: 'hideContact',
      type: 'boolean'
    },
    {
      title: 'Form Builder',
      name: 'formBuilder',
      type: 'formBuilder'
    },
    {
      title: 'Color Options',
      name: 'background',
      type: 'backgroundOptions',
    },
    paddingTop,
    paddingBottom,
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare({ content }) {
      const hasContent = content && content[0]?.children?.length > 0;

      return {
        title: hasContent ? content[0].children[0].text : 'Contact Section',
      };
    },
  },
})