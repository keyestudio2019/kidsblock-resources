/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_LCD_PIN_CATEGORY}" id="LCD_PIN_CATEGORY" colour="#BBBB00" secondaryColour="#888800">
    <block type="lcd_pin_init" id="lcd_pin_init">
        <field name="RS">7</field>
        <field name="EN">8</field>
        <field name="D4">9</field>
        <field name="D5">10</field>
        <field name="D6">11</field>
        <field name="D7">12</field>
    </block>
    
    <block type="lcd_pin_print" id="lcd_pin_print">
        <value name="X">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="Y">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="DATA">
            <shadow type="text">
                <field name="TEXT">Hello KidsBlock</field>
            </shadow>
        </value>
    </block>

    <block type="lcd_pin_clear" id="lcd_pin_clear">
    </block>

</category>`;
}

exports = addToolbox;
