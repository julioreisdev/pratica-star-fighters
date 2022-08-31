import { Schema } from "joi";
import { NextFunction, Request, Response } from "express";

export function validateSchema(schema: Schema) {
  const value = (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    const { error } = schema.validate(body, {
      abortEarly: false,
    });
    if (error) {
      const erros = error.details.map((d) => d.message);
      return res.status(422).send(erros);
    }
    res.locals.body = body;
    next();
  };
  return value;
}
