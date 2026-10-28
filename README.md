# Gloria Viva

An independent, unofficial guide to the cofradías, hermandades and devotions of glory in Toledo, built with React Router.

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading from local TypeScript files
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Content and dates

Cultos and processions are managed in local TypeScript files:

- `app/data/cultos_cards.ts`: celebration cards and their associated months.
- `app/data/cultos_detalle.ts`: detailed celebration programmes.
- `app/data/procesiones_detalle.ts`: procession dates, times and routes.

Dates are maintained manually in these files. Automatic calculation of celebration dates is planned for a later phase, subject to project approval; it is not currently implemented.

The application does not currently use an active Supabase connection.

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

Gloria Viva uses [Tailwind CSS](https://tailwindcss.com/) for styling and the Gloock font, loaded locally from `public/fonts/Gloock.woff2`.

---

Built with ❤️ using React Router.
