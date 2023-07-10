import { useState } from "react";

export default function BtnForms({ children, OnSubmit }) {
  return <button onSubmit={OnSubmit}> {children} </button>;
}
