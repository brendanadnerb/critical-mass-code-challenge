## Critical Mass Code Challenge

```
$ yarn install && yarn start
```

or

```
$ npm install && npm start
```

Runs locally at https://localhost:3000/

### Notes

I'd like to track a `resizing` boolean during resize, and take the CSS transition out so that the marker element doesn't tween to new positions while resizing - it should just stick under the active item.

Current Time display - some animation would be nice.

to implement the current time display, I elected to store each section's timezone in the json list of sections - any new items would have to do the same.
