import { FC, Fragment, HTMLAttributes } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import classes from "./style.module.css";
import Text, { TextVariant } from "../Typhography/Text";
import Spacing from "../Spacing";
import BasketIcon from "../Icons/Basket";

const primaryNavigationItems = [
  { label: "Главная", href: "#main" },
  { label: "Мастерская", href: "#workshop" },
  { label: "Вдохновение", href: "#inspiration" },
];

type MainHeaderProps = {
  className?: string;
};
const MainHeader: FC<MainHeaderProps> = ({ className }) => (
  <header className={clsx(classes.header, className)}>
    <nav>
      <ul className="flex space-x-6">
        {primaryNavigationItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>
              <Text variant={TextVariant.custom} className="text-lg">
                {item.label}
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <div className="flex justify-center items-center">
      <Link href="/">
        <Image
          src="logo.svg"
          width={62}
          height={71}
          alt="brand logo"
          className="flex-shrink-0"
        />
      </Link>
    </div>
    <nav className="flex justify-end space-x-6">
      <Link href="/personal-cabinet">
        <Text
          variant={TextVariant.custom}
          className="text-lg text-primary-beta"
        >
          Личный кабинет
        </Text>
      </Link>
      <Link href="/basket">
        <Text
          variant={TextVariant.custom}
          className="text-lg text-dark inline-flex"
        >
          Корзина
          <Spacing className="pl-2" />
          <BasketIcon className="w-5 stroke-dark" />
        </Text>
      </Link>
    </nav>
  </header>
);

export default MainHeader;
