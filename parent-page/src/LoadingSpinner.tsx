import React from "react";
import "./LoadingSpinner.css";
interface IProps {}

export function LoadingSpinner({}: IProps) {
  return <div className="lds-dual-ring" />;
}
