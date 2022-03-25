import { Schema } from "mongoose";
import { UserType } from "@schema";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

const User = new Schema<UserType>(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

User.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
    if (err) {
      next(err);
    }
    bcrypt.hash(user.password, salt, (e, hash) => {
      if (e) {
        return next(e);
      }
      user.password = hash;
      next();
    });
  });
});

User.methods = {
  checkPassword(password: string) {
    return bcrypt.compareSync(password, this.passport);
  },
};

export default User;
