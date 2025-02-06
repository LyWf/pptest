import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Психологические тесты',
    short_name: 'Психологические тесты',
    description: 'Психологические тесты',
    start_url: '/',
    display: 'standalone',
    background_color: '#1976d2',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      { src: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
