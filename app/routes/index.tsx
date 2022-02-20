export default function Index() {
  return (
    <div className="block md:grid md:grid-cols-4 md:gap-6">
      <div className="bg-white drop-shadow-md text-center rounded-lg overflow-hidden mb-10">
        <p className="bg-slate-300 p-2">Total transaksi</p>
        <h1 className="text-5xl p-8">1,4 M</h1>
      </div>
      <div className="bg-white drop-shadow-md text-center rounded-lg overflow-hidden mb-10">
        <p className="bg-slate-300 p-2">Total user</p>
        <h1 className="text-5xl p-8">600 k</h1>
      </div>
      <div className="bg-white drop-shadow-md text-center rounded-lg overflow-hidden mb-10">
        <p className="bg-slate-300 p-2">Total pemesanan</p>
        <h1 className="text-5xl p-8">40,000</h1>
      </div>
      <div className="bg-white drop-shadow-md text-center rounded-lg overflow-hidden mb-10">
        <p className="bg-slate-300 p-2">Total driver</p>
        <h1 className="text-5xl p-8">1.2 k</h1>
      </div>
    </div>
  )
}
