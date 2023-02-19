import React from "react";
import { useMediaQuery } from "react-responsive";

import Button from "../Button/Button";

import * as S from "./styles";

import ImageDesktop from "../../assets/image-product-desktop.jpg";
import ImageMobile from "../../assets/image-product-mobile.jpg";
import CartLogo from "../../assets/icon-cart.svg";

function ProductPreview() {
  const Mobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <S.Image src={Mobile ? ImageMobile : ImageDesktop} />
      </S.ImageWrapper>
      <S.ProductInfo>
        <S.ProductCategory>perfurm</S.ProductCategory>
        <S.ProductTitle>Gabrielle Essence Eau De Parfum</S.ProductTitle>
        <S.ProductDescription>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </S.ProductDescription>
        <S.Price>
          $149.99<S.OriginalPrice>$169.99</S.OriginalPrice>
        </S.Price>
        <Button icon={CartLogo}>Add to Cart</Button>
      </S.ProductInfo>
    </S.Wrapper>
  );
}

export default ProductPreview;
