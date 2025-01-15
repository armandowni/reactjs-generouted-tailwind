# Template Project Reactjs

This repository provides a template for building React.js applications with Static Site Generation (SSG) capabilities, optimized for high-performance static websites. The project is powered by Vite for lightning-fast build times, with SSG enabled using tools like React Static or file-based route. Ideal for SEO-friendly sites, blogs, or documentation with React components.

## Build Setup

```bash
# Clone the repository
$ yarn install or npm install
# Install dependencies
$ yarn install or npm install
# Serve with hot reload at localhost:3000
$ yarn dev or npm run dev
# Build for production and launch server
$ yarn build
$ yarn preview or npm run preview
```

## For another documentation

&nbsp; [![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
&nbsp; [![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
&nbsp; [![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)
&nbsp; [![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)](https://react-hook-form.com/)
&nbsp; [<img src="https://raw.githubusercontent.com/oedotme/generouted/main/logo.svg" width="30" />](https://www.npmjs.com/package/generouted)
&nbsp; [<img src="https://raw.githubusercontent.com/nextui-org/nextui/main/apps/docs/public/isotipo.png" width="30" />](https://nextui.org/)

## 🛠️ for website example -> http://10.200.207.92:6900

# 📌 How code in this app??

**assets**

This folder is intended for assets such as images, lang, icons in SVG format

- css : for styling component or pages
- icon : for file icon with extension .svg or .png
- img : for file image with extentsion .png , .jpg , or other
- lang : for file language, the example like en.json and id.json

**component**

This folder is only for commonly used components or small components that will be used on several pages

- pages : for file component that used in some pages
- shared : for common component that used in all pages

**pages**

This folder is only for creating a page where the route has been automatically created

- \_app.tsx : the main pages
- 404.tsx : error page
- notAuthorized.tsx : if the pages not have authorize, it will directly to this page

**services**

This folder is only for service hit api to third parties

**types**

This page is only for the types used to define data

**utils**

This page is only for functions that can be used in several places

- [array.ts] : for add, edit, or delete array data. also can check data array is same or not
- [converter.ts] : for convert function day, month, or anything else
- [regex.ts] : for store some regex that use for checking string
