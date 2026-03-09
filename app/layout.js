export const metadata = {
  title: "Longevity Brands",
  description: "Longevity Brands acquires and grows standout businesses in med spa, wellness, recovery, and preventive health."
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
