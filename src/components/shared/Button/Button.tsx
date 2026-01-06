import { MdOutlineAdd, MdOutlineAddBox } from "react-icons/md";
import "./Button.scss";
import { ButtonHTMLAttributes } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong, FaFileExport } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  title?: string;
  label?: string;
  type?: string;
  customClass?: string;
  onClick?: () => void;
  isLink?: boolean;
  link?: string;
  isLoading?: boolean;
  state?: any;
};

export const AddButton = React.forwardRef<HTMLButtonElement, ButtonPropsType>(
  (props, ref) => {
    const {
      title,
      label,
      type,
      customClass,
      onClick,
      isLink,
      link,
      state,
      isLoading,
    } = props;
    return (
      <>
        {isLink === true ? (
          <NavLink
            title={title}
            className={`btn theme__btn add__btn ${customClass}`}
            type={type}
            to={link || ""}
            state={state}
          >
            <span className="pe-2">
              <MdOutlineAddBox size={23} />
            </span>
            <span>{label}</span>
          </NavLink>
        ) : (
          <button
            title={title}
            className={`btn theme__btn add__btn ${customClass}`}
            type={type}
            onClick={onClick}
            ref={ref}
            disabled={isLoading}
          >
            <span className="pe-2">
              <MdOutlineAddBox size={23} />
            </span>

            {!!isLoading && "En cours"}
            {!isLoading && <span>{label}</span>}
          </button>
        )}
      </>
    );
  }
);

export const UpdateButton = React.forwardRef<
  HTMLButtonElement,
  ButtonPropsType
>((props, ref) => {
  const { title, label, type, customClass, onClick, isLink, link, state } =
    props;
  return (
    <>
      {isLink === true ? (
        <NavLink
          title={title}
          className={`btn theme__btn add__btn ${customClass}`}
          type={type}
          to={link || ""}
          state={state}
        >
          <span>{label}</span>
        </NavLink>
      ) : (
        <button
          title={title}
          className={`btn theme__btn add__btn ${customClass}`}
          type={type}
          onClick={onClick}
          ref={ref}
        >
          <span className="pe-2">
            <MdOutlineAddBox size={23} />
          </span>
          <span>{label}</span>
        </button>
      )}
    </>
  );
});

export const SaveButton = React.forwardRef<HTMLButtonElement, ButtonPropsType>(
  (props, ref) => {
    const { title, label, type, customClass, onClick, isLoading, disabled } =
      props;
    return (
      <>
        <button
          title={title}
          className={`btn theme__btn modal__btn ${customClass}`}
          type={type}
          onClick={onClick}
          ref={ref}
          disabled={disabled}
        >
          {!!isLoading && "En cours"}
          {!isLoading && <span>{label}</span>}
        </button>
      </>
    );
  }
);

export const CancelButton = React.forwardRef<
  HTMLButtonElement,
  ButtonPropsType
>((props, ref) => {
  const { title, label, customClass, onClick, disabled = false } = props;
  return (
    <>
      <button
        title={title}
        className={`btn cancel__btn ${customClass}`}
        onClick={onClick}
        type="button"
        ref={ref}
        disabled={disabled}
      >
        <span>{label}</span>
      </button>
    </>
  );
});

export const GoBackButton = React.forwardRef<
  HTMLButtonElement,
  ButtonPropsType
>((props, ref) => {
  const { title, label, customClass } = props;
  let navigate = useNavigate();
  return (
    <>
      <button
        title={title}
        className={`btn go_back__btn ${customClass}`}
        onClick={() => navigate(-1)}
        ref={ref}
      >
        <span>
          <FaArrowLeftLong color="#009EDB" />
        </span>
        <span>{label}</span>
      </button>
    </>
  );
});

export const LargeButton = React.forwardRef<HTMLButtonElement, ButtonPropsType>(
  (props, ref) => {
    const { title, label, type, customClass, onClick } = props;
    return (
      <>
        <button
          title={title}
          className={`btn large__btn bg-orange-500 hover:bg-orange-700 ${customClass}`}
          type={type}
          onClick={onClick}
          ref={ref}
        >
          <span>{label}</span>
        </button>
      </>
    );
  }
);

export const ExportButton = React.forwardRef<HTMLButtonElement, ButtonPropsType>(
  (props, ref) => {
    const {
      title,
      label,
      type,
      customClass,
      onClick,
      isLink,
      link,
      state,
      isLoading,
    } = props;
    return (
      <>
        {isLink === true ? (
          <NavLink
            title={title}
            className={`btn theme__btn add__btn ${customClass}`}
            type={type}
            to={link || ""}
            state={state}
          >
            <span className="pe-2">
              <MdOutlineAddBox size={23} />
            </span>
            <span>{label}</span>
          </NavLink>
        ) : (
          <button
            title={title}
            className={`btn theme__btn add__btn ${customClass}`}
            type={type}
            onClick={onClick}
            ref={ref}
            disabled={isLoading}
          >
            <span className="pe-2">
              <FaFileExport size={23} />
            </span>

            {!!isLoading && "En cours"}
            {!isLoading && <span>{label}</span>}
          </button>
        )}
      </>
    );
  }
);