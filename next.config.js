/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    }
}

module.exports = nextConfig
