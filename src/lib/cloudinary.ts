import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default cloudinary;

/**
 * Upload a base64 or remote image and return the secure URL.
 * Use this from server actions / API routes only.
 */
export async function uploadImage(
  file: string | Buffer,
  folder = "mbdc-2027"
): Promise<string> {
  const result = await cloudinary.uploader.upload(
    typeof file === "string" ? file : `data:image/jpeg;base64,${file.toString("base64")}`,
    {
      folder,
      resource_type: "image",
      transformation: [{ quality: "auto", fetch_format: "auto" }],
    }
  );
  return result.secure_url;
}
