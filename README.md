# React with lazy loading



## Lazy routing docs

[webpack - getComponent()](https://github.com/ReactTraining/react-router/blob/v3/docs/API.md#getcomponentnextstate-callback)

```
<Route
    path="courses/:courseId"
    getComponent={(nextState, cb) => {
        // do asynchronous stuff to find the components
        cb(null, Course)
    }}
/>
```

With webpack:
```
<Route
    path="courses/:courseId"
    getComponent={(nextState, cb) => {
        System.import(this.props.component)
            .then((response.default) => {
                cb(null, response.default);
            });
    }}
/>
```

PlainRoute

* [PlainRoute API (git docs)](https://github.com/ReactTraining/react-router/blob/v3/docs/API.md)
* [Plain route additional docs](http://knowbody.github.io/react-router-docs/api/PlainRoute.html)


## Additional information

* [Lazy Loaded React Components With Webpack 2](https://dev.to/kayis/lazy-loaded-react-components-with-webpack-2)
