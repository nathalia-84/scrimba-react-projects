import fb from "../assets/fb.svg"
import git from "../assets/git.svg"
import ig from "../assets/ig.svg"
import tt from "../assets/tt.svg"

function Footer() {
    return(
        <div className="Footer flex">
            <img src={tt} alt="twitter icon" />
            <img src={fb} alt="facebook icon" />
            <img src={ig} alt="instagram icon" />
            <img src={git} alt="git icon" />
        </div>
    )
}

export default Footer