import img from "../assets/5DECA27E-9593-4126-A49F-1A20C35588DE.jpg"

function Info() {
    return(
        <div className="Info grid">
            <img src={img} alt="Foto"/>
            <div className="title">
                <h1>Nathalia Azevedo</h1>
                <h3>Frontend Developer</h3>
                <p>https://github.com/nathaliaazvdo</p>
            </div>
            <div className="buttons flex">
                <div className="btn email flex">Email</div>
                <div className="btn linkedin flex">Linkedin</div>
            </div>
        </div>
    )
}

export default Info