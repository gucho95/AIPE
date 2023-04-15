"use client";
import {
  ChangeEvent,
  InputHTMLAttributes,
  forwardRef,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import Button, { ButtonSize, ButtonVariant } from "../Button";
import CloseIcon from "../Icons/Close";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  onReset?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, onReset, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [value, setValue] = useState<string>("");

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      props.onChange?.(event);
      setValue(value);
    };

    const onClearButtonClick = () => {
      setValue("");
      onReset?.();
      inputRef.current?.focus();
    };

    return (
      <div className="relative">
        <input
          value={value}
          onChange={onChange}
          ref={(e) => {
            // fix to assign passed ref
            // ref?.(e);
            inputRef.current = e;
          }}
          className={clsx(
            "outline-none ring-2 ring-primary h-[84px] rounded-[10px] px-6 placeholder:text-text-placeholder text-dark",
            { "ring-danger": Boolean(error) },
            {
              "hover:ring-purple-light focus:ring-purple-dark": !Boolean(error),
            },
            { "pr-14": value },
            className
          )}
          {...props}
        />
        {/* clear button */}
        {value ? (
          <Button
            onClick={onClearButtonClick}
            variant={ButtonVariant.custom}
            size={ButtonSize.custom}
            className="absolute top-0 right-0 h-full mr-6 px-2"
          >
            <CloseIcon className="w-3 h-3 stroke-action" />
          </Button>
        ) : null}
        {/* error text */}
        {error ? (
          <span className="text-danger absolute -bottom-3 left-4 flex bg-white px-1">
            {error}
          </span>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
