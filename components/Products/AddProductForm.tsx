"use client";

import { useActionState, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import classes from "@/components/Products/AddProductForm.module.css";
import { submitProduct, ProductFormState } from "@/lib/actions/productActions";

interface AddProductFormProps {
  onClose: () => void;
}

const initialState: ProductFormState = { errors: {} };

const AddProductForm = ({ onClose }: AddProductFormProps) => {
  const [formState, formAction, isPending] = useActionState(
    submitProduct,
    initialState,
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (formState.success) onClose();
  }, [formState.success, onClose]);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      setSelectedFile(file);
      if (file) setPreview(URL.createObjectURL(file));
    },
    [],
  );

  const handleSubmit = useCallback(
    (formData: FormData) => {
      if (selectedFile) formData.set("image", selectedFile);
      formAction(formData);
    },
    [selectedFile, formAction],
  );

  return (
    <form className={classes.form} action={handleSubmit}>
      <div className={classes.field}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Running Shoes"
          defaultValue={formState.values?.name}
        />
        {formState.errors.name && (
          <p className={classes.error}>{formState.errors.name}</p>
        )}
      </div>

      <div className={classes.field}>
        <label htmlFor="price">Price ($)</label>
        <input
          id="price"
          name="price"
          type="number"
          step="0.01"
          min="0"
          placeholder="29.99"
          defaultValue={formState.values?.price}
        />
        {formState.errors.price && (
          <p className={classes.error}>{formState.errors.price}</p>
        )}
      </div>

      <div className={classes.field}>
        <label htmlFor="category">Category</label>
        <input
          id="category"
          name="category"
          type="text"
          placeholder="Sport"
          defaultValue={formState.values?.category}
        />
        {formState.errors.category && (
          <p className={classes.error}>{formState.errors.category}</p>
        )}
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
            <Image
              src={preview}
              alt="preview"
              fill
              className={classes.previewImg}
            />
          ) : (
            <span className={classes.uploadText}>+ Add Image</span>
          )}
        </label>
        {formState.errors.image && (
          <p className={classes.error}>{formState.errors.image}</p>
        )}
      </div>

      <div className={classes.actions}>
        <button type="button" className={classes.cancelBtn} onClick={onClose}>
          Cancel
        </button>
        <button type="submit" className={classes.submitBtn} disabled={isPending}>
          {isPending ? "Adding..." : "Add Product"}
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
