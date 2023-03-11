import React, { useEffect, useState } from "react";
import { productAddForm } from "../../utils/data/formData/FormData";
import Header from "../../components/header/Header";
import { useForm } from "react-hook-form";
import Textfield from "../../components/textField/Textfield";
import { Button } from "@mui/material";
import { getApi, putApi } from "../../utils/service/axiosCall";
import { useParams, useNavigate } from "react-router-dom";
import { imageUploader } from "../../utils/service/imageUploader";
import { apiPath, baseUrlImage } from "../../utils/service/api";
import { useDispatch, useSelector } from "react-redux";
import { getProductbyid } from "../../redux/features/productSlice";
export default function ProductEdit() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  let { id } = useParams();
  const [addedPhotos, setAddedPhotos] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getProductbyid(id));
  }, []);

  var {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: async () => await getApi(`product/find/${id}`),
  });

  const onSubmit = (data) => {
    if (addedPhotos.length > 0) {
      data.images = addedPhotos;
      putApi(`${apiPath.getproduct}${id}`, data)
        .then(navigate("/listproduct"))
        .catch((err) => console.log(err));
    } else {
      putApi(`${apiPath.getproduct}${id}`, data)
        .then(navigate("/listproduct"))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="px-10">
      <Header
        title="Edit a product"
        tagLine="Make changes to your products on the fly"
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
                  isedit={true}
                />
                <small>{form.tagline}</small>
              </div>
            ))}
            <div className="w-full flex gap-3">
              {/* <button>save</button> */}
              <Button variant="contained" type="submit">
                Save
              </Button>
              {/* <Button variant="outlined">Cancel</Button> */}
            </div>
          </form>
        </section>
        <section className="p-5">
          <div className="h-[300px]">
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
            <div className="h-[200px] mt-3 grid grid-cols-3 gap-3">
              {addedPhotos.length > 0
                ? addedPhotos.map((link, index) => (
                    <div
                      className="w-[100%] h-[200px] flex items-center text-gray-500"
                      key={index}
                    >
                      <img
                        className="w-[100%] h-[100%] object-contain"
                        src={`${baseUrlImage}` + link}
                        alt=""
                      />
                    </div>
                  ))
                : product?.images?.map((pic, index) => (
                    <div
                      className="w-[100%] h-[200px] flex items-center text-gray-500"
                      key={index}
                    >
                      <img
                        className="w-[100%] h-[100%] object-contain"
                        src={`${baseUrlImage}${pic}`}
                        alt=""
                      />
                    </div>
                  ))}
              {addedPhotos.length < 3 ? (
                <div className="w-[100%] h-[200px] flex items-center text-gray-500">
                  <p>Image perview section</p>
                </div>
              ) : null}
            </div>
            <small className="text-gray-400">
              You need atlest 3 images,Pay attention to the quality of the
              picture you add, comply with the background color standards.
            </small>
          </div>
        </section>
      </div>
    </div>
  );
}
