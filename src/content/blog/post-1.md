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
<picture class="responsive-picture">
  <source media="(min-width: 1200px)"
          type="image/jxl"
          sizes="40vw"
          srcset="https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,dpr_1.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.jxl 250w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,dpr_2.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.jxl 500w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,dpr_1.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.jxl 2143w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,dpr_2.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.jxl 4286w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,dpr_1.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.jxl 2150w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,dpr_2.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.jxl 4300w">
  <source media="(min-width: 1200px)"
          type="image/avif"
          sizes="40vw"
          srcset="https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,dpr_1.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.avif 250w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,dpr_2.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.avif 500w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,dpr_1.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.avif 2143w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,dpr_2.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.avif 4286w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,dpr_1.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.avif 2150w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,dpr_2.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.avif 4300w">
  <source media="(min-width: 1200px)"
          type="image/webp"
          sizes="40vw"
          srcset="https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,dpr_1.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.webp 250w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,dpr_2.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.webp 500w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,dpr_1.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.webp 2143w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,dpr_2.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.webp 4286w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,dpr_1.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.webp 2150w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,dpr_2.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.webp 4300w">
  <source media="(min-width: 1200px)"
          type="image/jpeg"
          sizes="40vw"
          srcset="https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,dpr_1.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg 250w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,dpr_2.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg 500w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,dpr_1.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg 2143w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,dpr_2.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg 4286w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,dpr_1.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg 2150w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,dpr_2.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg 4300w">
  <source media="(min-width: 992px) and (max-width: 1199px)"
          type="image/jxl"
          sizes="60vw"
          srcset="https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto,dpr_1.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.jxl 250w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto,dpr_2.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.jxl 500w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto,dpr_1.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.jxl 2143w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto,dpr_2.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.jxl 4286w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto,dpr_1.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.jxl 2150w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto,dpr_2.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.jxl 4300w">
  <source media="(min-width: 992px) and (max-width: 1199px)"
          type="image/avif"
          sizes="60vw"
          srcset="https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto,dpr_1.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.avif 250w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto,dpr_2.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.avif 500w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto,dpr_1.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.avif 2143w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto,dpr_2.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.avif 4286w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto,dpr_1.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.avif 2150w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto,dpr_2.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.avif 4300w">
  <source media="(min-width: 992px) and (max-width: 1199px)"
          type="image/webp"
          sizes="60vw"
          srcset="https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto,dpr_1.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.webp 250w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto,dpr_2.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.webp 500w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto,dpr_1.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.webp 2143w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto,dpr_2.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.webp 4286w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto,dpr_1.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.webp 2150w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto,dpr_2.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.webp 4300w">
  <source media="(min-width: 992px) and (max-width: 1199px)"
          type="image/jpeg"
          sizes="60vw"
          srcset="https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto,dpr_1.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg 250w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto,dpr_2.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg 500w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto,dpr_1.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg 2143w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto,dpr_2.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg 4286w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto,dpr_1.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg 2150w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill,g_auto,dpr_2.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg 4300w">
  <source media="(min-width: 768px) and (max-width: 991px)"
          type="image/jxl"
          sizes="70vw"
          srcset="https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto,dpr_1.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.jxl 250w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto,dpr_2.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.jxl 500w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto,dpr_1.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.jxl 2143w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto,dpr_2.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.jxl 4286w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto,dpr_1.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.jxl 2150w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto,dpr_2.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.jxl 4300w">
  <source media="(min-width: 768px) and (max-width: 991px)"
          type="image/avif"
          sizes="70vw"
          srcset="https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto,dpr_1.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.avif 250w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto,dpr_2.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.avif 500w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto,dpr_1.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.avif 2143w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto,dpr_2.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.avif 4286w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto,dpr_1.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.avif 2150w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto,dpr_2.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.avif 4300w">
  <source media="(min-width: 768px) and (max-width: 991px)"
          type="image/webp"
          sizes="70vw"
          srcset="https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto,dpr_1.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.webp 250w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto,dpr_2.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.webp 500w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto,dpr_1.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.webp 2143w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto,dpr_2.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.webp 4286w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto,dpr_1.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.webp 2150w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto,dpr_2.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.webp 4300w">
  <source media="(min-width: 768px) and (max-width: 991px)"
          type="image/jpeg"
          sizes="70vw"
          srcset="https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto,dpr_1.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg 250w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto,dpr_2.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg 500w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto,dpr_1.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg 2143w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto,dpr_2.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg 4286w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto,dpr_1.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg 2150w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill,g_auto,dpr_2.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg 4300w">
  <source media="(max-width: 767px)"
          type="image/jxl"
          sizes="100vw"
          srcset="https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto,dpr_1.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.jxl 250w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto,dpr_2.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.jxl 500w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto,dpr_1.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.jxl 2143w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto,dpr_2.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.jxl 4286w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto,dpr_1.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.jxl 2150w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto,dpr_2.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.jxl 4300w">
  <source media="(max-width: 767px)"
          type="image/avif"
          sizes="100vw"
          srcset="https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto,dpr_1.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.avif 250w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto,dpr_2.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.avif 500w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto,dpr_1.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.avif 2143w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto,dpr_2.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.avif 4286w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto,dpr_1.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.avif 2150w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto,dpr_2.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.avif 4300w">
  <source media="(max-width: 767px)"
          type="image/webp"
          sizes="100vw"
          srcset="https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto,dpr_1.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.webp 250w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto,dpr_2.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.webp 500w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto,dpr_1.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.webp 2143w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto,dpr_2.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.webp 4286w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto,dpr_1.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.webp 2150w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto,dpr_2.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.webp 4300w">
  <source media="(max-width: 767px)"
          type="image/jpeg"
          sizes="100vw"
          srcset="https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto,dpr_1.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg 250w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto,dpr_2.0,c_scale,w_250/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg 500w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto,dpr_1.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg 2143w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto,dpr_2.0,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg 4286w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto,dpr_1.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg 2150w,
          https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill,g_auto,dpr_2.0,c_scale,w_2150/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg 4300w">
  <img src="https://res.cloudinary.com/paulapplegate-com/image/upload/g_auto,c_scale,w_2143/v1750624980/mrieeqgbqrphv4cjbyxh.jpeg" alt="Responsive Image" loading="lazy">
</picture>
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
  <em>Photo by <a href="https://unsplash.com/photos/a-bright-pink-poppy-flower-with-delicate-petals-tDUkm1M0tvg?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash">Lorin Both</a> on</em>
  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M448,230.17V480H0V230.17H141.13V355.09H306.87V230.17ZM306.87,32H141.13V156.91H306.87Z"/>
  </svg>
</p>
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

<img data-src="https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_auto/f_auto,q_auto/v1750561219/yjmppw5bx5jrrurzkphi.jpeg"
class="cld-responsive">
<script type="text/javascript">
  var cl = cloudinary.Cloudinary.new({
    cloud_name: "paulapplegate-com"
  });
  cl.responsive();
</script>
