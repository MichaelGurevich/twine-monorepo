# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This is a PNPM monorepo using workspace management. The repository structure is:

- `apps/mobile/` - Expo React Native application
- `packages/` - Shared packages (currently empty)
- Root package uses PNPM workspaces with `pnpm-workspace.yaml`

## Package Manager

This repository uses **PNPM** (version 10.8.1) as the package manager. Always use `pnpm` commands instead of `npm` or `yarn`.

## Development Commands

### Mobile App (apps/mobile)

- `pnpm --filter mobile start` - Start Expo development server
- `pnpm --filter mobile android` - Run on Android emulator
- `pnpm --filter mobile ios` - Run on iOS simulator
- `pnpm --filter mobile web` - Run on web
- `pnpm --filter mobile lint` - Run ESLint
- `pnpm --filter mobile reset-project` - Reset to blank project template

### Root Commands

- `pnpm install` - Install all dependencies
- `pnpm lint` - Run ESLint on all packages
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm lint:check` - Run ESLint with zero warnings tolerance
- `pnpm format` - Format all files with Prettier
- `pnpm format:check` - Check if files are properly formatted
- `pnpm type-check` - Run TypeScript type checking across workspaces
- `pnpm dev` - Start mobile development server
- `pnpm build` - Build all packages
- `pnpm clean` - Clean all build outputs

## Technology Stack

### Mobile App

- **Framework**: Expo (~53.0.20) with React Native (0.79.5)
- **Navigation**: Expo Router with file-based routing
- **React**: Version 19.0.0
- **TypeScript**: ~5.8.3
- **Linting**: ESLint with Airbnb TypeScript config + Prettier
- **Formatting**: Prettier with consistent code style

## Architecture Notes

- Mobile app uses Expo Router for file-based routing in the `app/` directory
- The app currently has a basic layout with Stack navigation (`_layout.tsx`)
- Assets are stored in `assets/` directory (fonts, images)
- TypeScript configuration is set up for the mobile app

## Code Quality

The repository uses ESLint with Airbnb standards and Prettier for consistent code formatting:
- **ESLint**: Configured with Airbnb TypeScript rules for React/React Native
- **Prettier**: Handles code formatting with single quotes, trailing commas, etc.
- **EditorConfig**: Ensures consistent editor settings across the team
- **VSCode**: Pre-configured settings for auto-fix on save and formatting

## Development Workflow

1. Install dependencies: `pnpm install`
2. Start mobile development: `pnpm dev` (or `pnpm --filter mobile start`)
3. Before committing:
   - Run `pnpm lint:fix` to fix auto-fixable issues
   - Run `pnpm format` to ensure consistent formatting
   - Run `pnpm type-check` to verify TypeScript types

The mobile app follows standard Expo development patterns with file-based routing and Airbnb coding standards.
