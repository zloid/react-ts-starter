<!-- Information about the project to be edited by hand -->
#react-ts-starter

<!-- You do not need to touch the code below. This is automatic README.md generation -->
<!-- check out https://github.com/jsdoc2md for learn more -->

## API Reference

## Modules
Module | Description
------ | -----------
[components-Button] | 
[components-GithubCorner] | 
[utils-DOMDidMount] | 
[utils-keyboardEventListener] | 
[utils-mapAllDispatch] | 


## components-Button


### components-Button~Button(props)

Presentational component

**Kind**: inner method of [`components-Button`]  
**Returns**: `string` - template literal: bootstrap .col + custom html button  

| Param | Type | Description |
| --- | --- | --- |
| props | `Object` |  |
| \[props.role\] | `string` | HTML role attribute |
| \[props.className\] | `string` | HTML class attribute |
| \[props.eventType\] | `string` | HTML attribute named on-eventtype, specify an on-event handler for a particular event (such as click) |
| \[props.event\] | `string` | Event target |
| \[props.nodeText\] | `string` | HTMLElement.innerText |

**Example**  
```js
${Button({
            role: 'appButtonIncrement',
            className: 'app-btn btn btn-outline-success btn-lg btn-block',
            eventType: 'ondblclick',
            event: 'globalThis.mapAllDispatch.incrementDecrement.increment()',
            nodeText: '+',
})}
```

## components-GithubCorner


### components-GithubCorner~GithubCorner(linkToRepo)

Presentational component

**Kind**: inner method of [`components-GithubCorner`]  
**Returns**: `string` - template literal: octoCat svg + link to repo  

| Param | Type | Description |
| --- | --- | --- |
| linkToRepo | `string` | link to github repository |

**Example**  
```js
${GithubCorner('https://github.com/')}
```

## utils-DOMDidMount


### utils-DOMDidMount~DOMDidMount()

Return eventListener -DOMContentLoaded- for window obj. The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

**Kind**: inner method of [`utils-DOMDidMount`]  
**Example**  
```js
// keyboardEventListener()
DOMDidMount()
```

## utils-keyboardEventListener


### utils-keyboardEventListener~keyboardEventListener()

Function which define EventListener for catching Keyboard and NumPad buttons:  + - delete backspace; and ignoring all f-buttons on keyboard

**Kind**: inner method of [`utils-keyboardEventListener`]  
**Returns**: `string` - an empty string  
**Example**  
```js
// click on keyboard [+] ~> -increment-
// click on keyboard [-] ~> -decrement-
// click on keyboard [delete] ~> -clear all-
keyboardEventListener()
```

## utils-mapAllDispatch


### utils-mapAllDispatch~Connect

Connect
library for compose RTK actions

**Kind**: inner class of [`utils-mapAllDispatch`]  
<!-- LINKS -->

[components-Button]:#components-button
[components-GithubCorner]:#components-githubcorner
[utils-DOMDidMount]:#utils-domdidmount
[utils-keyboardEventListener]:#utils-keyboardeventlistener
[utils-mapAllDispatch]:#utils-mapalldispatch
[`components-Button`]:#components-button
[`components-GithubCorner`]:#components-githubcorner
[`utils-DOMDidMount`]:#utils-domdidmount
[`utils-keyboardEventListener`]:#utils-keyboardeventlistener
[`utils-mapAllDispatch`]:#utils-mapalldispatch
