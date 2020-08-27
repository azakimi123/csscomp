module.exports = {
  isAdmin: (req, res, next) => {
    // check to see if user is admin or not
    // console.log(req.session.users)
    if (!req.session.users.is_admin) {
      return res.status(403).send('You are not an admin');
    }
    next();
  }
}