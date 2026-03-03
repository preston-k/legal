# Legal Site - Next.js

A Next.js application with TypeScript for hosting legal policies and terms.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js app directory with pages
  - `page.tsx` - Home page
  - `policies/` - Policy pages (privacy, tos, cookies)
  - `other/` - Other pages (license, domains)
- `components/` - React components
  - `Nav.tsx` - Navigation component used on policy pages

## Build

To build for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

