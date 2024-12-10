import { Model } from "@stackbit/types";

export const Hero: Model = {
  type: "object",
  name: "Hero",
  label: "Hero",
  fields: [
    {
      type: "string",
      name: "title",
      default: "This is the Hero Title",
    },
    {
      type: "markdown",
      name: "text",
      default:
        "This is the hero text. Customize it to make a bold statement or introduce your site!",
    },
    {
      type: "object",
      name: "image",
      fields: [
        {
          type: "image",
          name: "src",
          default: "/images/person.jpeg",
        },
        {
          type: "string",
          name: "alt",
          default: "Alt text",
        },
      ],
    },
  ],
};
