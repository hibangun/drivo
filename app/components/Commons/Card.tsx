import { FC } from 'react'
import dayjs from 'dayjs'

type DriverProps = {
  item: Driver
}

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

export const DriverList: FC<DriverProps> = ({ item }) => {
  return (
    <div className="w-64 bg-white drop-shadow-md rounded mb-10">
      <p className="bg-slate-100 p-4 truncate text-ellipsis overflow-hidden">
        Driver ID: <span className="text-red-500">{item.id.value || '-'}</span>
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
          <p className="truncate text-ellipsis overflow-hidden">{item.email}</p>
        </div>
        <div className="my-4">
          <p className="text-xs text-slate-500">Tanggal lahir</p>
          <p>{dayjs(item.dob.date).format('DD MMM YYYY')}</p>
        </div>
      </div>
    </div>
  )
}
