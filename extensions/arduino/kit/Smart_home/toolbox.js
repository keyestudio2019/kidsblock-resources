/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    
    return `
    

<category name="%{BKY_KS_VARIABLE_LABEL}" id="KS_OTHER_CATEGORY" colour="#FF4500" secondaryColour="#42CCFF">
    <block type="KS_variables_declare">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="KS_variables_get">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
    </block>
    <block type="KS_variables_set">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="KS_variables_change">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
    </block>

    <block type="KS_variables_stringSet">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>

</category>

<category name="%{BKY_KS_TEXT_LABEL}" id="KS_TEXT_LABEL" colour="#41be8a" secondaryColour="#42CCFF">
    <block type="KS_CHAR">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">a</field>
            </shadow>
        </value>
    </block>

    <block type="KS_STRING">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">hello</field>
            </shadow>
        </value>
    </block>

    <block type="KS_data">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">123</field>
            </shadow>
        </value>
    </block>
    
</category>

<category name="%{BKY_LED_CATEGORY}" id="BKY_LED_CATEGORY" colour="#FF6F00" secondaryColour="#FF6F00">
    <block type="LED_setLEDState" id="LED_setLEDState">
        <field name="pin">D9</field>
    </block>
</category>

<category name="%{BKY_BUZZER_CATEGORY}" id="BUZZER_CATEGORY" colour="#FF6F00" secondaryColour="#FF6F00">
    <block type="buzzer_tone" id="buzzer_tone">
        <field name="PIN">4</field>
    </block>

    <block type="buzzer_tone_d" id="buzzer_tone_d">
        <field name="PIN">4</field>
    </block>

    <block type="buzzer_music" id="buzzer_music">
        <field name="PIN">4</field>
    </block>

    <block type="buzzer_notone" id="buzzer_notone">
        <field name="PIN">4</field>
    </block>
    
</category>

<category name="%{BKY_BUTTON_CATEGORY}" id="BUTTON_CATEGORY" colour="#4C97FF" secondaryColour="#3373CC" >
    <block type="Button_readState" id="Button_readState">
        <field name="pin">A0</field>
    </block>
    <block type="Button_readValue" id="Button_readValue">
        <field name="pin">A0</field>
    </block>
</category>

<category name="%{BKY_PIR_CATEGORY}" id="PIR_CATEGORY" colour="#D39DDB" secondaryColour="#BA55D3" >
    <block type="pir_readValue" id="pir_readValue">
        <field name="pin">A0</field>
    </block>
</category>

<category name="%{BKY_LIGHTSENSOR_CATEGORY}" id="LIGHTSENSOR_CATEGORY" colour="#D39DDB" secondaryColour="#BA55D3">
    <block type="lightSensor_readValue" id="lightSensor_readValue">
        <field name="pin">A0</field>
    </block>
</category>


<category name="%{BKY_GASSENSOR_CATEGORY}" id="GASSENSOR_CATEGORY" colour="#D39DDB" secondaryColour="#BA55D3">
    <block type="GasSensor_readValue" id="GasSensor_readValue">
        <field name="pin">A0</field>
    </block>
</category>


<category name="%{BKY_MOTOR130_CATEGORY}" id="MOTOR130_CATEGORY" colour="#42CCFF" secondaryColour="#FF6F00">
    <block type="motor130_digital" id="motor130_digital">
        <field name="IN1">10</field>
        <field name="IN2">11</field>
    </block>

    <block type="motor130_analog" id="motor130_analog">
        <field name="IN1">10</field>

        <field name="IN2">11</field>

        <value name="SPEED2">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>

</category>

<category name="%{BKY_KS_SERVO_CATEGORY}" id="KS_SERVO_CATEGORY" colour="#FF3399" secondaryColour="#FF6F00">
    <block type="ks_servo_angle" id="ks_servo_angle">
        <field name="pin">9</field>>
        <value name="angle">
            <shadow type="math_number">
                <field name="NUM">90</field>
            </shadow>
        </value>
        <value name="time">
            <shadow type="math_number">
                <field name="NUM">200</field>
            </shadow>
        </value>
    </block>

    <block type="ks_servo_read" id="ks_servo_read">
        <field name="pin">9</field>>
    </block>

</category>

<category name="%{BKY_LCD_CATEGORY}" id="LCD_CATEGORY" colour="#D39DDB" secondaryColour="#D39DDB">
    <block type="lcd_init" id="lcd_init">
        <field name="ADDR">0x27</field>
    </block>
    <block type="lcd_setCursorPosition" id="lcd_setCursorPosition">
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
    </block>
    <block type="lcd_print" id="lcd_print">
        <value name="DATA">
            <shadow type="text">
                <field name="TEXT">Hello keyestudio</field>
            </shadow>
        </value>
    </block>
    <block type="lcd_clear" id="lcd_clear">
    </block>
    <block type="lcd_setBackLight" id="lcd_setBackLight">
    </block>
    <block type="lcd_setCursorStyle" id="lcd_setCursorStyle">
    </block>
</category>
`;
}

exports = addToolbox;
