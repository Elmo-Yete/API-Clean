const mongoose = require ("mongoose")

const mentorSchema = new mongoose.Schema ({
    name: {
        type:String,
        minlength:3,
        maxlength:12,
        requried:true
    },
    age: {
        type:Number,
        min:18,
        max:100,
        required:true
    },
    generations: [{
        name: {
            type:String,
            minlength:2,
            maxlength:12,
            requried:true
        },
        isActive: {
            type:Boolean,
            required:true
        }
    }]
})

module.exports = mongoose.model("mentors",mentorSchema,"Mentors")