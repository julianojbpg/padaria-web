import ListCards from '../cards/ListCards'
import css from './body.module.css'
import { produtolist } from "@/constants/produto-list"

export default function Body() {
    return (
        <div className={css.container}>
            <section className={css.sectionPesquisa}>
                <input type="text" placeholder='Pesquisar' className={css.input}/>
            </section>
            <section className={css.sectionTabela}>
                <ListCards produtos={produtolist} />
            </section>
        </div>
    )
}