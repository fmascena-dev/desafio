import { Link } from "react-router-dom";
import { Figure, Principal, Nav, Ul } from "./HeaderStyle";


export default function Header() {
    return (
        <Principal>
            <Figure>
                <img src="/public/Images/logomarca.png" alt="logomarca" />
            </Figure>
            <Nav>
                <Ul>
                    <Link to="/">Home</Link>
                    <Link to="/novidades">Novidades</Link>
                    <Link to='/sobre'>Sobre</Link>
                </Ul>
            </Nav>
        </Principal>
    )
};
