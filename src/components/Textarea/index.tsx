"use client";
import {
  ChangeEvent,
  ReactNode,
  TextareaHTMLAttributes,
  forwardRef,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import Button, { ButtonSize, ButtonVariant } from "../Button";
import CloseIcon from "../Icons/Close";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  onReset?: () => void;
  labelText?: ReactNode;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, onReset, labelText, ...props }, ref) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [value, setValue] = useState<string>("");

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      const value = event.target.value;
      props.onChange?.(event);
      setValue(value);
    };

    const onClearButtonClick = () => {
      setValue("");
      onReset?.();
      textareaRef.current?.focus();
    };

    return (
      <div className="relative flex flex-col">
        {labelText ? (
          // fix htmlFor to work correctly
          <label htmlFor={props.name} className="pb-3 text-2xl">
            {labelText}
          </label>
        ) : null}
        <textarea
          name={props.name}
          value={value}
          onChange={onChange}
          ref={(e) => {
            // fix to assign passed ref
            // ref?.(e);
            textareaRef.current = e;
          }}
          className={clsx(
            "outline-none ring-2 h-[84px] rounded-[10px] px-9 py-8 placeholder:text-text-placeholder text-dark resize-none min-h-[143px] no-scrollBar w-full",
            { "ring-danger": Boolean(error) },
            {
              "hover:ring-purple-light focus:ring-purple-dark ring-primary":
                !Boolean(error),
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
            className={clsx("absolute top-[38px] right-0 mr-6 px-2", {
              "top-[82px]": labelText,
            })}
          >
            <CloseIcon className="w-3 h-3 stroke-action" />
          </Button>
        ) : null}
        {/* error text */}
        {error ? (
          <span className="text-danger absolute -bottom-2 left-4 flex bg-white px-1">
            {error}
          </span>
        ) : null}
      </div>
    );
  }
);
Textarea.displayName = "Input";

export default Textarea;
