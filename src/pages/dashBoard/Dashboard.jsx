import React, { useState } from "react";
import DasboardCard from "../../components/cards/DasboardCard";
import Header from "../../components/header/Header";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { productAddForm } from "../../utils/data/formData/FormData";
import Textfield from "../../components/textField/Textfield";
import PhotosUploader from "../../components/uploader/PhotosUploader";

export default function Dashboard() {
  return (
    <div>
      <div className="flex gap-10 items-center justify-center flex-wrap">
        <DasboardCard title={"TOP"} value={125} icon={"add-circle-outline"} />
        <DasboardCard title={"TOP"} value={125} icon={"add-circle-outline"} />
        <DasboardCard title={"TOP"} value={125} icon={"add-circle-outline"} />
        <DasboardCard title={"TOP"} value={125} icon={"add-circle-outline"} />
      </div>

      <div></div>

      <div className="h-screen"></div>
    </div>
  );
}
