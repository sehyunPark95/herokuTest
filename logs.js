const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logsSchema  = new Schema({
    Data:Array,
    requestUrl: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('logs',logsSchema )