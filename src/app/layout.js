import "./globals.css";


export const metadata = {
  title: "Sistema de Gestion Vehicular",
  description: "Sistema de Gestion Vehicular",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
