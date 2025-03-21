import css from './footer.module.css'
import Facebook from '@/assets/facebook.png'
import Instagran from '@/assets/instagram.png'
import Whatsapp from '@/assets/whatsapp.png'
import Email from '@/assets/email.png'
import Cartao from '@/assets/cartao.png'
import Pix from '@/assets/pix.png'
import Mapa from '@/assets/mapa.jpg'

export default function Footer() {
    return (
        <div className={css.container}>
            <section className={css.sectionA}>
                <div className={css.divRedeSociais}>
                    <div className={css.divIcone}>Padaria</div>
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
                    <a href="https://www.google.com.br/maps/place/R.+Roraima,+399+-+Morada+do+Contorno,+Resende+-+RJ,+27525-674/@-22.4814014,-44.5061611,18z/data=!3m1!4b1!4m6!3m5!1s0x9e78f07a09238f:0xeee8b40976c754d6!8m2!3d-22.4814039!4d-44.5048736!16s%2Fg%2F11lmp2pyd_?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src={Mapa.src} alt="google maps" className={css.imgMapa} />
                    </a>
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