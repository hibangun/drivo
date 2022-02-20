import type { ActionFunction } from 'remix'
import { useActionData, redirect, json } from 'remix'

function validateName(name: string) {
  if (name.length < 3) {
    return 'Masukkan nama dengan benar'
  }
}

type ActionData = {
  formError?: string
  fieldErrors?: {
    firstname: string | undefined
    lastname: string | undefined
  }
  fields?: {
    firstname: string
    lastname: string
  }
}

const badRequest = (data: ActionData) => json(data, { status: 400 })

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const firstname = form.get('firstname')
  const lastname = form.get('lastname')
  if (typeof firstname !== 'string' || typeof lastname !== 'string') {
    return badRequest({
      formError: `Form not submitted correctly.`
    })
  }

  const fieldErrors = {
    firstname: validateName(firstname),
    lastname: validateName(lastname)
  }
  const fields = { firstname, lastname }
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields })
  }

  return redirect('/drivers')
}

export default function DriverNew() {
  const actionData = useActionData<ActionData>()

  return (
    <div>
      <h1 className="text-2xl mb-10 font-bold">Tambah driver</h1>
      <form method="post">
        <div>
          <label>
            Nama depan:{' '}
            <input
              type="text"
              defaultValue={actionData?.fields?.firstname}
              className="block py-2 px-4 mt-2 border rounded w-full md:w-auto"
              name="firstname"
              aria-invalid={
                Boolean(actionData?.fieldErrors?.firstname) || undefined
              }
              aria-errormessage={
                actionData?.fieldErrors?.firstname ? 'name-error' : undefined
              }
            />
          </label>
          {actionData?.fieldErrors?.firstname ? (
            <p
              className="text-red-500 text-xs mt-1"
              role="alert"
              id="name-error"
            >
              {actionData.fieldErrors.firstname}
            </p>
          ) : null}
        </div>
        <div className="my-5">
          <label>
            Nama belakang:{' '}
            <input
              type="text"
              defaultValue={actionData?.fields?.lastname}
              className="block py-2 px-4 mt-2 border rounded w-full md:w-auto"
              name="lastname"
              aria-invalid={
                Boolean(actionData?.fieldErrors?.lastname) || undefined
              }
              aria-errormessage={
                actionData?.fieldErrors?.lastname ? 'name-error' : undefined
              }
            />
          </label>
          {actionData?.fieldErrors?.lastname ? (
            <p
              className="text-red-500 text-xs mt-1"
              role="alert"
              id="name-error"
            >
              {actionData.fieldErrors.lastname}
            </p>
          ) : null}
        </div>
        <div>
          <button
            type="submit"
            className="px-6 py-2 bg-red-500 text-white font-bold rounded w-full md:w-auto"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  )
}
