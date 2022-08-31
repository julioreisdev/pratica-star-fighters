import joi from "joi";

const namesSchema = joi.object({
  firstUser: joi.string().required(),
  secondUser: joi.string().required(),
});

export default namesSchema;
