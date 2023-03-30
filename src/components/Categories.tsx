import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection: "column" })}
`;

//interface CategoriesItem {       //category.map(item: CategoriesItem)
//    id: number;
//    img: string | object;
//    title: string;
//}

export default function Categories() {
    return (
        <Container>
            {categories.map((item: any) => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    );
}
