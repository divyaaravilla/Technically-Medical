// handle all errors
export const errorHandler = (error, req, res, next) => {
  const errStatus = error.status || 500;
  const errMessage = error.message || "Oops! Something went wrong";
  return res.status(errStatus).json({ message: errMessage });
};
