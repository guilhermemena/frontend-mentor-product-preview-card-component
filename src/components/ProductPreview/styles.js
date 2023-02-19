import styled from "styled-components";

export const Wrapper = styled.div`
  width: 600px;
  height: 450px;
  border-radius: 10px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 343px;
    height: 611px;
  }
`;

export const ImageWrapper = styled.div`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 10px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px;
  overflow: hidden;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const ProductCategory = styled.h3`
  font-size: 0.75rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray};
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`;

export const ProductTitle = styled.h1`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 700;
  line-height: 32px;
  text-align: left;
  width: 200px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 16px;
  }
`;

export const ProductDescription = styled.p`
  font-size: 0.875rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 400;
  line-height: 23px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.gray};

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const Price = styled.p`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 700;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.light_green};
  margin-bottom: 30px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const OriginalPrice = styled.span`
  font-size: 0.8125rem;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 400;
  margin-left: 10px;
  text-decoration: line-through;
`;
