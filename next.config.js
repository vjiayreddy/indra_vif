/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_INITIAL_URL: "/dashboards/crypto",
        NEXT_PUBLIC_STATE_TYPE: "context",
        NEXT_PUBLIC_FILESTACK_KEY: "Ach6MsgoQHGK6tCaq5uJgz",
        NEXT_PUBLIC_LAYOUT: "default",
        NEXT_PUBLIC_MULTILINGUAL: "true",
        NEXT_PUBLIC_PRIMARY_COLOR: "#0A8FDC",
        NEXT_PUBLIC_SECONDARY_COLOR: "#F04F47",
        NEXT_PUBLIC_THEME_MODE: "light",
        NEXT_PUBLIC_NAV_STYLE: "default",
        NEXT_PUBLIC_LAYOUT_TYPE: "full-width",
    },
}

module.exports = nextConfig
