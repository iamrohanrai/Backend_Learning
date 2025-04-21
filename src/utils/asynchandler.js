const asyncHandler = (func) => {
  (req, res, next) => {
    Promise.resolve(func(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// const asynschalndler = () => {}
// const asynschalndler = (func) => {}
// const asynschalndler = (func) => {() => {}}

// const asyncHandler = (func) => async (req, res, next) => {
//   try {
//     await func(req, res, next)
//   } catch (error) {
//     res.status(error.code ?? 201).json({
//       success: false,
//       message: error.message
//     })
//   }
// };
