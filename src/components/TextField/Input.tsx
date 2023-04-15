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
import classes from "./style.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  onReset?: () => void;
  labelText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, onReset, labelText, ...props }, ref) => {
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
      <div className={classes.fieldWrapper}>
        {labelText ? (
          <label htmlFor={props.name} className={classes.fieldLabel}>
            {labelText}
          </label>
        ) : null}

        <input
          id={props.name}
          value={value}
          onChange={onChange}
          ref={(e) => {
            // fix to assign passed ref
            // ref?.(e);
            inputRef.current = e;
          }}
          className={clsx(
            classes.fieldBase,
            { [classes.fieldInvalid]: Boolean(error) },
            { [classes.fieldValid]: !Boolean(error) },
            { "pr-16 brd": value },
            className
          )}
          {...props}
        />

        {/* clear button */}
        {value ? (
          <Button
            tabIndex={-1}
            onClick={onClearButtonClick}
            variant={ButtonVariant.custom}
            size={ButtonSize.custom}
            className={clsx(classes.clearButton, {
              "pt-[44px]": Boolean(labelText),
            })}
          >
            <CloseIcon className={classes.clearIcon} />
          </Button>
        ) : null}

        {/* error text */}
        {error ? <span className={classes.errorText}>{error}</span> : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
