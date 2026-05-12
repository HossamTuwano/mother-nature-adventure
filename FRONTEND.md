Implement this UI in the current project using the screenshots and notes I provide as the source of truth.

find the screenshot in the folder docs/references/screenshots

when working on ui always vist docs folder and look for the intended reference that you need to work with

Requirements:

- Reuse the existing design system components and tokens.
- Translate the screenshots into this repo's utilities and component patterns instead of inventing a parallel system.
- Match spacing, layout, hierarchy, and responsive behavior closely.
- Respect the repo's routing, state, and data-fetch patterns.
- Make the page responsive on desktop and mobile.
- If any screenshot detail is ambiguous, choose the simplest implementation that still matches the overall direction and note the assumption briefly.

Validation:

- Compare the finished UI against the provided screenshots for both look and behavior.
- Use $playwright-interactive to check that the UI matches the references and iterate as needed until it does.

# Zustand Rules

- Zustand only for ephemeral UI state
- Never store server state in Zustand
- TanStack Query owns async cache
- Stores must live in `/features/*/stores`
- One domain store per feature
- Persist middleware only for auth/session preferences
