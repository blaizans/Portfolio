import React from "react";

/**
 * Shows the final value straight away. It used to count up from 0 on scroll,
 * which left "0+" in screenshots, link previews and with JavaScript off.
 */
export function Counter({ value, suffix = "" }) {
  return (
    <span style={{ fontVariantNumeric: "tabular-nums" }}>
      {value}
      {suffix}
    </span>
  );
}
