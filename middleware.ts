import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: "/"
    }
});

// 保護route, 未登入情況下到matcher路徑會跳至"/"要求登入
export const config = {
    matcher: [
        "/users/:path*",
        "/conversations/:path*"
    ]
};