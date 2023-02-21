/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_LIGHTSENSOR_CATEGORY}" id="LIGHTSENSOR_CATEGORY" colour="#D39DDB" secondaryColour="#BA55D3" iconURI="">
    <block type="lightSensor_readValue" id="lightSensor_readValue">
        <field name="pin">A0</field>
    </block>
</category>`;
}
exports = addToolbox;
