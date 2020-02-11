const newSchema = {
    createdAt: { type: Date, default: Date.now },
    title: String,
    description: String,
}

module.exports = newSchema