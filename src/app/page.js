import Link from "next/link";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-[#06193b] bg-[url('/bg-cars.png')] bg-cover bg-center bg-fixed">
      <div className="w-full max-w-md rounded-[2rem] border border-white/20 bg-white/10 p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-white">Gestión de Vehículos</h1>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white/90 mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition flex items-center"
              placeholder="correo@correo.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/90 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-white/80 cursor-pointer">
              <input type="checkbox" className="mr-2 rounded border-white/20 bg-white/5 text-blue-500 focus:ring-blue-500/50" />
              Recordarme
            </label>

          </div>

          <Link href="/panel">
            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-white text-gray-900 font-semibold rounded-xl shadow-[0_4px_14px_0_rgba(255,255,255,0.39)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.23)] hover:bg-opacity-90 transition transform hover:-translate-y-0.5"
            >
              Iniciar Sesión
            </button>
          </Link>
        </form>

        <div className="mt-8 text-center text-sm text-white/70">
          <a href="#" className="text-white/90 hover:text-white transition hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>
    </div>
  );
}
