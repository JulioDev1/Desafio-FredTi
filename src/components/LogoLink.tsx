import Logo from 'assets/images/9391712.png';


const LogoLink = ()=>{

    return (
        <span className="d-flex flex-row justify-content-center align-items-center gap-2">
            <img src={Logo} alt="" height="30" />
            <h1 className="text-white ">Intranet</h1>
        </span>
    )

}
export default LogoLink;