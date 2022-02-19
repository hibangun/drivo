import { useLoaderData } from '@remix-run/react'

import { LoaderFunction, Link } from 'remix'
import dayjs from 'dayjs'

type Driver = {
  gender: string
  name: object
  location: object
  email: string
  login: object
  dob: object
  registered: object
  phone: string
  cell: string
  id: string
  picture: object
  nat: string
}

type LoaderData = {
  results: Driver[]
  info: object
}

export const loader: LoaderFunction = async () => {
  const res = await fetch('https://randomuser.me/api/?results=30')
  const resJson = await res.json()

  return resJson
}

export default function Drivers() {
  const data = useLoaderData<LoaderData>()

  return (
    <>
      <div className="flex justify-between items-center bg-white p-6 rounded">
        <div>
          <h1 className="text-2xl text-red-500 font-bold">DRIVER MANAGEMENT</h1>
          <p>Data driver yang bekerja dengan Anda</p>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/drivers/new">
            <span className="bg-red-500 py-3 px-4 rounded text-white">
              + Tambah driver
            </span>
          </Link>
        </div>
      </div>
      <div className="mt-10 text-right">
        <input
          type="text"
          placeholder="Cari driver"
          className="py-2 px-4 border rounded"
        />
      </div>
      <div className="mt-5">
        <div className="flex flex-nowrap gap-4 overflow-x-scroll">
          {data.results.map((item) => (
            <div className="w-64 bg-white drop-shadow-md rounded">
              <p className="bg-slate-100 p-4 truncate text-ellipsis overflow-hidden">
                Driver ID:{' '}
                <span className="text-red-500">{item.id.value || '-'}</span>
              </p>
              <div className="p-4 mt-5">
                <img
                  src={item.picture.medium}
                  alt=""
                  className="w-28 h-28 rounded-full inline-block mb-4"
                />
                <div className="my-4">
                  <p className="text-xs text-slate-500">Nama Driver</p>
                  <p>
                    {item.name.first} {item.name.last}
                  </p>
                </div>
                <div className="my-4">
                  <p className="text-xs text-slate-500">Telepon</p>
                  <p>{item.phone}</p>
                </div>
                <div className="my-4">
                  <p className="text-xs text-slate-500">Email</p>
                  <p>{item.email}</p>
                </div>
                <div className="my-4">
                  <p className="text-xs text-slate-500">Tanggal lahir</p>
                  <p>{dayjs(item.dob.date).format('DD MMM YYYY')}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="bg-white drop-shadow-md text-center rounded overflow-hidden">
            <p className="bg-slate-300 p-2">Total user</p>
            <h1 className="text-5xl p-8">600 k</h1>
          </div>
          <div className="bg-white drop-shadow-md text-center rounded overflow-hidden">
            <p className="bg-slate-300 p-2">Total pemesanan</p>
            <h1 className="text-5xl p-8">40,000</h1>
          </div>
          <div className="bg-white drop-shadow-md text-center rounded overflow-hidden">
            <p className="bg-slate-300 p-2">Total driver</p>
            <h1 className="text-5xl p-8">1.2 k</h1>
          </div>
        </div>
      </div>
    </>
  )
}
