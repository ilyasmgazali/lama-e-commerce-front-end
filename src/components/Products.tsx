import React, { useState } from "react";
import styled, { CSSProperties } from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;

    flex-wrap: wrap;
    justify-content: space-between;
`;

export default function Products(cat: any, sort: any, filters: any) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    return (
        <Container>
            {popularProducts.map(
                (
                    item: any // temp
                ) => (
                    <>
                        <Product item={item} key={item.key} />
                    </>
                )
            )}
        </Container>
    );
}
