import { StyledMenu } from './Navbar';
import { Link } from 'react-router-dom';

const Menu = ({ open, setOpen }: any) => {

    return (
        <StyledMenu id="burgermenu" open={open}>
            <Link style={{ textDecoration: "none" }} id="burgerhomelink" to='/'>Home</Link>
            <Link style={{ textDecoration: "none" }} id="burgercontactlink" to='/contact'>Contact</Link>
            <Link style={{ textDecoration: "none" }} id="burgeraboutlink" to='/about'>About</Link>    
            <Link style={{ textDecoration: "none" }} id="burgerpostlink" to='/posts'>Posts</Link>    
        </StyledMenu>
    )
}
export default Menu;