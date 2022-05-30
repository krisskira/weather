import { Request, Response } from "express";

export interface Controller {
    (request: Request, response: Response): Promise<void>;
    path: string;
}
