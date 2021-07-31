import Logo from "components/Logo/Logo";
import NavLinks from "components/NavLinks/NavLinks";
import NavBar from "components/NavBar/NavBar";
import * as S from "./Header.style";
import { useEffect, useState } from "react";
import useWindowWidth from "hooks/useWindowWidth";
import { throttle } from "lodash";
export default function Header() {
  const width = useWindowWidth();
  const [active, setActive] = useState(false);
  useEffect(() => {
    console.log(width);
    if (width > 770) {
      setActive(false);
    }
  }, [width]);

  return (
    <S.Header active={active}>
      <div className="logo">
        <Logo />
      </div>
      <NavLinks active={active} />
      <NavBar setActive={setActive} active={active} />
    </S.Header>
  );
}
