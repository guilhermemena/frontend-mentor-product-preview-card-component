import React from "react";
import { ThemeProvider } from "styled-components";

import Button from "../Button/Button";
import ProductPreview from "../ProductPreview/ProductPreview";

import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import * as S from "./styles";

function App() {
  return (
    <ThemeProvider theme={{ colors, fonts }}>
      <S.Container>
        <ProductPreview />
      </S.Container>
    </ThemeProvider>
  );
}

export default App;
