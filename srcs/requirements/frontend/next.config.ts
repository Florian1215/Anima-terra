import type { NextConfig } from "next";

const siteUrl = process.env.SITE_URL ? new URL(process.env.SITE_URL) : null;

const nextConfig: NextConfig = {
    images: {
        qualities: [75, 90],
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "8459",
                pathname: "/medias/**",
            },
            ...(siteUrl ? [{
                protocol: siteUrl.protocol.replace(":", "") as "http" | "https",
                hostname: siteUrl.hostname,
                port: siteUrl.port,
                pathname: "/medias/**",
            }] : []),
        ],
        dangerouslyAllowLocalIP: true,
    },
};

export default nextConfig;
