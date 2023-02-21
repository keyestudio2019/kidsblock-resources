/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_TILT_CATEGORY}" id="TILT_CATEGORY" colour="#D39DDB" secondaryColour="#BA55D3" iconURI="">
    <block type="tilt_readState" id="tilt_readState">
        <field name="pin">A0</field>
    </block>
    <block type="tilt_readValue" id="tilt_readValue">
        <field name="pin">A0</field>
    </block>
</category>`;
}
exports = addToolbox;
