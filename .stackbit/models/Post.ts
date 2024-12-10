import { Model } from "@stackbit/types";

export const Post: Model = {
  type: "page",
  name: "Post",
  label: "Post",
  urlPath: "/blog/{slug}",
  filePath: "src/content/blog/{slug}.md",
  fields: [
    {
      type: 'slug',
      name: 'slug',
      label: 'Slug',
      description:'The URL path of this page relative to site root. For example, the site root page would be "/", and post page would be "posts/new-post/"',
      required: true,
      hidden: false,
  },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
      default: "This is the Post Title",
    },
    {
      type: "date",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      default:
        "This is the default description for the blog post. Customize it to highlight your content!",
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
  ],
};
