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

<category name="%{BKY_KS_TEXT_LABEL}" id="KS_TEXT_LABEL" colour="#800000" secondaryColour="#800000">
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

<category name="%{BKY_LED_CATEGORY}" id="BKY_LED_CATEGORY" colour="#573e00" secondaryColour="#573e00">
    <block type="LED_setLEDState" id="LED_setLEDState">
        <field name="pin">9</field>
    </block>
    <block type="led_analog" id="led_analog">
    <field name="PIN">9</field>>

    <value name="val">
        <shadow type="math_uint8_number">
            <field name="NUM">255</field>
        </shadow>
    </value>
    </block>
</category>

<category name="%{BKY_RELAY_CATEGORY}" id="BKY_RELAY_CATEGORY" colour="#00bfff" secondaryColour="#00bfff">
    <block type="RelayState" id="RelayState">
        <field name="pin">10</field>
    </block>
</category>

<category name="%{BKY_BUZZER_CATEGORY}" id="BUZZER_CATEGORY" colour="#0000ff" secondaryColour="#0000ff">
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

<category name="%{BKY_BUTTON_CATEGORY}" id="BUTTON_CATEGORY" colour="#7fff00" secondaryColour="#7fff00" >
    <block type="Button_readState" id="Button_readState">
        <field name="pin">A0</field>
    </block>
    <block type="Button_readValue" id="Button_readValue">
        <field name="pin">A0</field>
    </block>
</category>

<category name="%{BKY_PIR_CATEGORY}" id="PIR_CATEGORY" colour="#9acd32" secondaryColour="#9acd32" >
    <block type="pir_readValue" id="pir_readValue">
        <field name="pin">A0</field>
    </block>
</category>

<category name="%{BKY_LIGHTSENSOR_CATEGORY}" id="LIGHTSENSOR_CATEGORY" colour="#556b2f" secondaryColour="#556b2f">
    <block type="lightSensor_readValue" id="lightSensor_readValue">
        <field name="pin">A0</field>
    </block>
</category>


<category name="%{BKY_GASSENSOR_CATEGORY}" id="GASSENSOR_CATEGORY" colour="#008b8b" secondaryColour="#008b8b">
    <block type="GasSensor_readValue" id="GasSensor_readValue">
        <field name="pin">A0</field>
    </block>
</category>

<category name="%{BKY_STEAMSENSOR_CATEGORY}" id="STEAMSENSOR_CATEGORY" colour="#ff1493" secondaryColour="#ff1493">
    <block type="SteamSensor_readValue" id="SteamSensor_readValue">
        <field name="pin">A0</field>
    </block>
</category>
<category name="%{BKY_SOILSENSOR_CATEGORY}" id="SOILSENSOR_CATEGORY" colour="#ff00ff" secondaryColour="#ff00ff">
    <block type="SoilSensor_readValue" id="SoilSensor_readValue">
        <field name="pin">A0</field>
    </block>
</category>


<category name="%{BKY_MOTOR130_CATEGORY}" id="MOTOR130_CATEGORY" colour="#4b0082" secondaryColour="#4b0082">
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

<category name="%{BKY_KS_SERVO_CATEGORY}" id="KS_SERVO_CATEGORY" colour="#7b68ee" secondaryColour="#7b68ee">
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

<category name="%{BKY_LCD_CATEGORY}" id="LCD_CATEGORY" colour="#006400" secondaryColour="#006400">
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
<category name="%{BKY_BLE_SERIAL_CATEGORY}" id="BLE_SERIAL_CATEGORY" colour="#2f4f4f" secondaryColour="#2f4f4f">
    <block type="ble_serial" id="ble_serial">

    </block>
</category>
`;
}

exports = addToolbox;
