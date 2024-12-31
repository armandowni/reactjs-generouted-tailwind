import { jwtDecode } from "jwt-decode";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const convertDay = (day: string) => {
  switch (day) {
    case "MONDAY":
      return "Senin";
    case "TUESDAY":
      return "Selasa";
    case "WEDNESDAY":
      return "Rabu";
    case "THURSDAY":
      return "Kamis";
    case "FRIDAY":
      return "Jumat";
    case "SATURDAY":
      return "Sabtu";
    case "SUNDAY":
      return "Minggu";
  }
};
export const convertNumbertoDay = (day: string | number) => {
  switch (day) {
    case 0:
      return "Senin";
    case 1:
      return "Selasa";
    case 2:
      return "Rabu";
    case 3:
      return "Kamis";
    case 4:
      return "Jumat";
    case 5:
      return "Sabtu";
    case 6:
      return "Minggu";
  }
};

export const convertDaytoNumber = (day: string) => {
  switch (day) {
    case "MONDAY":
      return 0;
    case "TUESDAY":
      return 1;
    case "WEDNESDAY":
      return 2;
    case "THURSDAY":
      return 3;
    case "FRIDAY":
      return 4;
    case "SATURDAY":
      return 5;
    case "SUNDAY":
      return 6;
  }
};

export const convertChangeRequest = (day: string) => {
  switch (day) {
    case "changeProgram":
      return 4;
    case "changePeminatan":
      return 8;
    case "changeSekolah":
      return 16;
  }
};

export const days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];

export const numberFormat = Intl.NumberFormat("id", {
  maximumFractionDigits: 1
});

export const mediumNumberFormat = Intl.NumberFormat("id", {
  maximumFractionDigits: 2
});

export const longNumberFormat = Intl.NumberFormat("id", {
  maximumFractionDigits: 4,
  minimumFractionDigits: 4
});

export const dateFormatWithTime = Intl.DateTimeFormat("id", {
  dateStyle: "full",
  timeStyle: "short"
});

export const dateFormat = Intl.DateTimeFormat("id", {
  dateStyle: "full"
});

export const shortDateFormat = Intl.DateTimeFormat("id", {
  dateStyle: "medium"
});

export const monthDateFormat = Intl.DateTimeFormat("id", {
  month: "long",
  year: "numeric"
});

export const monthOnlyDateFormat = Intl.DateTimeFormat("id", {
  month: "long"
});

export const convertDate = (data?: any) => {
  const date = data ? new Date(data) : new Date();
  return date
    ? `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`
    : "";
};

export const searchMonthYear = ({ dateInput }: any) => {
  const dateSlice = dateInput?.split("-");
  const month = parseInt(dateSlice[1]);

  return { month, year: dateSlice[0] };
};

export function splitUppercase(str: string) {
  // Use a regular expression to split the string
  return str?.split(/(?=[A-Z])/);
}

export function replaceUppercaseWithSpace(str: string) {
  return str?.replace(/[A-Z]/g, (match) => ` ${match.toLowerCase()}`);
}

export const decodeToken = (token?: string) => {
  if (!token) throw new Error("token cannot null");

  return jwtDecode(token);
};

export const checkStatusHttpResponseCode = (statusCode: number) => {
  if (statusCode >= 200 && statusCode < 400) return "success";
  else if (statusCode >= 400 && statusCode < 600) return "danger";
  else if (statusCode >= 100 && statusCode < 200) return "warning";
  else return "default";
};
