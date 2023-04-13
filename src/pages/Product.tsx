import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
//import Product from "./Product";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material/";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { publicRequest } from "../requestMethods";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

/**
 *           MINOR EDIT: ADD BORDER, 0.2PX? AROUND COLOUR, DOES NOT SHOW WHEN WHITE!
 *
 *
 *
 */

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "50vh" })}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    font-weight: 100;
    font-size: 40px;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;
const FliteredContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;
type FilterColorProps = {
    color: string;
};
const FilterColor = styled.div<FilterColorProps>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${mobile({ width: "100%" })};
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &hover {
        background-color: #f8f4f4;
    }
`;
interface Product {
    _id: number;
    //_id: number; //already have id, but giving error, look into it
    title: string;
    desc: string;
    img: string;
    categories?: string[];
    size?: string[];
    color?: string[];
    price: number;
    inStock: boolean;
    [key: string]: any;
}

export default function Product() {
    const location = useLocation();
    const id = location.pathname.split("/")[2]; // catergory from url

    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get(`products/find/${id}`);
                setProduct(res.data);
            } catch (error) {}
        };
        getProduct();
    }, [id]);
    console.log(product);

    return (
        <Container>
            <Navbar />
            <Announcement />

            <Wrapper>
                <ImgContainer>
                    <Image src={product?.img ?? "Clothes image"} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product && product.title}</Title>
                    <Desc>{product && product.desc}</Desc>
                    <Price>£20</Price>
                    <FliteredContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product &&
                                product.color &&
                                product.color.map((c) => (
                                    <FilterColor color={c} key={c} />
                                ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                {product &&
                                    product.size &&
                                    product.size.map((s) => (
                                        <FilterSizeOption key={s}>
                                            {s}
                                        </FilterSizeOption>
                                    ))}
                            </FilterSize>
                        </Filter>
                    </FliteredContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>

            <Newsletter />
            <Footer />
        </Container>
    );
}
