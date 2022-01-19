'use strict';

var renderWaveElement = require('./render-wave-element.js');

function renderWaveForm (index, source, output, notFirstSignal, options) {
    renderWaveElement(index, source, document.getElementById(output + index), window.WaveSkin, notFirstSignal, options);
}

module.exports = renderWaveForm;

/* eslint-env browser */
