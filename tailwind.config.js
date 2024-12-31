/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export const content = [
  "./src/**/*.{js,jsx,ts,tsx,mdx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
];
export const theme = {
  extend: {
    fontFamily: {
      roboto: ["Roboto", "serif"],
      lora: ['"Lora"', "serif"]
    }
  }
};
export const variants = {
  extend: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
    opacity: ["disabled", "group-disabled"],
    backgroundColor: ["disabled", "group-disabled"],
    textColor: ["disabled", "group-disabled"],
    padding: ["hover"],
    cursor: ["disabled", "group-disabled"]
  }
};
// eslint-disable-next-line @typescript-eslint/no-require-imports
export const plugins = [require("tailwindcss-interaction-variants"), nextui()];
