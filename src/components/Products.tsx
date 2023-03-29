import React from "react";
import styled, { CSSProperties } from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
`;

export default function Products() {
    return (
        <Container>
            {popularProducts.map((item: any) => (
                <Product item={item} key={item.key} />
            ))}
        </Container>
    );
}
