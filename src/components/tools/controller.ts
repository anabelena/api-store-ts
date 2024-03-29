import { responseSuccess, responseError } from "../../network/responses";
import { handleResponseError } from "../../utils";
import { uploadFile } from "../../services/aws";
import type { Request, Response } from "express";
import type { FileArray, UploadedFile } from "express-fileupload";


export async function storeFile(req: Request, res: Response) {
  try {
    if (!req.files) {
      return responseError({
        res,
        data: "Not files found",
        status: 400,
      });
    }
    
    const { file } = req.files as FileArray;

    const {location,data} = await uploadFile(file as UploadedFile)

    return responseSuccess({
        res,
        data:{
            location,
            data,
        }
    })

  } catch (error) {
    return handleResponseError(res,error)
  }
}
