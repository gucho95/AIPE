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
import classes from "./style.module.css";

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
      <div className={classes.fieldWrapper}>
        {labelText ? (
          // fix htmlFor to work correctly
          <label htmlFor={props.name} className={classes.fieldLabel}>
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
            "min-h-[143px] py-8 no-scrollBar resize-none",
            classes.fieldBase,
            { [classes.fieldInvalid]: Boolean(error) },
            { [classes.fieldValid]: !Boolean(error) },
            { "pr-16": Boolean(value) },
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
              "pb-3": Boolean(labelText),
              "pb-14": !Boolean(labelText),
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
Textarea.displayName = "Input";

export default Textarea;
