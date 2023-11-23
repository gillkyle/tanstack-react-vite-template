import { Link, Outlet, RootRoute, Route, Router } from "@tanstack/react-router"
import * as React from "react"

const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null // Render nothing in production
  : React.lazy(() =>
      // Lazy load in development
      import("@tanstack/router-devtools").then(res => ({
        default: res.TanStackRouterDevtools,
      }))
    )

// Create a root route
const rootRoute = new RootRoute({
  component: Root,
})

function Root() {
  return (
    <>
      <div>
        <Link to="/">Home</Link> <Link to="/about">About</Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
}

// Create an index route
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
})

function Index() {
  return (
    <div>
      <h3>Welcome Home!</h3>
    </div>
  )
}

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
})

function About() {
  return <div>Hello from About!</div>
}

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])

// Create the router using your route tree
export const router = new Router({ routeTree })

// Register your router for maximum type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
