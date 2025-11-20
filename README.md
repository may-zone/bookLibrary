# My Library — The Cosy Book Booth

An ambient little book booth built for The Odin Project where you can shelve favorites, peek at their secrets, and keep track of your current reading streak with a single click.

## Features
- Animated cards that flip between mysterious covers and full details with a *Show more* button.
- Quick-add modal lets you log a title, genre, page count, and reading status without leaving the booth.
- Toggle read/not-read by tapping the ✅/❌ badge—perfect for visualizing progress.
- Remove books instantly and keep the collection tidy, no page reloads required.

## Tech Stack
- Vanilla HTML5, CSS3, and JavaScript (no frameworks, no build tools).
- CSS backdrop filters and custom fonts for the dreamy reading-nook vibe.
- `crypto.randomUUID()` for lightweight, collision-free bookkeeping.

## Getting Started
```bash
git clone <this repo>
cd bookLibrary
# use any static server or simply double-click index.html
```
If you have VS Code, `npx serve` or the built-in Live Server extension gives you auto-refresh while you tweak styles.

## Project Structure
- `index.html` – markup for the booth, add-book form, and placeholders.
- `style.css` – vintage library theming, card grid, modal styling, and icon sprites.
- `scripts.js` – plain-JS library logic: data model, render loop, form handling, and UI interactions.
- `images/` & `fonts/` – assets for the background, icons, and typography.

## Roadmap Ideas
1. Persist the bookshelf with `localStorage` so entries survive refreshes.
2. Add sorting/filtering (e.g., unread first, by author).
3. Drop-in cover uploads or fetch covers from Open Library for extra polish.

## License
Distributed under the MIT License. See `LICENSE` for details.
