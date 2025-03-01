'use strict';

var renderAny = require('./render-any.js');
var createElement = require('./create-element.js');

function renderWaveElement (index, source, outputElement, waveSkin, notFirstSignal, options) {

    // cleanup
    while (outputElement.childNodes.length) {
        outputElement.removeChild(outputElement.childNodes[0]);
    }

    outputElement.insertBefore(createElement(
        renderAny(index, source, waveSkin, notFirstSignal, options)
    ), null);
}

module.exports = renderWaveElement;
