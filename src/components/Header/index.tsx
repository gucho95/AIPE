"use client";
import { FC, Fragment, HTMLAttributes } from "react";
import QuickLinks from "./QuickLinks";
import MainHeader from "./MainHeader";

type HeaderProps = {
  className?: string;
};

const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <Fragment>
      <QuickLinks />
      <MainHeader className={className} />
    </Fragment>
  );
};

export default Header;
