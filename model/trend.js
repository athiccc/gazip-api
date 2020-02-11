const newSchema = {
    createdAt: { type: Date, default: Date.now },
    name: String,
    meaning: String,
    type: String,
    url: String,
    img: String,
}

module.exports = newSchema