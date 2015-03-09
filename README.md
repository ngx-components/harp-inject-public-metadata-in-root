[![AngularJS Express](http://i.imgur.com/nTj9QgN.png)](https://github.com/angular-express/angular-express)

## Inject public Harp metadata in root

Include this component in your application to inject the public HarpJS metadata in your root object (window object in the browser).

## Installation

To install the component:

```bash
$ ngx install harp-inject-public-metadata-in-root
```

No clue what the `ngx` command line tool is? Learn more about [AngularJS Express](https://github.com/angular-express/angular-express).

## How to use

After installing the component, you can include the automatically generated javascript in your application using a `script` element:

```xml
<script src="/components/harp-inject-public-metadata-in-root/public" type="text/javascript">
```

Then you can access the public metadata in the browser like this:

```javascript
console.log(window.__public)
```

The object has the same structure as the original Harp object so you can access:

```javascript
console.log(window.__public.component._data)
```

## License

MIT.
