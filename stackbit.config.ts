// stackbit.config.ts
import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";
import { allModels } from "./.stackbit/models";

const contentSource = new GitContentSource({
  rootPath: __dirname,
  contentDirs: ["src/_data", "src/content"],
  models: allModels,
  assetsConfig: {
    referenceType: "static",
    staticDir: "src/content",
    uploadDir: "images",
    publicPath: "/",
  },
});

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "eleventy",
  nodeVersion: "18",
  devCommand: "npx @11ty/eleventy --serve --port {PORT}",
  experimental: {
    ssg: {
      proxyWebsockets: true,
      logPatterns: {
        up: ["Server at"],
      },
    },
  },
  customContentReload: true,
  contentSources: [contentSource],
  sidebarButtons: [
    {
      label: "Site Configuration",
      type: "model",
      icon: "tools",
      modelName: "Config",
      srcProjectId: contentSource.getProjectId(),
      srcType: contentSource.getContentSourceType(),
    },
  ],
});
