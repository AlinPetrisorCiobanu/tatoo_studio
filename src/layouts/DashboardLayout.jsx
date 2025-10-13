import { Outlet, Link } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Mi App</h2>
        <nav className="flex flex-col gap-2">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Perfil</Link>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;