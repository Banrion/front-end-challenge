// Generate an id for a car since they do not have one
export default function generateCarId({ year, make, model }) {
  return `${year} ${make} ${model}`;
}
