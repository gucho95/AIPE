import Link from "next/link";
import H4 from "../Typhography/H4";
import Text, { TextVariant } from "../Typhography/Text";
import VkIcon from "../Icons/VkIcon";
import TelegramIcon from "../Icons/TelegramIcon";
import Image from "next/image";
import Spacing from "../Spacing";
import classes from "./style.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <Text variant={TextVariant.body1} className="block">
          © 2022, AIPE CLOTHING
        </Text>
        <Text variant={TextVariant.body1} className="text-primary-beta">
          Не ищи – создавай.
        </Text>
      </div>

      <div className={classes.navigationLinks}>
        <nav className={classes.navigationBlock}>
          <Link href="/about-us">
            <Text variant={TextVariant.body3}>Чем мы занимаемся?</Text>
          </Link>
          <Link href="/faq">
            <Text variant={TextVariant.body3}>Помощь</Text>
          </Link>
        </nav>
        <nav className={classes.socials}>
          <a
            href="https://vk.com"
            target="_blank"
            className="relative -top-2 m-0"
          >
            <Text
              variant={TextVariant.body3}
              className="inline-flex items-center"
            >
              <Image
                src="/images/vk.png"
                width={40}
                height={38}
                alt="telegram logo"
              />
              <Spacing className="pr-1" />
              Вконтакте
            </Text>
          </a>
          <a
            href="https://web.telegram.org/k"
            target="_blank"
            className="m-0 relative -top-5"
          >
            <Text
              variant={TextVariant.body3}
              className="inline-flex items-center"
            >
              <Image
                src="/images/telegram.png"
                width={30}
                height={38}
                alt="telegram logo"
                className="relative left-1"
              />
              <Spacing className="pr-[13px]" />
              Телеграм
            </Text>
          </a>
        </nav>
        <nav className={classes.navigationBlock}>
          <Link href="/page">
            <Text variant={TextVariant.body3}>Пользовательское соглашение</Text>
          </Link>
          <Link href="/page">
            <Text variant={TextVariant.body3}>Условия возврата</Text>
          </Link>
          <Link href="/page">
            <Text variant={TextVariant.body3}>Способы оплаты</Text>
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
