/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_TM1650_CATEGORY}" id="TM1650_CATEGORY" colour="#4C97FF" secondaryColour="#4C97FF">
    <block type="tm1650_init" id="tm1650_init">
        <field name="NUM">1</field>
    </block>
    <block type="tm1650_screenSet" id="tm1650_screenSet">
        <field name="TYPE">displayOn</field>
    </block>
    <block type="tm1650_show" id="tm1650_show">
        <field name="NUM">1</field>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">1234</field>
            </shadow>
        </value>
    </block>
    <block type="tm1650_setDot" id="tm1650_setDot">
        <field name="NUM">1</field>
        <field name="DOT_NUM">1</field>
        <field name="TYPE">true</field>
    </block>
</category>`;
}

exports = addToolbox;
