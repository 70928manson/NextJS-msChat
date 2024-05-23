import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: "/"
    }
});

// 保護route
export const config = {
    matcher: [
        "/users/:path*"
    ]
}