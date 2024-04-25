import "./globals.css";


export const metadata = {
  title: "Eco App",
  description: "World tempreture app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
