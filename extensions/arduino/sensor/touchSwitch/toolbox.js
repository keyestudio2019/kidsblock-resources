/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_TOUCHSWITCH_CATEGORY}" id="TOUCHSWITCH_CATEGORY" colour="#D39DDB" secondaryColour="#BA55D3" iconURI="">
    <block type="touchSwitch_readValue" id="touchSwitch_readValue">
        <field name="pin">A0</field>
    </block>
    <block type="touchSwitch_state" id="touchSwitch_state">
        <field name="pin">A0</field>
    </block>
</category>`;
}
exports = addToolbox;
