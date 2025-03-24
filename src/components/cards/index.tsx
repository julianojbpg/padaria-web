import { Produto } from '@/constants/produto-list'
import React from 'react'
import css from './style.module.css'

interface props { produto: Produto }
export default function Card({ produto }: props) {
    const { descricao, imgUrl, price, quantidade } = produto
    return (
        <div className={css.card}>
            <div className={css.cardimage}>
                <img src={imgUrl} alt='Imagem do produto ' />
            </div>
            <div className={css.carddescricao}>
                <span>{descricao} - {quantidade} Unidades</span>
                <span>R$:{price.toFixed(2)}</span>
            </div>
        </div>
    )
}
