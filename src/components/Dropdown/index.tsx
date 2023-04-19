"use client";
import {
  FC,
  HTMLAttributes,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Button, { ButtonSize, ButtonVariant } from "../Button";
import classes from "./style.module.css";
import clsx from "clsx";
import { Option } from "@/constants/types";
import useOnClickOutside from "@/hooks/useOutsideClick";

interface DropdownProps
  extends Pick<HTMLAttributes<HTMLDivElement>, "className"> {
  children: ReactNode;
  options?: Option[];
  menuClassName?: string;
  buttonClassName?: string;
  onOptionSelect?: (option: Option) => void;
}

const Dropdown: FC<DropdownProps> = ({
  children,
  options,
  menuClassName,
  buttonClassName,
  onOptionSelect,
}) => {
  const ddRef = useRef<HTMLDivElement>(null);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  //on outside click close menu
  useOnClickOutside(ddRef, () => setMenuVisible(false));

  const handleScroll = useCallback(() => {
    if (menuVisible) {
      setMenuVisible(false);
    }
  }, [setMenuVisible, menuVisible]);

  //listen to scroll event and close menu on scroll
  useEffect(() => {
    menuVisible && window.addEventListener("scroll", handleScroll);
    return () => {
      menuVisible && window.removeEventListener("scroll", handleScroll);
    };
  }, [menuVisible, handleScroll]);

  return (
    <div className={classes.dropdown} ref={ddRef}>
      <Button
        variant={ButtonVariant.custom}
        size={ButtonSize.custom}
        hoverAnimationEnabled={false}
        onClick={() => setMenuVisible((prev) => !prev)}
        className={clsx(buttonClassName)}
      >
        {children}
      </Button>
      {menuVisible && options?.length ? (
        <ul
          className={clsx(classes.dropdownMenu, menuClassName, {
            block: menuVisible,
          })}
        >
          {options.map((opt, index) => {
            const isLastItem = index === options?.length - 1;
            return (
              <li
                key={opt.value}
                onClick={() => {
                  onOptionSelect?.(opt);
                  setMenuVisible(false);
                }}
                className={clsx(
                  classes.dropdownMenuItem,
                  !isLastItem ? classes.dropdownDivider : ""
                )}
              >
                {opt.label}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
