/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_BLUEBUTTON_CATEGORY}" id="BLUEBUTTON_CATEGORY" colour="#4C97FF" secondaryColour="#3373CC" iconURI="">
    <block type="blueButton_readState" id="blueButton_readState">
        <field name="pin">A0</field>
    </block>
    <block type="blueButton_readValue" id="blueButton_readValue">
        <field name="pin">A0</field>
    </block>
</category>`;
}
exports = addToolbox;
