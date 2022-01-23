const mongoose = require("mongoose");
const schema = mongoose.Schema;

const cartSchema = new schema({
    title:{
        type: schema.Types.String,
    },
    wholeText: {
        type: schema.Types.String,
        required: true,
    },
    summary:{
        type: schema.Types.String,
    },
    date: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model("text", cartSchema);