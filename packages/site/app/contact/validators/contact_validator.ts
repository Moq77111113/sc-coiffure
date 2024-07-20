import vine from '@vinejs/vine'

const emailOrPhoneRegex =
  /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|(\+?[0-9]{1,3}?[-. ]?(\(?\d{1,4}\)?[-. ]?)?(\d{1,4}[-. ]?)*\d{1,4})$/

export const contactFormValidator = vine.compile(
  vine.object({
    message: vine.string().trim().escape().minLength(24),
    contact: vine.string().regex(emailOrPhoneRegex),
    honey: vine.any()   
  }),
)
