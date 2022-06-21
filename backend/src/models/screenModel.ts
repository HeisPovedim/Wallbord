import mongoose from 'mongoose';

const screenSchema = new mongoose.Schema({
  screenType: { type: String, required: true, unique: true },
  priority: { type: Number, required: true },
  importance: { type: Number, required: true },
  repetition: { type: Number, required: true },
  showPeriod: { type: Number, required: true },
  eventData: { type: Array },
});

const Screen = mongoose.model('Screen', screenSchema);

export { Screen };
