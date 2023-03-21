import "../styles/Footer.css";

function Footer(){
    return(
        // <div className="App">
        //     <p style={{
        //         bottom: "0",
        //         position: "absolute",
        //         width: "90%",
        //         textAlign: "center"
        //     }}>
        //        &copy; 2023 InfoTec, todos os direitos reservados.</p>
        // </div>
        <footer className="footer">
            <p>&copy; 2023 InfoTec, todos os direitos reservados. Site criado por Mauro<br/>
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-telegram"></i>          
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-whatsapp"></i>
            </p>
        </footer>
    );
}

export default Footer;