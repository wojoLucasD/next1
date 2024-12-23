"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();

  const imageInput = useRef();

  function HandlePick() {
    imageInput.current.click();
  }

  function HandleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="selected by user"
              fill
              style={{ objectFit: "cover" }}
            ></Image>
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpg"
          name={name}
          ref={imageInput}
          onChange={HandleImageChange}
        />
        <button onClick={HandlePick} className={classes.button} type="button">
          Pick an image
        </button>
      </div>
    </div>
  );
}
