# Social Links Profile

Frontend Mentor challenge built as a static HTML and CSS project.

## Overview

This repository is being used to practice the full workflow around a small frontend project: structure, styling, accessibility, validation, and deployment.

## Stack

- HTML5
- CSS3 with custom properties
- Local Inter font files from `assets/fonts/`
- GitHub Actions for CI
- Vercel for deployment

## What is in place now

- Semantic page structure in `index.html`
- External stylesheet in `style.css`
- Basic hover and focus states for the profile links
- Lightweight HTML validation script in `scripts/check-html.mjs`
- GitHub Actions CI workflow in `.github/workflows/ci.yml`

## Scripts

- `pnpm check` - run the HTML validation script
- `pnpm test` - alias for `pnpm check`

## Deployment

The deployment workflow expects these GitHub secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Once those are set, pushing to `main` will deploy the site to Vercel.

## Learning goals

- Practice semantic HTML
- Practice mobile-first CSS
- Learn hover and focus states
- Understand a simple CI/CD flow
- Learn how static sites connect to Vercel

## Notes

The project is still in progress. The current base is intentionally small so each next change stays easy to understand.