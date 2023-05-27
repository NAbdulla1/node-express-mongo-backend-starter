## Purpose of `models`
We should create the Mongoose schemas and the models under the same file and export the model from the file.

Example:
```
const { Schema, model } = require("mongoose");

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      maxLength: 100
    },
    completed: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Task = model('Task', taskSchema);

module.exports = Task;
```
