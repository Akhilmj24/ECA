import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";

export default function Textfield({
  label,
  slug,
  required,
  size,
  errortext,
  register,
  errors,
  rowcount,
  maxLength,
  errormaxLength,
  errorPattern,
  type,
  dropdownvalue,
  pattern,
  isedit,
  defaultvalue
}) {
  //   console.log(errors);
  //   const toy = [
  //     { label: "Car", category: "Car" },
  //     { label: "bus", category: "bus" },
  //   ];
  //   const nop = [
  //     { label: "sadas", category: "asd" },
  //     { label: "asd", category: "asd" },
  //   ];
  //   const [categoryItem, setcategoryItem] = useState("");
  //   const [list, setlist] = useState(nop);
  //   useEffect(() => {
  //     if (categoryItem?.category === "Toys") {
  //       setlist(toy);
  //     }
  //   }, [categoryItem]);
  //   console.log(list);

  //   const test = categoryItem?.category;
  // console.log(isedit);
  const alwaysup = { shrink: true };
  return (
    <div className="w-full">
      {type === "dropdown" ? (
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={dropdownvalue}
          fullWidth
          // value={defaultvalue}
          //   onChange={(event, value) =>
          //     slug === "category" ? setcategoryItem(value) : null
          //   }
          defaultValue={defaultvalue}
          size={size}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              InputLabelProps={isedit ? alwaysup : null}
              {...register(slug, { required: required ? required : null })}
              error={
                Object.keys(errors).length > 0
                  ? Object.entries(errors)
                      ?.map(([key, value]) => ({ key, value }))
                      ?.find((item) => item.key === slug)?.value?.type ===
                    "required"
                  : null
              }
              helperText={
                Object.keys(errors).length > 0
                  ? Object.entries(errors)
                      ?.map(([key, value]) => ({ key, value }))
                      ?.find((item) => item.key === slug)?.value?.type ===
                    "required"
                    ? errortext
                    : null
                  : null
              }
            />
          )}
        />
      ) : (
        <TextField
          label={label}
          fullWidth
          id="outlined-size-small"
          defaultValue={defaultvalue}
          multiline
          rows={rowcount}
          size={size}
          InputLabelProps={isedit ? alwaysup : null}
          {...register(slug, {
            required: required ? required : null,
            pattern: pattern.key !== "" ? pattern.key : null,
            maxLength: maxLength,
          })}
          error={
            Object.keys(errors).length > 0
              ? Object.entries(errors)
                  ?.map(([key, value]) => ({ key, value }))
                  ?.find((item) => item.key === slug)?.value?.type ===
                  "required" ||
                Object.entries(errors)
                  ?.map(([key, value]) => ({ key, value }))
                  ?.find((item) => item.key === slug)?.value?.type ===
                  "maxLength" ||
                Object.entries(errors)
                  ?.map(([key, value]) => ({ key, value }))
                  ?.find((item) => item.key === slug)?.value?.type === "pattern"
              : null
          }
          helperText={
            Object.keys(errors).length > 0
              ? Object.entries(errors)
                  ?.map(([key, value]) => ({ key, value }))
                  ?.find((item) => item.key === slug)?.value?.type ===
                "required"
                ? errortext
                : Object.entries(errors)
                    ?.map(([key, value]) => ({ key, value }))
                    ?.find((item) => item.key === slug)?.value?.type ===
                  "maxLength"
                ? errormaxLength
                : Object.entries(errors)
                    ?.map(([key, value]) => ({ key, value }))
                    ?.find((item) => item.key === slug)?.value?.type ===
                  "pattern"
                ? errorPattern
                : null
              : null
          }
        />
      )}
    </div>
  );
}
