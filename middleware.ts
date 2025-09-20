// Use the edge-safe version
export { edgeAuth as middleware } from "@/auth.edge";

export const config = {
  // Apply middleware only to protected routes
  matcher: ["/jobs/post/:path*", "/dashboard/:path*"],
};
