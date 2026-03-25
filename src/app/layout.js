import "./globals.css";


export const metadata = {
  title: "Sistema de Gestion Vehicular",
  description: "Sistema de Gestion Vehicular",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0 min-h-screen bg-slate-900 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
