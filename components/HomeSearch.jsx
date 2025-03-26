"use client";
import React, { useState } from "react";
import { Search, Camera, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDropzone } from "react-dropzone";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const HomeSearch = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchImage, setSearchImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isImageSearchActive, setIsImageSearchActive] = useState(false);

  const handleTextSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm) {
      toast.error("Please enter a search term");
      return;
    }

    router.push(`/cars?search=${encodeURIComponent(searchTerm)}`);
  };
  const handleImageSearch = async (e) => {
    e.preventDefault();

    if (!searchImage) {
      toast.error("Please upload an image");
      return;
    }

    // add logic to upload image to supabase
    // add logic to analyze image
    // add logic to display results
  };

  //   const { getRootProps, getInputProps, isDragActive, isDragReject } =
  //     useDropzone({
  //       accept: { "image/*": [".png", ".jpg", ".jpeg"] },
  //       maxSize: 5 * 1024 * 1024,
  //       onDrop: (acceptedFiles) => {
  //         setSearchImage(acceptedFiles[0]);
  //         setImagePreview(URL.createObjectURL(acceptedFiles[0]));
  //       },
  //       onDragEnter: () => setIsDragActive(true),
  //       onDragLeave: () => setIsDragActive(false),
  //       onDragOver: (e) => e.preventDefault(),
  //       onDrop: (e) => e.preventDefault(),
  //     });

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size must be less than 5MB");
        return;
      }

      setIsUploading(true);
      setSearchImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setIsUploading(false);
        toast.success("Image uploaded successfully");
      };

      reader.onerror = () => {
        setIsUploading(false);
        toast.error("Failed to upload image");
      };

      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: {
        "image/*": [".png", ".jpg", ".jpeg"],
      },
      maxFiles: 1,
    });

  return (
    <div className="relative">
      <form
        onSubmit={handleTextSubmit}
        className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-2 rounded-2xl"
      >
        <div className="flex items-center bg-white rounded-xl overflow-hidden">
          <Search className="w-5 h-5 ml-4" />
          <div className="flex-1 p-3">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by make, model, or features..."
              className="w-full focus:outline-none text-gray-700 text-lg"
            />
          </div>
          <div className="flex items-center space-x-4 pr-4">
            <Camera
              size={35}
              onClick={() => setIsImageSearchActive(!isImageSearchActive)}
              className="cursor-pointer rounded-xl p-1.5"
              style={{
                background: isImageSearchActive ? "black" : "",
                color: isImageSearchActive ? "white" : "",
              }}
            />
            <Button type="submit" className="rounded-full">
              Search
            </Button>
          </div>
        </div>
      </form>

      {isImageSearchActive && (
        <div className="mt-4">
          <form onSubmit={handleImageSearch} className="space-y-4">
            <div className="max-w-2xl mx-auto border-2 border-dashed border-gray-300 rounded-3xl p-6 text-center">
              {imagePreview ? (
                <div className="flex flex-col items-center">
                  <img
                    src={imagePreview}
                    alt="Car preview"
                    className="h-40 object-contain mb-4"
                  />
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchImage(null);
                      setImagePreview("");
                      toast.info("Image removed");
                    }}
                  >
                    Remove Image
                  </Button>
                </div>
              ) : (
                <div {...getRootProps()} className="cursor-pointer">
                  <input {...getInputProps()} />
                  <div className="flex flex-col items-center">
                    <Upload className="h-12 w-12 text-gray-400 mb-2" />
                    <p className="text-gray-500 mb-2">
                      {isDragActive && !isDragReject
                        ? "Leave the file here to upload"
                        : "Drag & drop a car image or click to select"}
                    </p>
                    {isDragReject && (
                      <p className="text-red-500 mb-2">Invalid image type</p>
                    )}
                    <p className="text-gray-400 text-sm">
                      Supports: JPG, PNG (max 5MB)
                    </p>
                  </div>
                </div>
              )}
            </div>

            {imagePreview && (
              <Button
                type="submit"
                className="w-full"
                disabled={isUploading || isProcessing}
              >
                {isUploading
                  ? "Uploading..."
                  : isProcessing
                  ? "Analyzing image..."
                  : "Search with this Image"}
              </Button>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default HomeSearch;
