"use client";

import styles from "./TextField.module.scss";
import errorIcon from "../../assets/images/error.svg";
import { ReactElement, useState } from "react";
import Image from "next/image";

type TextFieldProps = {
  id: string;
  value: any;
  label?: string;
  optionalLabel?: string;
  type?: string;
  error?: string;
  placeholder?: string;
  rightIcon?: ReactElement;
  disabled?: boolean;
  maxLength?: number;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export function TextField({
  id,
  label,
  optionalLabel,
  value,
  type = "text",
  error = "",
  placeholder,
  rightIcon,
  disabled = false,
  maxLength,
  handleChange,
}: TextFieldProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div className={`${styles.container} ${disabled ? styles.disabled : ""}`}>
      {label && (
        <label htmlFor={id}>
          <span>{label}</span>
          {optionalLabel && (
            <span className={styles.optionalLabel}>{optionalLabel}</span>
          )}
        </label>
      )}
      <div
        className={`${styles.inputWrapper} ${
          type === "textarea" ? styles.textareaWrapper : ""
        } ${focused ? styles.focused : ""}`}
      >
        {type === "textarea" ? (
          <textarea
            id={id}
            name={id}
            value={value}
            className={`${styles.textarea} ${
              error !== "" ? styles.error : ""
            } ${rightIcon ? styles.paddingRight : ""}`}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => handleChange(e)}
          ></textarea>
        ) : (
          <input
            type={type}
            id={id}
            name={id}
            value={value}
            className={`${styles.input} ${error !== "" ? styles.error : ""} ${
              rightIcon ? styles.paddingRight : ""
            }`}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            onChange={(e) => handleChange(e)}
          ></input>
        )}
        {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
      </div>
      {(error !== "" || maxLength) && (
        <div className={styles.belowWrapper}>
          {error !== "" ? (
            <div className={styles.errorWrapper}>
              <Image priority src={errorIcon} alt="error" />
              <span>{error}</span>
            </div>
          ) : (
            <div></div>
          )}
          {maxLength ? (
            <div className={styles.lengthWrapper}>
              <span>{`${value.toString().split("").length}/${maxLength}`}</span>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
}
