---
type: Post
slug: post-1
title: Building a Blazing-Fast Website with Eleventy and Netlify
date: '2024-12-07'
description: >-
  This is the default description for the blog post. Customize it to highlight
  your content!
image: /images/post-1.jpeg
---
<script src="https://unpkg.com/cloudinary-core@latest/cloudinary-core-shrinkwrap.js" type="text/javascript">
</script>
<img data-src="https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_auto/f_auto,q_auto/v1748952359/priey9txfokhpkfl60le.jpg"
class="cld-responsive">
<script type="text/javascript">
  var cl = cloudinary.Cloudinary.new({
    cloud_name: "paulapplegate-com"
  });
  cl.responsive();
</script>

  
As a UI designer with a passion for minimal and brutalist design, I’m always on the lookout for tools that offer simplicity, speed, and flexibility. Two of my favorite platforms to achieve this are **[Eleventy (11ty)](https://www.11ty.dev/)** and **[Netlify](https://www.netlify.com/)**. Together, they create a seamless workflow for building fast, modern, and ultra-lightweight websites. 

### Why Eleventy?

Eleventy (or 11ty) is a simple yet powerful static site generator. It takes plain text files (like Markdown, HTML, or Nunjucks) and transforms them into a fully static website. It’s minimal, fast, and highly customizable — a perfect fit for those of us who appreciate clean, no-frills design.

<!--more-->

**Key Benefits of Eleventy:**  
- **No Build Bloat:** It doesn't force you into a specific framework, keeping things lean and fast.  
- **Supports Multiple Template Languages:** Markdown, Nunjucks, Liquid, and more — use what you love.  
- **File-based Routing:** Simplicity at its finest — no complex route configurations.  
- **Minimal Tooling:** No big dependencies, just raw speed and flexibility.  

### Why Pair It with Netlify? 
While Eleventy is great for generating sites, Netlify makes **deployment a breeze**. Just link your GitHub repo, and every time you push a new commit, Netlify automatically rebuilds and redeploys the site. No manual deployments, no servers, no headaches.  

**Key Benefits of Netlify:**  
- **CI/CD Built-In:** Push your changes to GitHub, and Netlify handles the rest.  
- **Custom Domains & SSL:** No more worrying about certificates.  
- **Serverless Functions:** Need dynamic functionality? You can extend a static site with Netlify Functions.  
- **Form Handling & Edge Functions:** Build contact forms with no backend code.  

### How to Set It Up  
Here’s a quick step-by-step guide to get started:  

#### 1. Install Eleventy
If you haven’t already, you’ll need Node.js installed. Then, run:  
```bash
npm init -y 
npm install @11ty/eleventy --save-dev
```

To start your development server:  
```bash
npx eleventy --serve
```

#### 2. Create Your First Pages 
Add an `index.md` file with this content:  
```markdown
---
layout: layout.njk
title: Welcome
---

# Welcome to My Eleventy + Netlify Site!  
This site is built with **Eleventy** and deployed with **Netlify**.
```

#### 3. Configure Eleventy
You can customize Eleventy by adding an `.eleventy.js` config file. Here’s a simple setup:  
```js
module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
```

This tells Eleventy to process files in the `src/` folder and output them to a `dist/` folder.  

#### 4. Deploy to Netlify 
1. Push your code to **GitHub, GitLab, or Bitbucket**.  
2. Log in to **Netlify**, create a new project, and link your repo.  
3. Set the build command as:  
   ```bash
   npx eleventy
   ```  
   And the output directory as:  
   ```
   dist
   ```

With this setup, every commit triggers a fresh build, and your site goes live automatically.  

### Example Use Cases
- **Portfolios:** Eleventy’s speed and simplicity make it ideal for minimalist portfolios.  
- **Blogs:** Customizable templates with Markdown support make blog creation effortless.  
- **Landing Pages:** Fast-loading, static pages with no heavy frameworks required.  

### Conclusion 
If you love fast, minimalist design and hate unnecessary complexity, **Eleventy + Netlify** is a dream team. Eleventy gives you the creative freedom to design without limits, and Netlify makes sure it’s always live and fast.  

If you’re a fan of brutalist design, simplicity, and speed (like I am), this setup is a no-brainer. Ready to build your next site? Get started with [Eleventy](https://www.11ty.dev/) and [Netlify](https://www.netlify.com/) today.  

<picture class="responsive-picture">                                                                                                       <source media="(min-width: 1200px)" type="image/jxl" sizes="40vw"                                                                                srcset="                                                                                                                           https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/dpr_1.0/c_scale,w_250/v1750537404/p27hauew5aqbq441quyw.jxl 250w,                                                                                                                                          https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/dpr_2.0/c_scale,w_250/v1750537404/p27hauew5aqbq441quyw.jxl 500w,                                                                                                                                          https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/dpr_1.0/c_scale,w_486/v1750537404/p27hauew5aqbq441quyw.jxl 486w,                                                                                                                                          https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/dpr_2.0/c_scale,w_486/v1750537404/p27hauew5aqbq441quyw.jxl 972w,                                                                                                                                          https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/dpr_1.0/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.jxl 1348w,                                                                                                                                        https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/dpr_2.0/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.jxl 2696w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/dpr_1.0/c_scale,w_2150/v1750537404/p27hauew5aqbq441quyw.jxl 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/dpr_2.0/c_scale,w_2150/v1750537404/p27hauew5aqbq441quyw.jxl 4300w
  "/>                                                                                                                                      <source media="(min-width: 1200px)" type="image/avif" sizes="40vw"
          srcset="                                                                                                                           https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/dpr_1.0/c_scale,w_250/v1750537404/p27hauew5aqbq441quyw.avif 250w,                                                                                                                                         https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/dpr_2.0/c_scale,w_250/v1750537404/p27hauew5aqbq441quyw.avif 500w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/dpr_1.0/c_scale,w_486/v1750537404/p27hauew5aqbq441quyw.avif 486w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/dpr_2.0/c_scale,w_486/v1750537404/p27hauew5aqbq441quyw.avif 972w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/dpr_1.0/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.avif 1348w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/dpr_2.0/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.avif 2696w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/dpr_1.0/c_scale,w_2150/v1750537404/p27hauew5aqbq441quyw.avif 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/dpr_2.0/c_scale,w_2150/v1750537404/p27hauew5aqbq441quyw.avif 4300w
  "/>
  <source media="(min-width: 1200px)" type="image/jpeg" sizes="40vw"                                                                               srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/dpr_1.0/c_scale,w_250/v1750537404/p27hauew5aqbq441quyw.jpeg 250w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/dpr_2.0/c_scale,w_250/v1750537404/p27hauew5aqbq441quyw.jpeg 500w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/dpr_1.0/c_scale,w_486/v1750537404/p27hauew5aqbq441quyw.jpeg 486w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/dpr_2.0/c_scale,w_486/v1750537404/p27hauew5aqbq441quyw.jpeg 972w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/dpr_1.0/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.jpeg 1348w,                                                                                                                                       https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/dpr_2.0/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.jpeg 2696w,                                                                                                                                       https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/dpr_1.0/c_scale,w_2150/v1750537404/p27hauew5aqbq441quyw.jpeg 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/dpr_2.0/c_scale,w_2150/v1750537404/p27hauew5aqbq441quyw.jpeg 4300w
  "/>
  <source media="(min-width: 992px) and (max-width: 1199px)" type="image/jxl" sizes="60vw"
          srcset="                                                                                                                           https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_250/v1750537404/p27hauew5aqbq441quyw.jxl 250w,                                                                                                                    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_250/v1750537404/p27hauew5aqbq441quyw.jxl 500w,                                                                                                                    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_486/v1750537404/p27hauew5aqbq441quyw.jxl 486w,                                                                                                                    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_486/v1750537404/p27hauew5aqbq441quyw.jxl 972w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.jxl 1348w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.jxl 2696w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_2150/v1750537404/p27hauew5aqbq441quyw.jxl 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_2150/v1750537404/p27hauew5aqbq441quyw.jxl 4300w
  "/>                                                                                                                                      <source media="(min-width: 992px) and (max-width: 1199px)" type="image/avif" sizes="60vw"
          srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_250/v1750537404/p27hauew5aqbq441quyw.avif 250w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_250/v1750537404/p27hauew5aqbq441quyw.avif 500w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_486/v1750537404/p27hauew5aqbq441quyw.avif 486w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_486/v1750537404/p27hauew5aqbq441quyw.avif 972w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.avif 1348w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.avif 2696w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_2150/v1750537404/p27hauew5aqbq441quyw.avif 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_2150/v1750537404/p27hauew5aqbq441quyw.avif 4300w
  "/>
  <source media="(min-width: 992px) and (max-width: 1199px)" type="image/jpeg" sizes="60vw"
          srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_250/v1750537404/p27hauew5aqbq441quyw.jpeg 250w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_250/v1750537404/p27hauew5aqbq441quyw.jpeg 500w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_486/v1750537404/p27hauew5aqbq441quyw.jpeg 486w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_486/v1750537404/p27hauew5aqbq441quyw.jpeg 972w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.jpeg 1348w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.jpeg 2696w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_2150/v1750537404/p27hauew5aqbq441quyw.jpeg 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_2150/v1750537404/p27hauew5aqbq441quyw.jpeg 4300w
  "/>
  <source media="(min-width: 768px) and (max-width: 991px)" type="image/jxl" sizes="70vw"
          srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_250/v1750537404/p27hauew5aqbq441quyw.jxl 250w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_250/v1750537404/p27hauew5aqbq441quyw.jxl 500w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_486/v1750537404/p27hauew5aqbq441quyw.jxl 486w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_486/v1750537404/p27hauew5aqbq441quyw.jxl 972w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.jxl 1348w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.jxl 2696w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_2150/v1750537404/p27hauew5aqbq441quyw.jxl 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_2150/v1750537404/p27hauew5aqbq441quyw.jxl 4300w
  "/>
  <source media="(min-width: 768px) and (max-width: 991px)" type="image/avif" sizes="70vw"
          srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_250/v1750537404/p27hauew5aqbq441quyw.avif 250w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_250/v1750537404/p27hauew5aqbq441quyw.avif 500w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_486/v1750537404/p27hauew5aqbq441quyw.avif 486w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_486/v1750537404/p27hauew5aqbq441quyw.avif 972w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.avif 1348w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.avif 2696w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_2150/v1750537404/p27hauew5aqbq441quyw.avif 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_2150/v1750537404/p27hauew5aqbq441quyw.avif 4300w
  "/>
  <source media="(min-width: 768px) and (max-width: 991px)" type="image/jpeg" sizes="70vw"
          srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_250/v1750537404/p27hauew5aqbq441quyw.jpeg 250w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_250/v1750537404/p27hauew5aqbq441quyw.jpeg 500w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_486/v1750537404/p27hauew5aqbq441quyw.jpeg 486w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_486/v1750537404/p27hauew5aqbq441quyw.jpeg 972w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.jpeg 1348w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.jpeg 2696w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_2150/v1750537404/p27hauew5aqbq441quyw.jpeg 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_2150/v1750537404/p27hauew5aqbq441quyw.jpeg 4300w
  "/>
  <source media="(max-width: 767px)" type="image/jxl" sizes="100vw"
          srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_250/v1750537404/p27hauew5aqbq441quyw.jxl 250w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_250/v1750537404/p27hauew5aqbq441quyw.jxl 500w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_486/v1750537404/p27hauew5aqbq441quyw.jxl 486w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_486/v1750537404/p27hauew5aqbq441quyw.jxl 972w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.jxl 1348w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.jxl 2696w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_2150/v1750537404/p27hauew5aqbq441quyw.jxl 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_2150/v1750537404/p27hauew5aqbq441quyw.jxl 4300w
  "/>
  <source media="(max-width: 767px)" type="image/avif" sizes="100vw"
          srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_250/v1750537404/p27hauew5aqbq441quyw.avif 250w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_250/v1750537404/p27hauew5aqbq441quyw.avif 500w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_486/v1750537404/p27hauew5aqbq441quyw.avif 486w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_486/v1750537404/p27hauew5aqbq441quyw.avif 972w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.avif 1348w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.avif 2696w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_2150/v1750537404/p27hauew5aqbq441quyw.avif 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_2150/v1750537404/p27hauew5aqbq441quyw.avif 4300w
  "/>
  <source media="(max-width: 767px)" type="image/jpeg" sizes="100vw"
          srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_250/v1750537404/p27hauew5aqbq441quyw.jpeg 250w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_250/v1750537404/p27hauew5aqbq441quyw.jpeg 500w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_486/v1750537404/p27hauew5aqbq441quyw.jpeg 486w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_486/v1750537404/p27hauew5aqbq441quyw.jpeg 972w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.jpeg 1348w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.jpeg 2696w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto/dpr_1.0/c_fill,g_auto/c_scale,w_2150/v1750537404/p27hauew5aqbq441quyw.jpeg 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto/dpr_2.0/c_fill,g_auto/c_scale,w_2150/v1750537404/p27hauew5aqbq441quyw.jpeg 4300w
  "/>
  <img src="https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/c_scale,w_1348/v1750537404/p27hauew5aqbq441quyw.jpeg" alt="Responsive Image" loading="lazy">
</picture>
