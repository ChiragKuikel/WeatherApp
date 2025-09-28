import React, { useState } from "react";
import { PlusCircle, Upload, XCircle } from "lucide-react";

const BlogWriterPage = () => {
  const [blogText, setBlogText] = useState("");
  const [images, setImages] = useState([]);

  const handleTextChange = (e) => {
    setBlogText(e.target.value);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + images.length > 3) {
      alert("You can only upload up to 3 images.");
      return;
    }

    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...imageUrls]);
  };

  const handleSubmit = () => {
    if (!blogText.trim()) {
      alert("Blog content cannot be empty.");
      return;
    }

    console.log("Blog Content:", blogText);
    console.log("Uploaded Images:", images);

    alert("Blog submitted successfully!");
    setBlogText("");
    setImages([]);
  };

  return (
    <div className="flex flex-col items-center min-h-screenp-6 pt-14">
      <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-xl p-6 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 text-black">🌤️ Create a Weather Blog</h2>

        {/* Blog Text Area */}
        <textarea
          className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm bg-white focus:border-blue-400 focus:outline-none transition-all text-black"
          rows="12"
          placeholder="Write your weather blog here..."
          value={blogText}
          onChange={handleTextChange}
        />

        {/* Image Upload */}
        <div className="mt-6">
          <label className="block text-gray-800 font-semibold mb-2">Attach Images (Max: 3)</label>
          <div className="relative w-full">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex items-center justify-center gap-2 w-full border-2 border-dashed border-gray-400 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
              <Upload size={20} className="text-gray-600" />
              <span className="text-gray-600 font-medium">Click to upload</span>
            </div>
          </div>
        </div>

        {/* Image Preview */}
        {images.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mt-4  ">
            {images.map((src, index) => (
              <div key={index} className="relative group">
                <img src={src} alt={`upload-${index}`} className="w-full h-24 object-cover rounded-lg border shadow-md" />
                <button
                  onClick={() => handleRemoveImage(index)}
                  className="absolute -top-7 right-1  text-white p-1 rounded-full opacity-100  transition"
                >
                  <XCircle size={18} color="red"/>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:scale-105 transition transform flex items-center justify-center gap-2"
        >
          <PlusCircle size={20} />
          Submit Blog
        </button>
      </div>
    </div>
  );
};

export default BlogWriterPage;
