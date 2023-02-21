/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_TM1640_CATEGORY}" id="TM1640_CATEGORY" colour="#A0522D" secondaryColour="#8B4513">
    <block type="tm1640_init" id="tm1640_init">
        <field name="NUM">1</field>
        <field name="CLK">2</field>
        <field name="DIO">4</field>
    </block>
    <block type="tm1640_setColorIndex" id="tm1640_setColorIndex">
        <field name="NUM">1</field>
        <field name="MODE">1</field>
    </block>
    <block type="tm1640_setBrightness" id="tm1640_setBrightness">
        <field name="NUM">1</field>
        <field name="BRIGHTNESS">6</field>
    </block>
    <block type="tm1640_drawStr" id="tm1640_drawStr">
        <field name="NUM">1</field>
        <value name="X">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="Y">
            <shadow type="tm1640_y">
                <field name="NUM">7</field>
            </shadow>
        </value>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">Hi</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
