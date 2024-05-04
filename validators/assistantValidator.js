const { z } = require('zod');

const assistantSchema = z.object({
  name: z.string().min(1),
  mobile: z.string().min(1),
  email: z.string().email(),
  salary: z.number().positive(),
  city: z.string().min(1),
  country: z.string().min(1),
  department: z.string().min(1),
  role: z.string().min(1)
});

// Parse function to validate and parse the data
const parse = (data) => {
  try {
    const parsedData = assistantSchema.parse(data);
    return parsedData;
  } catch (error) {
    throw new Error(error.errors[0]); // Throw the first validation error message
  }
};

module.exports = {
  create: assistantSchema,
  update: assistantSchema.partial(),
  parse // Export the parse function
};
