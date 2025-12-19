# Node HTTP Server with Custom Routing

A basic HTTP server built using **pure Node.js**, demonstrating manual routing and HTML page serving without any frameworks like Express.

## Features
- Custom routing using `req.url`
- Serves static HTML pages
- Handles 404 (Page Not Found)
- Uses Node.js core modules only

## Routes
- `/` → Home page  
- `/about` → About page  
- `/contact` → Contact page  

## Tech Stack
- Node.js
- Core modules: `http`, `fs`, `path`

## Getting Started

```bash
npm install
npm run dev
