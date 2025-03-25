import css from './header.module.css'
import { ShoppingCart, User } from 'lucide-react'

export default function Header() {
    return(
        <div className={css.container}>
            <a href="https://wa.me/24999690345" target="_blank"><ShoppingCart  className={css.icon}/></a>    
            <p className={css.icon}>Padaria TJ Gomes</p>
            <User className={css.icon}/>
        </div>
    )
}