import { useState } from "react";
import Link from "next/link";
import { Option } from "@/constants/types";
import classes from "./style.module.css";
import Text, { TextVariant } from "../Typhography/Text";
import ArrowDownSmallIcon from "../Icons/ArrowDownSmall";
import Spacing from "../Spacing";
import { ArrowRightBigIcon } from "../Icons/ArrowRight";
import Dropdown from "../Dropdown";
import { GENDER_OPTIONS } from "@/constants/system";

const QuickLinks = () => {
  const [gender, setGender] = useState<Option>(GENDER_OPTIONS[0]);
  return (
    <nav className={classes.quickLinks}>
      <div className="flex">
        <Dropdown
          options={GENDER_OPTIONS}
          menuClassName="w-[200px]"
          onOptionSelect={setGender}
        >
          <Text
            variant={TextVariant.custom}
            className="text-primary-alpha/70 font-medium"
          >
            Пол моделей:
          </Text>
          <Spacing className="pl-2" />
          <Text
            variant={TextVariant.custom}
            className="text-primary-alpha/100 flex font-medium"
          >
            {gender.label}&nbsp;
            <ArrowDownSmallIcon className="stroke-current w-3 relative top-[3px]" />
          </Text>
        </Dropdown>
      </div>
      <div className="flex justify-center">
        <Link href="/#create">
          <div className="flex text-primary-alpha/70 font-medium">
            <Text variant={TextVariant.custom} className="font-medium">
              Перейти к созданию
            </Text>
            <Spacing className="pl-2" />
            <ArrowRightBigIcon className="stroke-current w-4" />
          </div>
        </Link>
      </div>

      <div className="flex text-black/90 font-medium  justify-end">
        <Link href="/faq">
          <Text variant={TextVariant.custom}>Помощь</Text>
        </Link>
        <Spacing className="pl-2" />
        <Text>·</Text>
        <Spacing className="pl-2" />
        <Link href="/about-us">
          <Text variant={TextVariant.custom}>Чем мы занимаемся?</Text>
        </Link>
      </div>
    </nav>
  );
};

export default QuickLinks;
