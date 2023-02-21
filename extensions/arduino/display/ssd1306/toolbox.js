/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_SSD1306_CATEGORY}" id="SSD1306_CATEGORY" colour="#BE77FF" secondaryColour="#A9A9A9">
    <block type="ssd1306_init" id="ssd1306_init">
        <field name="NUM">1</field>
        <value name="ADDR">
            <shadow type="text">
                <field name="TEXT">0x3c</field>
            </shadow>
        </value>
    </block>

    <block type="ssd1306_printline" id="ssd1306_printline">
        <field name="NUM">1</field>
        <field name="LINE">1</field>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">hello</field>
            </shadow>
        </value>
    </block>

    <block type="ssd1306_print" id="ssd1306_print">
        <field name="NUM">1</field>
        <value name="X">
            <shadow type="ssd1306_x">
                <field name="XNUM">42</field>
            </shadow>
        </value>
        <field name="Y">1</field>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">hello</field>
            </shadow>
        </value>
    </block>

    <block type="ssd1306_clear" id="ssd1306_clear">
        <field name="NUM">1</field>
    </block>

    <block type="ssd1306_setRotaion" id="ssd1306_setRotaion">
        <field name="NUM">1</field>
        <field name="ANGLE">180</field>
    </block>
</category>`;
}

exports = addToolbox;
