function DeviceModal({ device, onClose }) {
  if (!device) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Device Details</h2>

          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-black"
          >
            ×
          </button>
        </div>

        <div className="space-y-4">

          <Info title="Device" value={device.name} />
          <Info title="Location" value={device.location} />
          <Info title="Status" value={device.status} />
          <Info title="CPU Usage" value={device.cpu} />
          <Info title="Memory" value={device.memory} />
          <Info title="Storage" value={device.storage} />
          <Info title="Temperature" value={device.temperature} />
          <Info title="Firmware" value={device.firmware} />
          <Info title="Last Active" value={device.lastActive} />

        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Close
        </button>

      </div>
    </div>
  );
}

function Info({ title, value }) {
  return (
    <div className="flex justify-between border-b pb-2">
      <span className="font-semibold">{title}</span>
      <span>{value}</span>
    </div>
  );
}

export default DeviceModal;