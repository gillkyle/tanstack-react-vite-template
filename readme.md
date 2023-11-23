---
title: TanStack React + Vite
description: The default Vite + React starter, utilizing `Caddy` to serve the built app
tags:
  - node
  - vite
  - react
  - typescript
  - tanstack
---

# TanStack React + Vite Template

This is a lightweight React starter template using [Vite](https://vitejs.dev), [TypeScript](https://www.typescriptlang.org/) with React, and 2 core packages from the TanStack:

1. [TanStack Query](https://tanstack.com/query/latest)
2. [TanStack Router](https://tanstack.com/router/v1)

It is deployed with the memory efficient [Caddy](https://caddyserver.com/) web server, and can be set up on [Railway](https://railway.app) in a single click.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/EF4fed?referralCode=1Apk1r)

## 💁‍♀️ Getting Started

1. install dependencies with `bun install`
2. start local development with `bun run dev`

## ❓ Why `Caddy` for serving the app?

See: https://github.com/brody192/vite-react-template#-why-use-caddy-when-deploying-to-railway

> Caddy is a powerful, enterprise-ready, open source web server, and therefore Caddy is far better suited to serve websites than Vite is, using Caddy will result in much less memory and cpu usage compared to serving with Vite (much lower running costs too).
