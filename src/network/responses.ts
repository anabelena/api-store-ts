//importando Objeto Response de express
import { Response } from "express"


interface IResponse {
    res:Response
    data:any
    status:number
}

export function responseSuccess({res,data,status}:IResponse){
    return res.status(status).json({
        ok:true,
        data,
    })
}

export function responseError({res,data,status=500}:IResponse){
    return res.status(status).json({
        ok:false,
        data,
    })
}