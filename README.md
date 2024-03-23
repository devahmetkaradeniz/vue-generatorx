# Vue GeneratorX

A CLI tool for building Vue components

## Installation

```javascript
npm install -g vue-generatorx
```

or

```javascript
yarn global add vue-generatorx
```

## Usage

```javascript
vue-generatorx
```

or

```javascript
vgx
```

## Command

```javascript
vgx init
```

```javascript
vgx component <component-name>
```

```javascript
vgx view <view-name>
```

```javascript
vgx store <store-name>
```

```javascript
vgx style <style-name>
```

### Settings

| Provider | Type      | Value                 | Description                                                | Since |
| :--------|:----------| :---------------------| :----------------------------------------------------------| :-----|
| APP      | API       | options,composition   | Vue components can be authored in two different API styles | 0.0.1 |
| APP      | LANGUAGE  | javascript,typescript | Vue can be written in two different type styles            | 0.0.1 |
| APP      | STORE     | vuex,pinia            | Vue Store can be authored in two different API styles      | 0.0.1 |
| APP      | STYLE     | css,scss              | Css can be written in two different types                  | 0.0.1 |
| PATH     | VIEW      | ./src/views           | Path to the file to be created                             | 0.0.1 |
| PATH     | STORE     | ./src/stores          | Path to the file to be created                             | 0.0.1 |
| PATH     | COMPONENT | ./src/components      | Path to the file to be created                             | 0.0.1 |
| PATH     | STYLE     | ./src/assets          | Path to the file to be created                             | 0.0.1 |

## License
MIT