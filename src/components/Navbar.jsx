import { Bell, UserCircle } from "lucide-react";

function Navbar() {
  return (
    <header className="bg-white shadow flex justify-between items-center px-8 py-4">
      <h2 className="text-2xl font-bold">
        Device Management
      </h2>

      <div className="flex items-center gap-6">
        <Bell className="cursor-pointer" />

        <div className="flex items-center gap-2">
          <UserCircle size={34} />
          <span className="font-medium">
            Admin
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;