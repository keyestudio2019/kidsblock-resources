/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_MAGNETICSENSOR_CATEGORY}" id="MAGNETICSENSOR_CATEGORY" colour="#D39DDB" secondaryColour="#BA55D3" iconURI="">
    <block type="magneticSensor_readState" id="magneticSensor_readState">
        <field name="pin">A0</field>
    </block>
    <block type="magneticSensor_readValue" id="magneticSensor_readValue">
        <field name="pin">A0</field>
    </block>
</category>`;
}
exports = addToolbox;
