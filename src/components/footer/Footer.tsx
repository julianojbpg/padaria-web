import css from './footer.module.css'
import Facebook from '@/assets/facebook.png'
import Instagran from '@/assets/instagram.png'
import Whatsapp from '@/assets/whatsapp.png'
import Email from '@/assets/email.png'
import Cartao from '@/assets/cartao.png'
import Pix from '@/assets/pix.png'
import logo from '@/assets/TJGOMES.png'

export default function Footer() {
    return (
        <div className={css.container}>
            <section className={css.sectionA}>
                <div className={css.divRedeSociais}>
                    <div className={css.divIcone}><img src={logo.src} alt="TJ Gomes" className={css.logo}/></div>
                    <label>Redes Sociais</label>
                    <div>
                        <img src={Facebook.src} alt="Facebook" className={css.img} />
                        <img src={Instagran.src} alt="Instagran" className={css.img} />
                        <img src={Whatsapp.src} alt="Whatsapp" className={css.img} />
                        <img src={Email.src} alt="Email" className={css.img} />
                    </div>
                    <p className={css.p}>Para pedidos urgentes chamar no Whatsapp: 31 98405-9204</p>
                </div>
                <div className={css.divEndereco}>
                    <h2>Endereço:</h2>
                    <p className={css.p}>
                        Rua dos Aimorés, Belo Horizonte/MG
                        30140-070
                    </p>
                    <p className={css.p}>
                        Horário de Funcionamento:
                        Aberto de 06:00 às 22:00.
                    </p>
                    <p className={css.p}>
                        Contatos:
                        24 xxxxx-xxxx
                    </p>
                    <p className={css.p}>
                        Empresa:
                        PADARIA LTDA
                    </p>
                    <p className={css.p}>
                        CNPJ: xx.xxx.xxx/xxxx-xx
                    </p>

                </div>
                <div className={css.divGoogleMaps}>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1843.303422813195!2d-44.50487359999999!3d-22.481403899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9e78f07a09238f%3A0xeee8b40976c754d6!2sR.%20Roraima%2C%20399%20-%20Morada%20do%20Contorno%2C%20Resende%20-%20RJ%2C%2027525-674!5e0!3m2!1spt-BR!2sbr!4v1742517603135!5m2!1spt-BR!2sbr" 
                width="600" height="450" style={{border:'0'}} loading="lazy"></iframe>
                </div>
            </section>
            <section className={css.sectionB}>
                <h4>Formas de Pagamento:</h4>
                <img src={Cartao.src} alt="Cartão" className={css.img} />
                <label>Crédito / Débito</label>
                <img src={Pix.src} alt="Pix" className={css.img} />
                <label>Pix</label>

            </section>
        </div>
    )
}