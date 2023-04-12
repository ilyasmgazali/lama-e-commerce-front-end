import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;
//  left
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const SeachContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 0px;
    padding: 5px;
`;
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`;

//  center
const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.div`
    font-weight: bold;
    font-size: 30px;
    ${mobile({ fontSize: "24px" })}
`;

// right
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

export default function Navbar() {
    return (
        <>
            <Container>
                <Wrapper>
                    <Left>
                        <Language>EN</Language>
                        <SeachContainer>
                            <Input placeholder="Search" />
                            <SearchIcon
                                style={{ color: "gray", fontSize: "16px" }}
                            />
                        </SeachContainer>
                    </Left>
                    <Center>
                        {" "}
                        <Logo> GAZA. </Logo>{" "}
                    </Center>
                    <Right>
                        <MenuItem>REGISTER</MenuItem>
                        <MenuItem>SIGN IN</MenuItem>
                        <MenuItem>
                            {" "}
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingCartOutlinedIcon color="action" />
                            </Badge>{" "}
                        </MenuItem>
                    </Right>
                </Wrapper>
            </Container>
        </>
    );
}
