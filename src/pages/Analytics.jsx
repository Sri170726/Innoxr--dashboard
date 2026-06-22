import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import weeklyData from "../data/analytics";

function Analytics() {
  const navigate = useNavigate();

  const deviceStatus = [
    { name: "Online", value: 3 },
    { name: "Offline", value: 1 },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">

          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">
              Analytics Dashboard
            </h1>

            <button
              onClick={() => navigate("/dashboard")}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Back to Dashboard
            </button>
          </div>

          {/* KPI Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-gray-500">Total Devices</h3>
              <p className="text-4xl font-bold mt-2">4</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-gray-500">Interactions</h3>
              <p className="text-4xl font-bold mt-2 text-purple-600">
                14,521
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-gray-500">Campaign Success</h3>
              <p className="text-4xl font-bold mt-2 text-green-600">
                94%
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-gray-500">Avg Session</h3>
              <p className="text-4xl font-bold mt-2 text-blue-600">
                8m
              </p>
            </div>

          </div>

          {/* Charts */}

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="bg-white rounded-xl shadow p-6">

              <h2 className="text-xl font-semibold mb-5">
                Weekly Interactions
              </h2>

              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="interactions"
                    stroke="#2563eb"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>

            </div>

            <div className="bg-white rounded-xl shadow p-6">

              <h2 className="text-xl font-semibold mb-5">
                Device Status
              </h2>

              <ResponsiveContainer width="100%" height={300}>

                <PieChart>

                  <Pie
                    data={deviceStatus}
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    dataKey="value"
                    label
                  >

                    {deviceStatus.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />
                    ))}

                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Analytics;