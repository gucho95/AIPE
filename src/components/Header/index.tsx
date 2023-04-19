"use client";
import { FC, Fragment, HTMLAttributes, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { Option } from "@/constants/types";
import classes from "./style.module.css";
import Text from "../Typhography/Text";
import ArrowDownSmallIcon from "../Icons/ArrowDownSmall";
import Spacing from "../Spacing";
import { ArrowRightBigIcon } from "../Icons/ArrowRight";
import Dropdown from "../Dropdown";
import { GENDER_OPTIONS } from "@/constants/system";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: FC<HeaderProps> = ({ className, ...props }) => {
  const [gender, setGender] = useState<Option>(GENDER_OPTIONS[0]);

  return (
    <Fragment>
      <div className="grid grid-cols-3 items-center font-alternate py-4 bg-light px-16">
        <div className="flex">
          <Dropdown
            options={GENDER_OPTIONS}
            menuClassName="w-[200px]"
            onOptionSelect={setGender}
          >
            <Text className="text-primary-alpha/70 font-medium">
              Пол моделей:
            </Text>
            <Spacing className="pl-2" />
            <Text className="text-primary-alpha/100 font-alternate flex font-medium">
              {gender.label}&nbsp;
              <ArrowDownSmallIcon className="stroke-current w-3 relative top-[3px]" />
            </Text>
          </Dropdown>
        </div>
        <div className="flex justify-center">
          <Link href="#">
            <div className="flex  text-primary-alpha/70 font-medium">
              <Text className="font-medium">Перейти к созданию</Text>
              <Spacing className="pl-2" />
              <ArrowRightBigIcon className="stroke-current w-4" />
            </div>
          </Link>
        </div>

        <div className="flex text-black/90 font-medium font-alternate justify-end">
          <Link href="#">
            <Text>Помощь</Text>
          </Link>
          <Spacing className="pl-2" />
          <Text>·</Text>
          <Spacing className="pl-2" />
          <Link href="#">
            <Text>Чем мы занимаемся?</Text>
          </Link>
        </div>
      </div>
      <header className={clsx(classes.header, className)} {...props}>
        <div className="brd"></div>
        <div className="brd flex justify-center items-center">
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
        <div className="brd"></div>
      </header>
    </Fragment>
  );
};

export default Header;
