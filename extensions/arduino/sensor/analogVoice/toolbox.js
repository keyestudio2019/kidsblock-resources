/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_ANALOGVOICE_CATEGORY}" id="ANALOGVOICE_CATEGORY" colour="#D39DDB" secondaryColour="#BA55D3" iconURI="">
    <block type="analogVoice_readValue" id="analogVoice_readValue">
        <field name="PIN">A0</field>
    </block>
</category>`;
}
exports = addToolbox;
