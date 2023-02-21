/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_SINGLEPROBE_CATEGORY}" id="SINGLEPROBE_CATEGORY" colour="#D39DDB" secondaryColour="#BA55D3" iconURI="">
    <block type="singleProbe_readState" id="singleProbe_readState">
        <field name="pin">A0</field>
    </block>
    <block type="singleProbe_readValue" id="singleProbe_readValue">
        <field name="pin">A0</field>
    </block>
</category>`;
}
exports = addToolbox;
