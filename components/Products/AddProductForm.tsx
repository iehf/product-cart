"use client";

import { useState } from "react";
import Image from "next/image";
import classes from "@/components/Products/AddProductForm.module.css";

interface AddProductFormProps {
  onClose: () => void;
}

const AddProductForm = ({ onClose }: AddProductFormProps) => {
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const price = parseFloat(formData.get("price") as string);
    const category = formData.get("category") as string;
    const image = formData.get("image") as File;

    if (!name || !price || !category || !image?.name) {
      setError("All fields are required.");
      return;
    }

    console.log({ name, price, category, image });
    onClose();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.field}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Running Shoes" />
      </div>

      <div className={classes.field}>
        <label htmlFor="price">Price ($)</label>
        <input id="price" name="price" type="number" step="0.01" min="0" placeholder="29.99" />
      </div>

      <div className={classes.field}>
        <label htmlFor="category">Category</label>
        <input id="category" name="category" type="text" placeholder="Sport" />
      </div>

      <div className={classes.field}>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          name="image"
          type="file"
          accept="image/*"
          className={classes.fileInputHidden}
          onChange={handleImageChange}
        />
        <label htmlFor="image" className={classes.imageUpload}>
          {preview ? (
            <Image src={preview} alt="preview" fill className={classes.previewImg} />
          ) : (
            <span className={classes.uploadText}>+ Add Image</span>
          )}
        </label>
      </div>

      {error && <p className={classes.error}>{error}</p>}

      <div className={classes.actions}>
        <button type="button" className={classes.cancelBtn} onClick={onClose}>
          Cancel
        </button>
        <button type="submit" className={classes.submitBtn}>
          Add Product
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
