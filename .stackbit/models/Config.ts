import { Model } from "@stackbit/types";

export const Config: Model = {
  type: "data",
  name: "Config",
  label: "Site Configuration",
  singleInstance: true,
  file: "metadata.json",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Site Title",
      required: true,
      default: "Your Site Title",
    },
    {
      type: "string",
      name: "url",
      label: "Site URL",
      required: true,
      default: "https://example.com/",
    },
    {
      type: "string",
      name: "description",
      label: "Site Description",
      default:
        "This is the default site description. Update it to reflect your site's purpose and content.",
    },
    {
      type: "list",
      name: "navLinks",
      label: "Navigation Links",
      description: "Teh list of navigation links displayed in the header.",
      items: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "label",
            required: true,
            default: "Home",
          },
          {
            type: "string",
            name: "url",
            label: "URL",
            default: "/",
          },
        ],
      },
    },
    {
      type: "markdown",
      name: "copyrightText",
      description: "The text displayed in the footer.",
      default: "© 2024 Your Site Title. All rights reserved.",
    },
    {
      type: "model",
      name: "hero",
      description:
        "The section displayed on the home page above the latest posts.",
      models: ["Hero"],
    },
  ],
};
