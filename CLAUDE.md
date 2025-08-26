# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Turborepo monorepo for Next.js applications using shadcn/ui components. The project enables rapid development of multiple services sharing common UI components and configurations.

## Development Commands

### Core Commands
```bash
# Install dependencies
pnpm install

# Development servers
pnpm dev:salary        # Run salary-calculator app
pnpm dev:template      # Run app-template (for development)

# Build and deployment
pnpm build             # Build all apps
pnpm build --filter=<app-name>  # Build specific app

# Code quality
pnpm lint              # Lint all apps
pnpm lint:all          # Lint all (alias)
pnpm typecheck         # Type check all apps
pnpm format            # Format code with Prettier
pnpm clean             # Clean build artifacts
```

### Per-App Commands
Each app in `bakridamae/apps/` supports:
```bash
# From app directory
pnpm dev               # Next.js dev server with Turbopack
pnpm build             # Production build
pnpm start             # Start production server
pnpm lint              # ESLint
pnpm lint:fix          # ESLint with auto-fix
pnpm typecheck         # TypeScript check
```

## Architecture

### Monorepo Structure
- **Root**: Contains workspace configuration and main package.json
- **bakridamae/**: Main monorepo directory containing all code
- **bakridamae/apps/**: Individual Next.js applications
- **bakridamae/packages/**: Shared packages and configurations

### Shared Packages
- **@workspace/ui**: shadcn/ui components library
- **@workspace/eslint-config**: Shared ESLint configurations
- **@workspace/typescript-config**: Shared TypeScript configurations

### Technology Stack
- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui component system
- Dark theme support
- Turborepo for build optimization
- pnpm workspaces

## Adding shadcn/ui Components

Add components to the shared UI package:
```bash
pnpm dlx shadcn@latest add <component-name> -c packages/ui
```

Components are stored in `bakridamae/packages/ui/src/components/` and imported as:
```tsx
import { Button } from "@workspace/ui/components/button";
```

## Creating New Apps

Use the automated script:
```bash
./create-new-app.sh <app-name> [app-title] [app-description]
```

This creates a new app in `bakridamae/apps/` based on the app-template boilerplate.

## Package Manager

- Uses pnpm with workspaces
- Requires Node.js >=20
- Workspace dependencies use `workspace:*` protocol

## Current Applications

- **salary-calculator**: Salary calculation service
- **app-template**: Boilerplate for new apps (contains template placeholders like `{{APP_NAME}}`)