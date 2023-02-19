import React from "react";

import * as S from "./styles";

function Button({ children, icon = false }) {
  return (
    <S.Wrapper>
      {icon && <S.Icon src={icon} />}
      {children}
    </S.Wrapper>
  );
}

export default Button;
