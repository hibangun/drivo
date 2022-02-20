import { Outlet, useCatch } from 'remix'
import type { MetaFunction } from 'remix'
import Document from './components/Document'
import Layout from './components/Layout/Layout'
import Layout404 from './components/Layout/404'
import styles from './styles/app.css'

export const meta: MetaFunction = () => {
  return { title: 'Drivo' }
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export const CatchBoundary = function CatchBoundary() {
  const caught = useCatch()

  switch (caught.status) {
    case 404:
      return (
        <Document title="Halaman tidak ditemukan">
          <Layout404
            backlinkTo="/"
            backlinkText="Kembali ke Beranda"
            title="Halaman tidak ditemukan"
          />
        </Document>
      )
  }
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}
