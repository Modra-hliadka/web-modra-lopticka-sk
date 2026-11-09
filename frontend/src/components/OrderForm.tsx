import { type FormEvent, useState } from 'react'

const FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSfIDMhazBygqqc0-iKhkuz9OaUSuF-KDXV4bMRk_NLsQsG79Q/formResponse'

const ENTRY = {
  name: 'entry.1564760465',
  company: 'entry.940335297',
  email: 'entry.1854741482',
  phone: 'entry.87482432',
  contact: 'entry.419143678',
  quantity: 'entry.591708405',
}

const CONTACT_OPTIONS = ['Email', 'Telefón (hovor)', 'Whatsapp (chat)', 'Iné'] as const
const QUANTITY_OPTIONS = ['100 🔵', '100 - 500 🔵🔵', '500 - 1.000 🔵🔵🔵', 'Viac ako 1.000 🔵🔵🔵🔵', 'Iné'] as const

const OTHER_OPTION_VALUE = '__other_option__'

function RadioPills({
  name,
  options,
  value,
  otherValue,
  onChange,
  onOtherChange,
}: {
  name: string
  options: readonly string[]
  value: string
  otherValue: string
  onChange: (value: string) => void
  onOtherChange: (value: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isOther = option === 'Iné'
        const selected = value === option
        return (
          <label key={option} className="contents">
            <input
              type="radio"
              name={name}
              value={option}
              checked={selected}
              onChange={() => onChange(option)}
              className="peer sr-only"
              required
            />
            <span
              onClick={() => onChange(option)}
              className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition ${
                selected
                  ? 'border-navy-700 bg-navy-700 text-white'
                  : 'border-navy-700/20 bg-white text-navy-800 hover:border-navy-700/40'
              }`}
            >
              {option}
            </span>
            {isOther && selected && (
              <input
                type="text"
                value={otherValue}
                onChange={(e) => onOtherChange(e.target.value)}
                placeholder="Doplňte…"
                required
                className="ml-1 rounded-xl border border-navy-700/15 px-3 py-1.5 text-sm text-navy-900 outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-600/20"
              />
            )}
          </label>
        )
      })}
    </div>
  )
}

export function OrderForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle')
  const [contact, setContact] = useState('')
  const [contactOther, setContactOther] = useState('')
  const [quantity, setQuantity] = useState('')
  const [quantityOther, setQuantityOther] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const body = new URLSearchParams()
    body.set(ENTRY.name, String(data.get('name') ?? ''))
    body.set(ENTRY.company, String(data.get('company') ?? ''))
    body.set(ENTRY.email, String(data.get('email') ?? ''))
    body.set(ENTRY.phone, String(data.get('phone') ?? ''))

    body.set(ENTRY.contact, contact === 'Iné' ? OTHER_OPTION_VALUE : contact)
    if (contact === 'Iné') body.set(`${ENTRY.contact}.other_option_response`, contactOther)

    body.set(ENTRY.quantity, quantity === 'Iné' ? OTHER_OPTION_VALUE : quantity)
    if (quantity === 'Iné') body.set(`${ENTRY.quantity}.other_option_response`, quantityOther)

    setStatus('submitting')
    try {
      await fetch(FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        body,
      })
      setStatus('done')
      form.reset()
      setContact('')
      setContactOther('')
      setQuantity('')
      setQuantityOther('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="objednat" className="bg-sky-50 py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl text-navy-900 sm:text-4xl">Chcem Modré loptičky</h2>
          <p className="mt-4 text-lg text-navy-800/80">
            Vyplňte pár základných informácií a čoskoro sa vám ozveme s ponukou presne pre vašu firmu. Ďakujeme
            💙
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-6 shadow-xl shadow-navy-900/10 ring-1 ring-navy-700/10 sm:p-9">
          {status === 'done' ? (
            <div className="py-6 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy-700 text-xl text-white">
                ✓
              </span>
              <p className="font-display mt-4 text-xl text-navy-900">Ďakujeme za vašu správu!</p>
              <p className="mt-2 text-navy-800/70">Čoskoro sa vám ozveme s ponukou presne pre vašu firmu.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-navy-800">
                  Meno <span className="text-accent-600">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1.5 w-full rounded-xl border border-navy-700/15 px-4 py-2.5 text-navy-900 outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-600/20"
                />
              </div>

              <div>
                <label htmlFor="company" className="text-sm font-medium text-navy-800">
                  Firma / Organizácia
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="mt-1.5 w-full rounded-xl border border-navy-700/15 px-4 py-2.5 text-navy-900 outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-600/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-navy-800">
                  Email <span className="text-accent-600">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1.5 w-full rounded-xl border border-navy-700/15 px-4 py-2.5 text-navy-900 outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-600/20"
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-medium text-navy-800">
                  Tel. číslo / Mobil
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-1.5 w-full rounded-xl border border-navy-700/15 px-4 py-2.5 text-navy-900 outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-600/20"
                />
              </div>

              <div>
                <p className="text-sm font-medium text-navy-800">
                  Preferovaná forma komunikácie <span className="text-accent-600">*</span>
                </p>
                <div className="mt-2">
                  <RadioPills
                    name="contact"
                    options={CONTACT_OPTIONS}
                    value={contact}
                    otherValue={contactOther}
                    onChange={setContact}
                    onOtherChange={setContactOther}
                  />
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-navy-800">
                  O koľko loptičiek máte záujem <span className="text-accent-600">*</span>
                </p>
                <div className="mt-2">
                  <RadioPills
                    name="quantity"
                    options={QUANTITY_OPTIONS}
                    value={quantity}
                    otherValue={quantityOther}
                    onChange={setQuantity}
                    onOtherChange={setQuantityOther}
                  />
                </div>
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-600">
                  Niečo sa pokazilo. Skúste to prosím znova, alebo nám napíšte priamo na sociálnych sieťach.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full rounded-full bg-navy-700 px-7 py-3.5 text-base font-semibold text-white shadow-md shadow-navy-700/20 transition hover:bg-navy-800 disabled:opacity-60"
              >
                {status === 'submitting' ? 'Odosielam…' : 'Odoslať'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
