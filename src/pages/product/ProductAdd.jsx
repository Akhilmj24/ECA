import React, { useState } from "react";
import Header from "../../components/header/Header";
import { productAddForm } from "../../utils/data/formData/FormData";
import { useForm } from "react-hook-form";
import Textfield from "../../components/textField/Textfield";
import { Button } from "@mui/material";
import { apiPath, baseUrlImage } from "../../utils/service/api";
import { postApi } from "../../utils/service/axiosCall";
import { imageUploader } from "../../utils/service/imageUploader";
import { toast } from "react-toastify";

export default function ProductAdd() {
  const [addedPhotos, setAddedPhotos] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.orginalprice > data.saleprice) {
      toast.error("Please enter saleprice lesser than orginalprice");
    } else if (addedPhotos.length === 0) {
      toast.error("Please upload images");
    } else if (addedPhotos.length < 3) {
      toast.error("Please upload minimum 3 images");
    } else {
      data.images = addedPhotos;
      data.offer = String(
        (100 * (data.orginalprice - data.saleprice)) / data.orginalprice
      )?.substring(0, 2);
      postApi(data, apiPath.createproduct)
        .then((res) => toast.success(res))
        .then((res) => setAddedPhotos([]))
        .catch((err) => console.log(err));
    }
  };
  const removePhoto = (filename) => {
    setAddedPhotos([...addedPhotos.filter((photo) => photo !== filename)]);
  };
  const selectAsMainPhoto = (filename) => {
    setAddedPhotos([
      filename,
      ...addedPhotos.filter((photo) => photo !== filename),
    ]);
  };
  console.log(addedPhotos);

  return (
    <div className="px-10">
      <Header
        title="Create a product"
        tagLine="Fill out a few deatils to start receiving order from your product"
      />
      <div className="grid grid-cols-2">
        <section className=" p-5 ">
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-wrap  gap-4"
          >
            {productAddForm.map((form, index) => (
              <div
                key={index}
                className={`mb-2 md: ${
                  form.rowcount > 2 ? `w-[98%]` : `w-[48%]`
                } `}
              >
                <Textfield
                  {...form}
                  register={register}
                  errors={errors}
                  isedit={false}
                />
                <small>{form.tagline}</small>
              </div>
            ))}
            <div className="w-full flex gap-3">
              <Button variant="contained" type="submit">
                Save
              </Button>
            </div>
          </form>
        </section>
        <section className="p-5">
          <div className="h-[300px]">
            {addedPhotos.length === 3 ? null : (
              <div className="h-[100px] border-2 cursor-pointer border-dashed relative flex justify-center items-center">
                <h1 className="text-gray-400 text-center">
                  Drop your image here, or <br />
                  <span className="text-gray-800 font-semibold">
                    click to browse
                  </span>
                </h1>
                <input
                  type="file"
                  multiple
                  onChange={(e) => imageUploader(e, setAddedPhotos)}
                  className="h-[100px] cursor-pointer w-[100%] absolute opacity-0"
                />
              </div>
            )}
            <div className="h-[200px] mt-3 mb-16 grid grid-cols-3 gap-3">
              {addedPhotos.length > 0 ? (
                addedPhotos.map((link, index) => (
                  <div className="w-[100%] h-[200px] flex items-center text-gray-500">
                    <div className="w-[100%] h-[200px] text-center">
                      <img
                        className="w-[100%] h-[100%] object-contain"
                        src={`${baseUrlImage}` + link}
                        alt=""
                      />
                      <div className="flex flex-col">
                        <button
                          onClick={() => removePhoto(link)}
                          className="text-red-500 tracking-wider cursor-pointer"
                        >
                          Remove
                        </button>
                        {index !== 0 ? (
                          <button
                            onClick={() => selectAsMainPhoto(link)}
                            className="text-green-700 tracking-wider cursor-pointer"
                          >
                            Set as primary
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="w-[100%] h-[200px] flex items-center text-gray-500">
                  <p>Image perview section</p>
                </div>
              )}
              {addedPhotos.length < 3 ? (
                <div className="w-[100%] h-[200px] flex items-center text-gray-500">
                  <p>Image perview section</p>
                </div>
              ) : null}
            </div>
            <small className="text-gray-400 mt-5">
              You need atlest 3 images,Pay attention to the quality of the
              picture you add, comply with the background color standards.
            </small>
          </div>
        </section>
      </div>
    </div>
  );
}
