/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
  
    return `
<category name="%{BKY_MOTOR8833_CATEGORY}" id="MOTOR8833_CATEGORY" colour="#FF6F00" secondaryColour="#FF6F00">
    <block type="motor8833" id="motor8833">
    <value name="SPEED">
    <shadow type="math_uint8_number">
        <field name="NUM">255</field>
    </shadow>
    </value>
    </block>
</category>`;
}

exports = addToolbox;
