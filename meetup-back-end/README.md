# Meetup Registration - Back End
Build the back-end of a single page app that allows a meetup organizer to register attendees for a JS meetup and keep track of who is already registered.

**Note: This prompt is back end only!** The front end is provided for you. You do not need to worry about client code, but you may use the client to confirm that your backend is implemented properly.

## Setup

- [ ] `npm install`
- [ ] `npm run react:compile` to compile the client bundle

## Requirements

- [ ] Complete the mongoose schema for an `Attendee`. The client already expects the following data shape:

| Field          | Type            | Notes                                       |
|----------------|-----------------|---------------------------------------------|
| firstName      | string          |                                             |
| lastName       | string          |                                             |
| email          | string          |                                             |
| shirt          | string          | one of `XS`, `S`, `M`, `L`, `XL`, `XXL`     |
| skillLevel     | string          | one of `beginner`, `intermediate`, `expert` | 

**Note: think about what types of constraints or validation these fields would benefit from**

- [ ] Complete the controllers to service the provided routes:

| Endpoint          | Type   | Operation                 |
|-------------------|--------|---------------------------|
| `/attendees`      | GET    | Get all attendees         |
| `/attendees`      | POST   | Add an attendee           |

## Advanced Content

- Add additional routes and controllers to support editing and deleting attendees.
- Modify the client to support these additional operations.

## Available Resources:

- [MDN](https://developer.mozilla.org/bm/docs/Web/JavaScript)
- [NPM](https://www.npmjs.com/)
- [Node.js Documentation](https://nodejs.org/en/)
- [Express Documentation](https://expressjs.com/)
- [Mongoose Documentation](http://mongoosejs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [React Documentation](https://reactjs.org/docs/hello-world.html)
- [Axios Documentation](https://github.com/axios/axios)