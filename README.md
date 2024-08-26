# SC-Coiffure Website

Welcome to the Hair Salon Website project! This is a Nuxt3-based application designed for a hair salon showcasing their services, prices, and contact information.

## Prerequisites

- Node.js (v20 or higher)
- pnpm

## Getting Started

### Clone the Repository

```bash
git clone <this-repo>
cd <this-repo>

```

### Install Dependencies

```bash
pnpm install
```

### Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.


### Build for Production

```bash
pnpm build
```

## Configuration

You can configure the environment variables while copying the `.env.example` file to `.env` and filling the values.

```bash
cp .env.example .env
```


## Project Structure

  - `.github/` - GitHub Actions workflows
  - `assets/` - Currently containing the CSS files
  - `components/` - Vue components used in the project
  - `constants/` - Constants used in the project
  - `content/` - Markdown files for subpages using `@nuxt/content` module
  - `db/` - Database files
  - `layouts/` - Layouts for the pages
  - `pages/` - Pages of the website
  - `public/` - Static files served by the server
  - `server/` - Server-side code, includind api & jobs
  - `types/` - TypeScript types


## License

    This project is licensed under the MIT License. See the LICENSE file for details.