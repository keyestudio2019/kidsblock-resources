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
        <field name="pin">D9</field>
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

<category name="%{BKY_ATBUZZER_CATEGORY}" id="BKY_ATBUZZER_CATEGORY" colour="#00bfff" secondaryColour="#00bfff">
    <block type="ATbuzzerState" id="ATbuzzerState">
        <field name="pin">D9</field>
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


<category name="%{BKY_POTSENSOR_CATEGORY}" id="POTSENSOR_CATEGORY" colour="#008b8b" secondaryColour="#008b8b">
    <block type="PotSensor_readValue" id="PotSensor_readValue">
        <field name="pin">A0</field>
    </block>
</category>

<category name="%{BKY_SOUNDSENSOR_CATEGORY}" id="SOUNDSENSOR_CATEGORY" colour="#ff1493" secondaryColour="#ff1493">
    <block type="SoundSensor_readValue" id="SoundSensor_readValue">
        <field name="pin">A0</field>
    </block>
</category>

<category name="%{BKY_HC_SR04_CATEGORY}" id="HC_SR04_CATEGORY" colour="#ff00ff" secondaryColour="#ff00ff">
<block type="hc_sr04_read_distance" id="hc_sr04_read_distance">
    <field name="trig_pin">2</field>>
    <field name="echo_pin">6</field>>
</block>
</category>

<category name="%{BKY_DHT_CATEGORY}" id="DHT_CATEGORY" colour="#4b0082" secondaryColour="#4b0082">
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

<category name="%{BKY_WS2812B_CATEGORY}" id="WS2812B_CATEGORY" colour="#006400" secondaryColour="#006400">
    <block type="ws2812b_init" id="ws2812b_init">
        <field name="PIN">A0</field>
        <value name="NUM">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="ws2812b_setBrightness" id="ws2812b_setBrightness">
        <field name="PIN">A0</field>
        <value name="BRIGHTNESS">
            <shadow type="ws2812b_brightnessNumber">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="ws2812b_clear" id="ws2812b_clear">
        <field name="PIN">A0</field>
    </block>
    <block type="ws2812b_setRangeColor" id="ws2812b_setRangeColor">
        <field name="PIN">A0</field>
        <value name="START">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="END">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="COLOR">
            <shadow type="colour_picker"/>
        </value>
    </block>
     <block type="ws2812b_rgbToColor" id="ws2812b_rgbToColor">
        <value name="RED">
            <shadow type="ws2812b_brightnessNumber">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="GREEN">
            <shadow type="ws2812b_brightnessNumber">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="BLUE">
            <shadow type="ws2812b_brightnessNumber">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="ws2812b_showRainbow" id="ws2812b_showRainbow">
        <field name="PIN">A0</field>
        <value name="NUM1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="NUM2">
            <shadow type="math_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
        <value name="COR1">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="COR2">
            <shadow type="math_number">
                <field name="NUM">360</field>
            </shadow>
        </value>
    </block>
    <block type="ws2812b_shift" id="ws2812b_shift">
        <field name="PIN">A0</field>
        <value name="NUM">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="ws2812b_rotate" id="ws2812b_rotate">
        <field name="PIN">A0</field>
        <value name="NUM">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="ws2812b_showBarGraph" id="ws2812b_showBarGraph">
        <field name="PIN">A0</field>
        <value name="NUM1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="NUM2">
            <shadow type="math_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
        <value name="VAL1">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="VAL2">
            <shadow type="math_number">
                <field name="NUM">360</field>
            </shadow>
        </value>
    </block>
</category>

<category name="%{BKY_TM1650_CATEGORY}" id="TM1650_CATEGORY" colour="#00ff00" secondaryColour="#00ff00">
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
</category>

<category name="%{BKY_LCD_CATEGORY}" id="LCD_CATEGORY" colour="#8fbc8b" secondaryColour="#8fbc8b">
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

<category name="%{BKY_MATIRXDISPLAY_CATEGORY}" id="MATIRXDISPLAY_CATEGORY" colour="#008080" secondaryColour="#008080">
    <block type="MatirxDisplay_init" id="MatirxDisplay_init">
        <field name="CS">2</field>
    </block>
    <sep gap="36"/>
    <block type="MatirxDisplay_drawPixel" id="MatirxDisplay_drawPixel">
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
    <block type="MatirxDisplay_drawLine" id="MatirxDisplay_drawLine">
        <value name="X0">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="Y0">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="X1">
            <shadow type="math_whole_number">
                <field name="NUM">7</field>
            </shadow>
        </value>
        <value name="Y1">
            <shadow type="math_whole_number">
                <field name="NUM">7</field>
            </shadow>
        </value>
    </block>
    <block type="MatirxDisplay_showChar" id="MatirxDisplay_showChar">
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">A</field>
            </shadow>
        </value>
    </block>
    <block type="MatirxDisplay_showNumber" id="MatirxDisplay_showNumber">
        <value name="NUMBER">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="MatirxDisplay_fill" id="MatirxDisplay_fill"></block>
    <block type="MatirxDisplay_refresh" id="MatirxDisplay_refresh"></block>
    <sep gap="36"/>
    <block type="MatirxDisplay_setBrightness" id="MatirxDisplay_setBrightness">
        <value name="BRT">
            <shadow type="MatirxDisplay_brightnessNumber">
                <field name="NUM">7</field>
            </shadow>
        </value>
    </block>
    <block type="MatirxDisplay_setRotation" id="MatirxDisplay_setRotation"></block>
</category>

<category name="%{BKY_IR_CATEGORY}" id="IR_CATEGORY" colour="#ffd700" secondaryColour="#ffd700">
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
`;
}

exports = addToolbox;
