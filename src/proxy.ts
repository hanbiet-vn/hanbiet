import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all paths except API, _next, static files, and files with extensions
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
