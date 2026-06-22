import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import DeviceModal from "../components/DeviceModal";

function Dashboard() {
  const navigate = useNavigate();

  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/devices")
      .then((res) => res.json())
      .then((data) => {
        setDevices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const totalDevices = devices.length;

  const activeDevices = devices.filter(
    (device) => device.status === "Online"
  ).length;

  const filteredDevices = devices.filter(
    (device) =>
      device.name.toLowerCase().includes(search.toLowerCase()) ||
      device.location.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        Loading devices...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Devices"
              value={totalDevices}
              color="text-blue-600"
            />

            <StatsCard
              title="Active Devices"
              value={activeDevices}
              color="text-green-600"
            />

            <StatsCard
              title="Interactions Today"
              value="1248"
              color="text-purple-600"
            />

            <StatsCard
              title="Campaign Success"
              value="92%"
              color="text-orange-600"
            />
          </div>

          <div className="flex justify-between mb-6">
            <input
              type="text"
              placeholder="Search device..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-lg px-4 py-2 w-80"
            />

            <button
              onClick={() => navigate("/analytics")}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Analytics
            </button>
          </div>

          <div className="bg-white rounded-xl shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-200">
                <tr>
                  <th className="text-left p-4">Device</th>
                  <th className="text-left p-4">Location</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Last Active</th>
                </tr>
              </thead>

              <tbody>
                {filteredDevices.map((device) => (
                  <tr
                    key={device.id}
                    onClick={() => setSelectedDevice(device)}
                    className="border-b hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="p-4">{device.name}</td>
                    <td className="p-4">{device.location}</td>
                    <td className="p-4">{device.status}</td>
                    <td className="p-4">{device.lastActive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <DeviceModal
        device={selectedDevice}
        onClose={() => setSelectedDevice(null)}
      />
    </div>
  );
}

export default Dashboard;