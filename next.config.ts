import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 현재는 plain <img> 를 쓰므로 필수는 아니지만, 추후 next/image 로
  // 전환할 때를 대비해 외부 이미지 호스트(picsum)를 허용해 둔다.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
    ],
  },
};

export default nextConfig;
