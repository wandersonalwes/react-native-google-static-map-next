# react-native-google-static-map-next

> An `<Image/>` element with a url to Google Static Map <br>
> See [Google Static Maps API](https://developers.google.com/maps/documentation/maps-static/overview#quick_example).

[![.github/workflows/npm-publish.yml](https://github.com/wandersonalwes/react-native-google-static-map-next/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/wandersonalwes/react-native-google-static-map-next/actions/workflows/npm-publish.yml) [![License](https://img.shields.io/badge/License-MIT-success.svg?style=flat-square&color=33CC12)](https://github.com/wandersonalwes/react-native-google-static-map-next/blob/master/LICENSE) [![Languages](https://img.shields.io/github/languages/count/wandersonalwes/react-native-google-static-map-next?color=%33CC12&style=flat-square)](#)
[![Contributors](https://img.shields.io/github/contributors/wandersonalwes/react-native-google-static-map-next?color=33CC12&style=flat-square)](https://github.com/wandersonalwes/react-native-google-static-map-next/graphs/contributors)

---

## Installation

```shel
npm install --save react-native-google-static-map-next
```

ou

```shel
yarn react-native-google-static-map-next
```

## Usage

```javascript
import {GoogleStaticMapNext} from 'react-native-google-static-map-next'

function Example() {
  return (
    <GoogleStaticMapNext
      style={styles.staticMap}
      location={{
        latitude: '-33.8688',
        longitude: '151.2195',
      }}
      size={{ width: 400, height: 400 }}
      apiKey="123456789-ABCDFGHIJK
    />
  );
}
```

## Props

| Prop                  | Type     | Description                                                          | Default   |
| --------------------- | -------- | -------------------------------------------------------------------- | --------- |
| **`location`**        | `Object` | the map location - `{ latitude: '-33.8688', longitude: '151.2195' }` | undefined |
| **`size`**            | `Object` | the image size - `{ width: 300, height: 550 }`                       | undefined |
| **`zoom`**            | `Number` | defines the zoom level of the map.                                   | 15        |
| **`scale`**           | `Number` | scale=2 returns twice as many pixels as scale=1.                     | 1         |
| **`format`**          | `String` | 'png', 'gif', 'jpg'                                                  | png       |
| **`mapType`**         | `String` | 'roadmap', 'satellite', 'terrain', 'hybrid'.                         | roadmap   |
| **`hasCenterMarker`** | `Boolean`   | add a marker on the center.                                          | true      |
| **`apiKey`**          | `String` | Google API Key                                                       | undefined |
| **`customMarkerUrl`** | `String` | Custom marker url                                                    | undefined |

## Issues

Feel free to file a new issue with a respective title and description on the the [react-native-google-static-map-next](https://github.com/wandersonalwes/react-native-google-static-map-next/issues) repository. If you already found a solution to your problem, i would love to review your pull request! Have a look at our [contribution guidelines](https://github.com/wandersonalwes/react-native-google-static-map-next/blob/master/CONTRIBUTING.md) to find out about the coding standards.

## Contributing

Check out the [contributing](https://github.com/wandersonalwes/react-native-google-static-map-next/blob/master/CONTRIBUTING.md) page to see the best places to file issues, start discussions and begin contributing.

## License

This project is under the [MIT license](https://github.com/wandersonalwes/react-native-google-static-map-next/blob/master/LICENSE).

## Author<br>

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/wandersonalwes">
        <img src="https://github.com/wandersonalwes.png" width="100px;" alt="Foto do Wanderson Alves no GitHub"/><br>
        <sub>
          <b>Wanderson Alves</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
