/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    
    return `
    

<category name="%{BKY_KS_VARIABLE_LABEL}" id="KS_OTHER_CATEGORY" colour="#FF4500" secondaryColour="#FF4500">
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

<category name="%{BKY_KS_TEXT_LABEL}" id="KS_TEXT_LABEL" colour="#008000" secondaryColour="#008000">
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

<category name="%{BKY_RGB_CATEGORY}" id="RGB_CATEGORY" colour="#ff0000" secondaryColour="#ff0000">
    <block type="rgb_digital" id="rgb_digital">
        <field name="PIN1">3</field>
        <field name="PIN2">5</field>
        <field name="PIN3">6</field>
    </block>

    <block type="rgb_analog" id="rgb_analog">
        <field name="PIN1">3</field>>

        <value name="val1">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>

        <field name="PIN2">5</field>

        <value name="val2">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>

        <field name="PIN3">6</field>

        <value name="val3">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>

</category>

<category name="%{BKY_KS_74HC595_CATEGORY}" id="KS_74HC595_CATEGORY" colour="#00ffff" secondaryColour="#00ffff">
    <block type="ks_74hc595_init" id="74hc595_init">
        <field name="st_cp">3</field>>
        <field name="sh_cp">4</field>>
        <field name="ds">5</field>>
    </block>

    <block type="ks_74hc595_output" id="74hc595_output">
        <value name="q1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="q2">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="q3">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="q4">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="q5">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="q6">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="q7">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="q8">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>

</category>


<category name="%{BKY_BUZZER_CATEGORY}" id="BUZZER_CATEGORY" colour="#4682b4" secondaryColour="#4682b4">
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

<category name="%{BKY_KS_SERVO_CATEGORY}" id="KS_SERVO_CATEGORY" colour="#00bfff" secondaryColour="#00bfff">
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

<category name="%{BKY_KS_STEPPER_CATEGORY}" id="KS_STEPPER_CATEGORY" colour="#00bfff" secondaryColour="#00bfff">
    <block type="stepper_init" id="stepper_init">
        <field name="IN1">8</field>>
        <field name="IN2">9</field>>
        <field name="IN3">10</field>>
        <field name="IN4">11</field>>

        <value name="steps">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>

        <value name="speed">
            <shadow type="math_number">
                <field name="NUM">150</field>
            </shadow>
        </value>
    </block>


    <block type="stepper_step" id="stepper_step">
        <value name="stepsNum">
            <shadow type="math_number">
                <field name="NUM">2048</field>
            </shadow>
        </value>
    </block>

</category>

<category name="%{BKY_LM35_CATEGORY}" id="LM35_CATEGORY" colour="#0000ff" secondaryColour="#0000ff">
    <block type="lm35_readTemperature" id="lm35_readTemperature">
        <field name="PIN">A3</field>>
    </block>
</category>

<category name="%{BKY_IR_CATEGORY}" id="IR_CATEGORY" colour="#32cd32" secondaryColour="#32cd32">
    <block type="ir_init" id="ir_init">
        <field name="pin">2</field>>
    </block>
    <block type="ir_data" id="ir_data">

    </block>
    <block type="ir_read" id="ir_read">

    </block>
    <block type="ir_refresh" id="ir_refresh">

    </block>
</category>

<category name="%{BKY_ONETUBE_CATEGORY}" id="ONETUBE_CATEGORY" colour="#2e8b57" secondaryColour="#2e8b57">
    <block type="onetube_init" id="onetube_init">

    </block>

    <block type="onetube_number" id="onetube_numner">
        <value name="NUM">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>

</category>

<category name="%{BKY_PINFOURTUBE_CATEGORY}" id="PINFOURTUBE_CATEGORY" colour="#2e8b57" secondaryColour="#2e8b57">
    <block type="tb4_init" id="tb4_init">

    </block>
    

    <block type="tb4_number" id="tb4_numner">
    	<value name="NUM">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>

</category>

<category name="%{BKY_MATRIX_PIN_CATEGORY}" id="MATRIX_PIN_CATEGORY" colour="#2e8b57" secondaryColour="#2e8b57">
    <block type="matrix_pin_init" id="matrix_pin_init">

    </block>

    <block type="matrix_pin_display" id="matrix_pin_display">

    </block>

</category>

<category name="%{BKY_LCD_PIN_CATEGORY}" id="LCD_PIN_CATEGORY" colour="#2e8b57" secondaryColour="#2e8b57">
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

</category>

<category name="%{BKY_ADXL345_CATEGORY}" id="ADXL345_CATEGORY" colour="#191970" secondaryColour="#191970">
    <block type="adxl345_read" id="adxl345_read">

    </block>
</category>

<category name="%{BKY_DHT_CATEGORY}" id="DHT_CATEGORY" colour="#db7093" secondaryColour="#db7093">
    <block type="dht_init" id="dht_init">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <field name="PIN">2</field>
    </block>
    <block type="dht_readHumidity" id="dht_readHumidity">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="dht_readTemperature" id="dht_readTemperature">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
</category>

<category name="%{BKY_DS3231_CATEGORY}" id="DS3231_CATEGORY" colour="#ff00ff" secondaryColour="#ff00ff">
    <block type="ds3231_init" id="ds3231_init">

    </block>

    <block type="ds3231_set_sys" id="ds3231_set_sys">

    </block>

    <block type="ds3231_set_time" id="ds3231_set_time">
	    <value name="year">
	        <shadow type="math_number">
	            <field name="NUM" disabled="true">2021</field>
	        </shadow>
	    </value>
	    <value name="month">
	        <shadow type="math_number">
	            <field name="NUM" disabled="true">2</field>
	        </shadow>
	    </value>
	    <value name="day">
	        <shadow type="math_number">
	            <field name="NUM" disabled="true">26</field>
	        </shadow>
	    </value>
	    <value name="hour">
	        <shadow type="math_number">
	            <field name="NUM" disabled="true">5</field>
	        </shadow>
	    </value>
	    <value name="minute">
	        <shadow type="math_number">
	            <field name="NUM" disabled="true">30</field>
	        </shadow>
	    </value>
	    <value name="second">
	        <shadow type="math_number">
	            <field name="NUM" disabled="true">50</field>
	        </shadow>
	    </value>
    </block>

    <block type="ds3231_read" id="ds3231_read">

    </block>

</category>

<category name="%{BKY_HC_SR04_CATEGORY}" id="HC_SR04_CATEGORY" colour="#7b68ee" secondaryColour="#7b68ee">
<block type="hc_sr04_read_distance" id="hc_sr04_read_distance">
    <field name="trig_pin">2</field>>
    <field name="echo_pin">6</field>>
</block>
</category>

<category name="%{BKY_JOYSTICK_CATEGORY}" id="JOYSTICK_CATEGORY" colour="#ffd700" secondaryColour="#ffd700">
    <block type="joyStick_xyValue" id="joyStick_xyValue">
        <field name="pin">A0</field>
        <field name="xy">X</field>
    </block>
    <block type="joyStick_zState" id="joyStick_zState">
        <field name="pin">A0</field>
    </block>
</category>

<category name="%{BKY_MFRC522_CATEGORY}" id="MFRC522_CATEGORY" colour="#9acd32" secondaryColour="#9acd32">
    <block type="mfrc522_init" id="mfrc522_init">

       <value name="CS">
            <shadow type="math_whole_number">
                <field name="NUM">10</field>
            </shadow>
        </value>

        <field name="RST">5</field>
    </block>
    <block type="control_if" id="control_if">
        <value name="CONDITION">
            <block type="mfrc522_isNewCardPresent" id="mfrc522_isNewCardPresent">
            </block>
        </value>
        <statement name="SUBSTACK">
            <block type="control_if" id="control_if">
                <value name="CONDITION">
                    <block type="mfrc522_readCardSerial" id="mfrc522_readCardSerial">
                    </block>
                </value>
                <statement name="SUBSTACK">
                </statement>
            </block>
        </statement>
    </block>
    <block type="mfrc522_getCardTypeName" id="mfrc522_getCardTypeName"></block>
    <block type="mfrc522_getCardUid" id="mfrc522_getCardUid"></block>
    <block type="mfrc522_numberToHexString" id="mfrc522_numberToHexString">
        <value name="NUM">
            <block type="mfrc522_getCardUid" id="mfrc522_getCardUid"></block>
        </value>
    </block>
    <block type="control_if" id="control_if">
        <value name="CONDITION">
            <block type="mfrc522_verificationKey" id="mfrc522_verificationKey">
                <value name="BLOCK">
                    <shadow type="mfrc522_blockNumber">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
        </value>
        <statement name="SUBSTACK">
        </statement>
    </block>
    <block type="control_if" id="control_if">
        <value name="CONDITION">
            <block type="mfrc522_readBlockData" id="mfrc522_readBlockData">
                <value name="BLOCK">
                    <shadow type="mfrc522_blockNumber">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
        </value>
        <statement name="SUBSTACK">
        </statement>
    </block>
    <block type="mfrc522_getBlockData" id="mfrc522_getBlockData"></block>
    <block type="mfrc522_writeBlockData" id="mfrc522_writeBlockData">
        <value name="BLOCK">
            <shadow type="mfrc522_blockNumber">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="DATA">
            <shadow type="text">
                <field name="TEXT">1024</field>
            </shadow>
        </value>
    </block>
    <block type="mfrc522_setKey" id="mfrc522_setKey">
        <value name="KEY">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="mfrc522_writeKeyToSector" id="mfrc522_writeKeyToSector">
        <value name="KEY">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="SECTOR">
            <shadow type="mfrc522_sectorNumber">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="mfrc522_printSectorData" id="mfrc522_printSectorData">
        <value name="SECTOR">
            <shadow type="mfrc522_sectorNumber">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="mfrc522_halt" id="mfrc522_halt"></block>
</category>

`;
}

exports = addToolbox;
