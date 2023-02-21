/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_JOYSTICK_CATEGORY}" id="JOYSTICK_CATEGORY" colour="#4C97FF" secondaryColour="#3373CC" iconURI="">
    <block type="joyStick_xyValue" id="joyStick_xyValue">
        <field name="pin">A0</field>
        <field name="xy">X</field>
    </block>
    <block type="joyStick_zState" id="joyStick_zState">
        <field name="pin">A0</field>
    </block>
</category>`;
}
exports = addToolbox;
