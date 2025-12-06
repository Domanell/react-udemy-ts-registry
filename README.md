# React Package Registry

This is a package registry application built with React, TypeScript, Vite, and RTK Query. It allows users to search for packages, view package details, and explore featured packages. The project demonstrates modern React patterns, efficient data fetching with RTK Query, and a clean, component-based architecture.

## Features

- **Search Packages**: Search for packages using a search input with debounced queries.
- **View Package Details**: See detailed information about each package, including description, version, and more.
- **Featured Packages**: Explore a curated list of featured packages on the home page.
- **API Integration**: Uses RTK Query for efficient data fetching and caching.
- **TypeScript Types**: Strongly typed API responses and components.
- **Modern React**: Built with functional components and hooks.
- **Vite**: Fast development and build tooling.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For static type checking.
- **RTK Query**: For API integration and caching.
- **Vite**: For fast development and build tooling.
- **ESLint**: For code quality and linting.

## Project Structure

- **src/api/queries**: Contains RTK Query endpoints for fetching package data.
- **src/api/types**: TypeScript types for API responses.
- **src/components**: Reusable UI components such as `Header`, `PackageListItem`, and `SearchInput`.
- **src/pages**: Page components for Home, Search, and Details views, each with their own data loaders.
- **src/assets**: Static assets (images, icons, etc.).
- **src/index.css**: Global styles.
- **public/**: Static files served by Vite.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd registry
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the application in your browser at `http://localhost:5173` (default Vite port).

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Runs ESLint to check for code quality.

## License

This project is licensed under the MIT License.
