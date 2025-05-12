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
As a UI designer with a passion for minimal and brutalist design, I’m always on the lookout for tools that offer simplicity, speed, and flexibility. Two of my favorite platforms to achieve this are **[Eleventy (11ty)](https://www.11ty.dev/)** and **[Netlify](https://www.netlify.com/)**. Together, they create a seamless workflow for building fast, modern, and ultra-lightweight websites.  

<div class="shadow-wrapper">
<picture class="responsive-picture">
  <source media="(min-width: 1200px)" type="image/jxl" sizes="40vw" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,dpr_auto,g_auto,q_auto,w_auto/c_scale,w_1000/v1747018304/dqiedwgsw7yo8iwkdfre.jxl 1000w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,dpr_auto,g_auto,q_auto,w_auto/dpr_2/c_scale,w_991/v1747018304/dqiedwgsw7yo8iwkdfre.jxl 1982w
  ">
  <source media="(min-width: 1200px)" type="image/avif" sizes="40vw" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,dpr_auto,g_auto,q_auto,w_auto/c_scale,w_1000/v1747018304/dqiedwgsw7yo8iwkdfre.avif 1000w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,dpr_auto,g_auto,q_auto,w_auto/dpr_2/c_scale,w_991/v1747018304/dqiedwgsw7yo8iwkdfre.avif 1982w
  ">
  <source media="(min-width: 1200px)" type="image/jpeg" sizes="40vw" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,dpr_auto,g_auto,q_auto,w_auto/c_scale,w_1000/v1747018304/dqiedwgsw7yo8iwkdfre.jpeg 1000w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,dpr_auto,g_auto,q_auto,w_auto/dpr_2/c_scale,w_991/v1747018304/dqiedwgsw7yo8iwkdfre.jpeg 1982w
  ">
  <source media="(min-width: 992px) and (max-width: 1199px)" type="image/jxl" sizes="60vw" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill/c_limit,dpr_auto,g_auto,q_auto,w_auto/c_scale,w_994/v1747018304/dqiedwgsw7yo8iwkdfre.jxl 994w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill/c_limit,dpr_auto,g_auto,q_auto,w_auto/dpr_2/c_scale,w_915/v1747018304/dqiedwgsw7yo8iwkdfre.jxl 1830w
  ">
  <source media="(min-width: 992px) and (max-width: 1199px)" type="image/avif" sizes="60vw" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill/c_limit,dpr_auto,g_auto,q_auto,w_auto/c_scale,w_994/v1747018304/dqiedwgsw7yo8iwkdfre.avif 994w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill/c_limit,dpr_auto,g_auto,q_auto,w_auto/dpr_2/c_scale,w_915/v1747018304/dqiedwgsw7yo8iwkdfre.avif 1830w
  ">
  <source media="(min-width: 992px) and (max-width: 1199px)" type="image/jpeg" sizes="60vw" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill/c_limit,dpr_auto,g_auto,q_auto,w_auto/c_scale,w_994/v1747018304/dqiedwgsw7yo8iwkdfre.jpeg 994w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill/c_limit,dpr_auto,g_auto,q_auto,w_auto/dpr_2/c_scale,w_915/v1747018304/dqiedwgsw7yo8iwkdfre.jpeg 1830w
  ">
  <source media="(min-width: 768px) and (max-width: 991px)" type="image/jxl" sizes="70vw" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill/c_limit,dpr_auto,g_auto,q_auto,w_auto/c_scale,w_850/v1747018304/dqiedwgsw7yo8iwkdfre.jxl 850w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill/c_limit,dpr_auto,g_auto,q_auto,w_auto/dpr_2/c_scale,w_791/v1747018304/dqiedwgsw7yo8iwkdfre.jxl 1582w
  ">
  <source media="(min-width: 768px) and (max-width: 991px)" type="image/avif" sizes="70vw" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill/c_limit,dpr_auto,g_auto,q_auto,w_auto/c_scale,w_850/v1747018304/dqiedwgsw7yo8iwkdfre.avif 850w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill/c_limit,dpr_auto,g_auto,q_auto,w_auto/dpr_2/c_scale,w_791/v1747018304/dqiedwgsw7yo8iwkdfre.avif 1582w
  ">
  <source media="(min-width: 768px) and (max-width: 991px)" type="image/jpeg" sizes="70vw" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill/c_limit,dpr_auto,g_auto,q_auto,w_auto/c_scale,w_850/v1747018304/dqiedwgsw7yo8iwkdfre.jpeg 850w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill/c_limit,dpr_auto,g_auto,q_auto,w_auto/dpr_2/c_scale,w_791/v1747018304/dqiedwgsw7yo8iwkdfre.jpeg 1582w
  ">
  <source media="(max-width: 767px)" type="image/jxl" sizes="100vw" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill/c_limit,dpr_auto,g_auto,q_auto,w_auto/c_scale,w_306/v1747018304/dqiedwgsw7yo8iwkdfre.jxl 306w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill/c_limit,dpr_auto,g_auto,q_auto,w_auto/dpr_2/c_scale,w_200/v1747018304/dqiedwgsw7yo8iwkdfre.jxl 400w
  ">
  <source media="(max-width: 767px)" type="image/avif" sizes="100vw" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill/c_limit,dpr_auto,g_auto,q_auto,w_auto/c_scale,w_306/v1747018304/dqiedwgsw7yo8iwkdfre.avif 306w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill/c_limit,dpr_auto,g_auto,q_auto,w_auto/dpr_2/c_scale,w_200/v1747018304/dqiedwgsw7yo8iwkdfre.avif 400w
  ">
  <source media="(max-width: 767px)" type="image/jpeg" sizes="100vw" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill/c_limit,dpr_auto,g_auto,q_auto,w_auto/c_scale,w_306/v1747018304/dqiedwgsw7yo8iwkdfre.jpeg 306w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill/c_limit,dpr_auto,g_auto,q_auto,w_auto/dpr_2/c_scale,w_200/v1747018304/dqiedwgsw7yo8iwkdfre.jpeg 400w
  ">
  <img src="https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill/c_fill,g_auto/c_scale,w_200/v1747018304/dqiedwgsw7yo8iwkdfre.jpeg" alt="Responsive Image" loading="lazy">
</picture>
</div>

<img data-src="https://res.cloudinary.com/paulapplegate-com/image/upload/f_auto,q_auto/c_limit,w_auto/dpr_auto/p04sxwky30jsbpoyurmh.jxl"  class="cld-responsive">
<style>
  .credit-container {
    font-size: 10px;
    font-style: italic;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .icon {
    width: 1em;
    height: 1em;
    margin-left: 0.25em;
  }
</style>
<p class="credit-container">
  <em>Photo by <a href="https://unsplash.com/photos/an-orange-cat-sits-on-a-reflective-floor-P_tpT-ee__s?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash">Tianlei Wu</a> on</em>
  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M448,230.17V480H0V230.17H141.13V355.09H306.87V230.17ZM306.87,32H141.13V156.91H306.87Z"/>
  </svg>
</p>


### Why Eleventy?

<img src="/images/city-rain.avif" alt="City Rain">
<style>
  .credit-container {
    font-size: 10px;
    font-style: italic;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .icon {
    width: 1em;
    height: 1em;
    margin-left: 0.25em;
  }
</style>
<p class="credit-container">
  <em>Photo by <a href="https://unsplash.com/photos/a-man-walking-across-a-street-holding-an-umbrella-MYjucYkrTUY?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash">Lerone Pieters</a> on</em>
  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M448,230.17V480H0V230.17H141.13V355.09H306.87V230.17ZM306.87,32H141.13V156.91H306.87Z"/>
  </svg>
</p>


<img src="/images/raonoilwnfthw8k3bkpd.avif" alt="Christmas Dreams">
<style>
  .credit-container {
    font-size: 10px;
    font-style: italic;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .icon {
    width: 1em;
    height: 1em;
    margin-left: 0.25em;
  }
</style>
<p class="credit-container">
  <em>Photo by <a href="https://unsplash.com/photos/a-person-in-a-red-coat-looking-at-a-christmas-tree-VjxDMq6pt8M?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash">Maksym Mazur</a> on</em>
  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M448,230.17V480H0V230.17H141.13V355.09H306.87V230.17ZM306.87,32H141.13V156.91H306.87Z"/>
  </svg>
</p>

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
