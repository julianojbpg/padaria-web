import { Produto } from '@/constants/produto-list'
import React from 'react'
import Card from '.'
import css from './style.module.css'

interface props { produtos: Produto[] }
export default function ListCards({ produtos }: props) {
    return (
        <div className={css.container_cards}>
            <div className={css.grid_cards}>
                {produtos.map(item => (
                    <Card produto={item} />
                ))}
            </div>
        </div>
    )
}
