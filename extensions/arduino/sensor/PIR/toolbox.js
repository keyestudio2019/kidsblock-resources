/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_pir_CATEGORY}" id="pir_CATEGORY" colour="#D39DDB" secondaryColour="#BA55D3" iconURI="">
    <block type="pir_readValue" id="pir_readValue">
        <field name="pin">A0</field>
    </block>
</category>`;
}
exports = addToolbox;
