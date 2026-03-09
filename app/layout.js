export const metadata = {
  title: "Longevity Brands",
  description: "Longevity Brands acquires and grows standout businesses in Longevity, Med-Spa, Wellness, Fitness, and Health Optimization."
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
