const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  toJSON: {
    transform(doc, ret) {
      // eslint-disable-next-line no-param-reassign
      delete ret.password;
      return ret;
    },
  },
});

userSchema.pre('save', async function checkPassword(next) {
  // 'this' is the user document
  if (!this.isModified('password')) next();
  // Replace the password with the computed hash
  else this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
});

module.exports = mongoose.model('User', userSchema);
