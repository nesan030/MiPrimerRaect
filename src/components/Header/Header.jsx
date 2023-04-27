import "./Header.css"
const Header=()=>{
    //sienpre antes del js va todo el codigo js

    let mensaje='Bienvenidos a mi pagina web'
    let numero= 4555

    let array=[5,5,7,8,9,]





    // const saludo=()=>{
    //     console.log('Hola mundo')

    // }

    return(
        <header>
            <h1>{mensaje}</h1>
            <h2>{numero}</h2>
            <h3>{array}</h3>
            <button onCLICK={()=>console.log('Hola Mundo')}>Hace Click</button>

        </header>
    
    )
}

export default Header