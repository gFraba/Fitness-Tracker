const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// workout model
const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now,
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter the type of exercise!"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter the name of the exercise!"
                },
                duration: {
                    type: Number,
                    trim: true,
                    required: "Enter the duration of your exercise!"
                },
                weight: {
                    type: Number,
                    trim: true,
                    required: "Enter the weight of your exercise!"
                },
                reps: {
                    type: Number,
                    trim: true,
                    required: "Enter the reps of your exercise!"
                },
                sets: {
                    type: Number,
                    trim: true,
                    required: "Enter the sets of your exercise!"
                },
                distance: {
                    type: Number,
                    trim: true,
                    required: "Enter the distance of your exercise!"
                }
            }
        ],
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// graph for totalDuration
WorkoutSchema.virtual("totalDuration").get(function () {
    // show exercise to the current duration
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

WorkoutSchema.virtual("totalDistance").get(function () {
    // show exercise to the total distance
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.distance;
    }, 0);
});

const workout = mongoose.model("workout", WorkoutSchema);

module.exports = workout;