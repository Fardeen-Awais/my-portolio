import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware();

export const config = {
  matcher: ['/store', '/(api|trpc)(.*)'],
};