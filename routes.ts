/**
 * AN array of routes accessible to public,
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * These routes will be used for Authentication.
 * These routes will redirect logged in users to /dashboard
 * @type {string[]}
 */
export const authRoutes = ["/signin", "/signup"];

/**
 * The prefix for api authentication routes
 * Routes that starts with this prefix are used for API auth process
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Redirect path after user is logged in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
