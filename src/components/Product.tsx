import { Circle } from "@mui/icons-material";
import React from "react";
import styled, { CSSProperties } from "styled-components";
// import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;
const Image = styled.img``;
const Info = styled.div``;
const Icon = styled.div``;

interface ProductItemProps {
    item: {
        id: number;
        title: string;
        img: string;
    };
}

export default function Product({ item }: ProductItemProps) {
    return (
        <Container>
            <Circle />
            <Image src={item.img} alt="Name of Product" />
            <Info>
                <Icon>
                    <ShoppingCartOutlinedIcon />
                </Icon>
                <Icon>
                    <SearchOutlinedIcon />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlinedIcon />
                </Icon>
            </Info>
        </Container>
    );
}
