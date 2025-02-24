import Logo from 'assets/images/9391712.png';

interface Props {
    theme: string;
}

const LogoLink = (props:Props)=>{

    return (
        <span className="d-flex flex-row justify-content-center align-items-center gap-2 logo-lg">
            <img src={Logo} alt="" height="30" />
            <h3 className={props.theme}>Intranet</h3>
        </span>
    )

}
export default LogoLink;