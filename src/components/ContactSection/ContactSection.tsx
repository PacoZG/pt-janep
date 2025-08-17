import React, { FC } from 'react'
import { Mail, MapPin } from 'lucide-react'
import { useTranslations } from 'next-intl'
import ReCAPTCHA from 'react-google-recaptcha'
import Container from '@/components/Container/Container'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import { Instagram, Spinner } from '@/components/icons'
import { ContactModel } from '@/components/ContactSection/ContactModel'
import './contact-style.css'

const ContactSection: FC = () => {
  const t = useTranslations()
  const {
    handleSendEmail,
    handleVerifyCaptcha,
    emailInputValidation,
    phoneInputValidation,
    buttonIsDisabled,
    showModal,
    sending,
    fullName,
    email,
    message,
    siteKey,
    phone,
  } = ContactModel()

  return (
    <section id="contact" className="bg-gray-200 py-16 md:py-24">
      <Container>
        <SectionTitle
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-5">
          <div className="order-2 rounded-2xl border border-gray-300 bg-white text-gray-800 shadow-sm md:order-1 md:col-span-3">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight text-gray-900">
                {t('contact.title')}
              </h3>
            </div>

            <div className="p-6 pt-0">
              <form
                className="grid gap-6"
                action={`mailto:jane.pokkinen@gmail.com`}
                method="post"
                encType="text/plain"
                onSubmit={handleSendEmail}
              >
                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="name">
                    {t('contact.name')}
                  </label>

                  <input
                    id="name"
                    className="flex h-9 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder={t('contact.namePlaceholder')}
                    {...fullName.params}
                    name="name"
                    required
                  />
                </div>

                <div className="relative grid gap-2">
                  <label className="text-sm font-medium" htmlFor="email">
                    {t('contact.email')}
                  </label>

                  <input
                    id="email"
                    className="flex h-9 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="you@example.com"
                    {...email.params}
                    name="email"
                    required
                  />

                  {emailInputValidation() ? null : (
                    <label className="absolute -bottom-6 left-2 text-sm text-red-700 dark:text-red-400 font-medium">
                      {email.params.value.length > 0 &&
                        t('contact.invalid-email')}
                    </label>
                  )}
                </div>

                <div className="relative grid gap-2">
                  <label className="text-sm font-medium" htmlFor="phone">
                    {t('contact.phone')}
                  </label>

                  <input
                    id="phone"
                    className="flex h-9 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="+358 …"
                    {...phone.params}
                    name="phone"
                  />

                  {phoneInputValidation() ? null : (
                    <label className=" left-2 text-sm text-red-700 dark:text-red-400 font-medium">
                      {phone.params.value.length > 1 &&
                        t('contact.invalidNumber')}
                    </label>
                  )}
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="message">
                    {t('contact.message')}
                  </label>

                  <textarea
                    id="message"
                    className="flex min-h-[60px] w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm shadow-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder={t('contact.messagePlaceholder')}
                    name="message"
                    {...message.params}
                    maxLength={500}
                    minLength={50}
                  />

                  <label className="text-gray-600 dark:text-gray-400 text-sm ml:text-md lg:text-base text-center sm:text-left">
                    {message.params.value.length > 49 ? (
                      <span className="text-green-700 dark:text-green-400 font-semibold">{`${t(
                        'contact.characters'
                      )}${message.params.value.length}/500 max`}</span>
                    ) : (
                      message.params.value.length > 0 && (
                        <span className="text-red-700 dark:text-red-400 font-medium">{`${t(
                          'contact.characters'
                        )} ${message.params.value.length}/50 min`}</span>
                      )
                    )}
                  </label>
                </div>

                <div className="flex flex-col xl:flex-row items-center justify-center ml:justify-end mt-4 md:mt-0">
                  <div className="flex justify-center w-48 xs:w-full m-0">
                    <ReCAPTCHA
                      className="scale-75 sm:scale-75 md:scale-80"
                      sitekey={siteKey}
                      onChange={handleVerifyCaptcha}
                      theme={'light'}
                    />
                  </div>
                </div>

                {!showModal ? (
                  <button
                    type="submit"
                    className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    disabled={buttonIsDisabled()}
                  >
                    {!sending ? (
                      t('contact.submit')
                    ) : (
                      <div className="flex flex-row items-center gap-3">
                        <Spinner className="animate-spin h-5 w-5 text-current" />

                        <label>{t('sending')}</label>
                      </div>
                    )}
                  </button>
                ) : (
                  <div className="contact-sent-message-display">
                    {t('sent')}
                  </div>
                )}

                <div className="text-center text-sm text-gray-500">
                  <p>{t('contact.alt')}</p>
                  <a
                    className="underline"
                    href="mailto:jane.pokkinen@gmail.com"
                  >
                    {'jane.pokkinen@gmail.com'}
                  </a>
                </div>
              </form>

              {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-2xl text-center max-w-sm w-full">
                    <p className="text-2xl font-bold text-green-700 dark:text-green-400 mb-4">
                      {t('sent')}!
                    </p>

                    <p className="text-lg text-gray-800 dark:text-gray-200">
                      {t('message-sent')}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="order-1 grid content-start gap-4 md:order-2 md:col-span-2">
            <div className="rounded-2xl border border-gray-300 bg-white text-gray-800 shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight text-gray-900">
                  {t('contact.title')}
                </h3>
              </div>

              <div className="p-6 pt-0">
                <div className="grid gap-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5" /> jane.pokkinen@gmail.com
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" /> {t('footer.city')}
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`https://www.instagram.com/ptbarbarella?igsh=bnB1cXpkMm9pMDVx`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg transition-colors hover:bg-gray-100"
                    >
                      <Instagram className="h-5 w-5" />

                      <span>Find me on Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-300 bg-white text-gray-800 shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight text-gray-900">
                  {t('contact.philosophyTitle')}
                </h3>
              </div>

              <div className="p-6 pt-0">
                <p className="text-sm text-gray-700">
                  {t('contact.philosophyText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ContactSection
