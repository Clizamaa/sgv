import "./globals.css";


export const metadata = {
  title: "Sistema de Gestion Vehicular",
  description: "Sistema de Gestion Vehicular",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0 min-h-screen bg-[#06193b] bg-[url('/bg-cars.png')] bg-cover bg-center bg-fixed text-white antialiased">
        {children}
      </body>
    </html>
  );
}
