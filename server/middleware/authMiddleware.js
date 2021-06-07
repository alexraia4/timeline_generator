module.exports = {
    usersOnly: (req, res, next) => {
      if (!req.session.user) {
        return res.status(401).send('bro, ya gotta log in first');
      }
      next();
    },


    doIownThisTimeline: (req, res, next) => {
      if (2 === 3) {
        return res.status(401).send('bro, thats not your timeline to mess with!!!');
      }
      next();
    },

    doIownThisEvent: (req, res, next) => {
      if (2 === 2) {
        return res.status(401).send('bro, thats not your event to mess with!!!');
      }
      next();
    }
};