import { Response } from "express";

export abstract class Res {

    static success = ({ message, info, res }: { message: string, info: any, res: Response }): Response => {

        return res.status(200).send({
            message,
            status: 200,
            success: true,
            info
        });
    }

    static error = (message: string, res: Response, info: any = null, status: number = 500): Response => {

        return res.status(status).send({
            message,
            status,
            success: false,
            info
        });

    }

    public static info = ({ info, res }: { info: any, res: Response }): Response => {
        return res
            .status(200)
            .send({
                success: true,
                status: 200,
                info
            });

    }
}
