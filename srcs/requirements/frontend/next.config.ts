import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        qualities: [75, 90],
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "8459",
                pathname: "/medias/**",
            }
        ],
        dangerouslyAllowLocalIP: true,
    },
};

export default nextConfig;
