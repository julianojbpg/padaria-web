import css from './body.module.css'

export default function Body() {
    return (
        <div className={css.container}>
            <section className={css.sectionPesquisa}>
                <input type="text" placeholder='Pesquisar' className={css.input}/>
            </section>
            <section className={css.sectionTabela}>

            </section>
        </div>
    )
}