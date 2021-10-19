import React from 'react'
import s from './FormsControls.module.css'

// Первый метод
// const FormControl = ({input, meta, ...props}) => {
//     const hasError = meta.error && meta.touched
//     // debugger
//     return (
//         <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
//             <div>
//                 {props.children}
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }
//
// export const Textarea = props => {
//     const {input, meta, ...restProps} = props
//     debugger
//     return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
//           }
//
// export const Input = props => {
//     const {input, meta,  ...restProps} = props
//     return <FormControl {...props}> <input {...input} {...restProps} /></FormControl>
// }

// Второй метод
export const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.submitError || (meta.touched && meta.error)
    return (
        <div className={ s.formControl + " " + (hasError ? s.error : "") }>
            { hasError && <span> { meta.error || meta.submitError} </span> }
            <Element {...input} {...props} />
        </div>
    )
}

export const Textarea = Element("textarea")
export const Input = Element("input")
