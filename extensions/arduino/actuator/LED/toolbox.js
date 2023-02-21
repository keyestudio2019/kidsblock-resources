/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
    
<category name="%{BKY_LED_CATEGORY}" id="BKY_LED_CATEGORY" colour="#6495ED" secondaryColour="#6495ED">
    <block type="LED_setLEDState" id="LED_setLEDState">
        <field name="pin">D2</field>
    </block>
</category>`;
}

exports = addToolbox;
