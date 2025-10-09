export const ageClassifier = (req, res, next) => {
  const { age } = req.body;

  // TODO: Simplify conditionals
  if (age) {
    if (age < 1) {
      req.body.ageClassifier = 'chick';
    } else if (age > 1 && age < 3) {
      req.body.ageClassifier = 'teen';
    } else {
      req.body.ageClassifier = 'old';
    }
  }

  next();
};
