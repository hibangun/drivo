import { useLoaderData } from '@remix-run/react'
import { useState } from 'react'
import { LoaderFunction, Link } from 'remix'

import { DriverList } from '../components/Commons/Card'

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

const PER_PAGE = 5

export const loader: LoaderFunction = async () => {
  const res = await fetch('https://randomuser.me/api/?results=30')
  const resJson = await res.json()

  return resJson
}

export default function Drivers() {
  const data = useLoaderData<LoaderData>()
  const [totalPage, setTotalPage] = useState(
    Math.ceil(data.results.length / PER_PAGE) - 1
  )
  const [drivers, setDrivers] = useState(data.results.slice(0, 5))
  const [searchedDrivers, setSearchedDrivers] = useState([])
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState('')

  const handlePage = (isAdded: boolean) => {
    const nextPage = page + (isAdded ? 1 : -1)
    setPage(nextPage)

    const offset = PER_PAGE * nextPage
    const filteredDrivers = search ? searchedDrivers : data.results
    setDrivers(filteredDrivers.slice(offset, offset + PER_PAGE))
  }

  const handleSearch = (q: string) => {
    setSearch(q)
    setPage(0)

    const filteredDrivers = data.results.filter((item) =>
      item.name.first.toLowerCase().includes(q.toLowerCase())
    )

    setSearchedDrivers(filteredDrivers)
    setDrivers(filteredDrivers.slice(0, 5))
    setTotalPage(Math.ceil(filteredDrivers.length / PER_PAGE) - 1)
  }

  return (
    <>
      <div className="block md:flex md:justify-between md:items-center bg-white p-6 rounded">
        <div>
          <h1 className="text-2xl text-red-500 font-bold">DRIVER MANAGEMENT</h1>
          <p>Data driver yang bekerja dengan Anda</p>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/drivers/new">
            <span className="inline-block mt-5 md:mt-0 bg-red-500 py-3 px-4 rounded text-white">
              + Tambah driver
            </span>
          </Link>
        </div>
      </div>
      <div className="mt-10 text-right sticky md:relative top-5 z-10">
        <input
          type="text"
          placeholder="Cari driver"
          className="w-full md:w-auto py-2 px-4 border rounded"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <div className="fixed bottom-0 right-5 md:relative md:right-0 flex items-center justify-end gap-4 mb-10 mt-3">
          <button
            onClick={() => handlePage(false)}
            disabled={page <= 0}
            className="disabled:opacity-30 text-2xl w-10 h-10 rounded border-2 border-black bg-white"
          >
            ‹
          </button>
          <button
            onClick={() => handlePage(true)}
            disabled={page >= totalPage || totalPage === 1}
            className="disabled:opacity-30 text-2xl w-10 h-10 rounded border-2 border-black bg-white"
          >
            ›
          </button>
        </div>
      </div>
      <div className="mt-5">
        <div className="block md:flex md:flex-nowrap md:gap-4 md:overflow-x-scroll">
          {drivers.map((item) => (
            <DriverList item={item} />
          ))}

          {!drivers.length && (
            <p className="text-center">Driver tidak ditemukan</p>
          )}
        </div>
      </div>
    </>
  )
}
