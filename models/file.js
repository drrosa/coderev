const mongoose = require('mongoose');

const { Schema } = mongoose;

const fileSchema = new Schema({
  filename: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  contentLog: {
    type: [String],
    default: null,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('File', fileSchema);
