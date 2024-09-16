import Image1 from "../assets/Image1.jpg"
import Image2 from "../assets/Image2.jpg"
import Image3 from "../assets/Image3.jpg"
import '../css/loja.css'

const Loja=()=>{
    return(
        <>
        <header>
            <h1>
                Loja de produtos
            </h1>
        </header>

        <main>
            <article className="produto-grid">
                <section className="produto-item span-row-2">
                    <img src= {Image1} alt="img-1"></img>
                    <div>
                        <h3>Produto-1</h3>
                        <p>3$</p>
                    </div>
                </section>
                <section className="produto-item">
                    <img src={Image2} alt="img-2"></img>
                    <div>
                        <h3>Produto-2</h3>
                        <p>3999$</p>
                    </div>
                </section>
                <section className="produto-item span-col-2">
                    <img src={Image3} alt="img-3"></img>
                    <div>
                        <h3>Produto-3</h3>
                        <p>56$</p>
                    </div>
                    <footer>
                    <h5>2024</h5>
                    </footer>
                </section>


            </article>
        </main>
        </>
    )
}

export default Loja