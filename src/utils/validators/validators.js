export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

export const required = value =>
    value
        ? undefined
        : 'Field is required'

export const maxLength = max => value =>
    value && value.length > max
        ? `Must be ${max} characters or less`
        : undefined

export const minLength = min => value =>
    value && (value.length < min)
        ? `Must be ${min} characters or more`
        : undefined

