import mongoose from 'mongoose';
import validator from 'validator';

const StreamerSchema = new mongoose.Schema({
  streamerId: {
    type: Number,
    required: [true, 'Please provide an ID for this streamer.'],
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: [true, 'Please provide a name for this streamer.'],
    maxlength: [40, 'Name cannot be more than 40 characters'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for this streamer.'],
    trim: true,
  },
  score: {
    type: Number,
    default: 0,
  },
  avatarId: {
    type: Number,
    // default: () => {
    //   Math.floor(Math.random() * 2);
    // },
  },
  links: {
    type: [
      {
        platform: {
          type: String,
          required: [true, 'Please provide a proper platform name for this link.'],
          enum: ['twitch', 'youtube', 'kick', 'tiktok', 'rumble'],
          trim: true,
        },
        link: {
          type: String,
          required: [true, 'Please provide a proper link name for this platform.'],
          trim: true,
          validate: validator.isURL,
        },
      },
    ],
    required: [true, 'Please streamer links.'],
    minlength: [1, 'At least one link must be provided.'],
  },
});

export const StreamerModel = mongoose.models.Streamer || mongoose.model('Streamer', StreamerSchema);
