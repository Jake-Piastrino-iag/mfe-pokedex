import bcrypt from "bcrypt";

const salt = bcrypt.genSaltSync(10);

export const hashedPassword = (password: string) => {
  return bcrypt.hashSync(password, salt);
};
