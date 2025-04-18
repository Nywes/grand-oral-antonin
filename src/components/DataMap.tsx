export default function DataMap() {
  return (
    <div className="border border-blue-500 p-2">
      <div className="flex justify-between items-center mb-2">
        <div className="text-xl font-bold bg-gray-800 px-2">{'CARTE'}</div>
        <div className="text-xl font-bold text-blue-400 px-2">{'DONNÉES'}</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm">
          <div className="text-gray-400">
            {'STATUT: '}
            <span className="text-blue-400">{'ALERTE'}</span>
          </div>
          <div className="text-gray-400">
            {'DATE: '}
            <span className="text-blue-400">{'2077.13.31'}</span>
          </div>
          <div className="text-gray-400">
            {'MODE: '}
            <span className="text-blue-400">{'DELOREAN'}</span>
          </div>
        </div>
        <div className="w-16 h-16 bg-blue-900/40 flex items-center justify-center">
          <div className="text-2xl text-blue-400">{'→'}</div>
        </div>
      </div>
    </div>
  );
}
