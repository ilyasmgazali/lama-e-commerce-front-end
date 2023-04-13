import React, { useEffect, useState } from "react";
import styled, { CSSProperties } from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;

    flex-wrap: wrap;
    justify-content: space-between;
`;
interface Props {
    cat?: string;
    sort?: string;
    filters?: {
        [key: string]: string;
    };
}
export default function Products({ cat, sort, filters }: Props) {
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
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat
                        ? `http://localhost:4000/api/products?category=${cat}`
                        : "http://localhost:4000/api/products/"
                );
                setProducts(res.data);
            } catch (error) {}
        };
        getProducts();
    }, [cat]);

    // left filters
    useEffect(() => {
        cat &&
            setFilteredProducts(
                // GOAOSKDsfdsfsd
                products.length > 0
                    ? products.filter(
                          (item) =>
                              filters
                                  ? Object.entries(filters).every(
                                        ([key, value]) =>
                                            item[key].includes(value)
                                    )
                                  : true // If filters is undefined, don't apply any filter
                      )
                    : []
            );
    }, [products, cat, filters]);

    // right sort // TO TEST, TO TEST, TO TEST, TO TEST
    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);
    return (
        <Container>
            {cat
                ? filteredProducts.map((item) => (
                      <Product item={item} key={item.id} />
                  ))
                : products
                      .slice(0, 8)
                      .map((item) => <Product item={item} key={item.id} />)}
        </Container>
    );
}
