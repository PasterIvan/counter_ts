import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './Button.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button: React.FC<DefaultButtonPropsType> = (
    {
        className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }

) => {
    return (
        <button
            className={s.default}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default Button


