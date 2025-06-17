## Running without Docker

```bash
# With npm
npm install
npm run dev

# With yarn
yarn install
yarn dev

# With pnpm
pnpm install
pnpm dev

# With bun
bun install
bun dev
```

## Running with Docker

You can also run this project using Docker:

```bash
# Build the Docker image
docker build -t my-next-app .

# Run the container
docker run -p 3000:3000 my-next-app
```

Then open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Dependencies

This project uses the following main dependencies:

- **next**: React framework for production, used for server-side rendering and static site generation.
- **react**: JavaScript library for building user interfaces.
- **react-dom**: Serves as the entry point to the DOM and server renderers for React.
- **axios**: Promise-based HTTP client for making API requests.

### Development dependencies:

- **typescript**: Adds TypeScript support for type safety.
- **@types/node**: TypeScript type definitions for Node.js.
- **@types/react** and **@types/react-dom**: TypeScript type definitions for React and ReactDOM.
- **tailwindcss**: Utility-first CSS framework for styling.
- **@tailwindcss/postcss**: Tailwind CSS plugin for PostCSS integration.

You can find all dependencies in the `package.json` file.

# Deploy

[Deployed Website](https://factored-project-opal.vercel.app/)
