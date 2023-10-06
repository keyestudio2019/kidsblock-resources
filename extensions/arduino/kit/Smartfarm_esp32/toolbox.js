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
        <field name="pin">2</field>
    </block>
    
    <block type="led_analog" id="led_analog">
    <field name="PIN">2</field>>

    <value name="VAL">
        <shadow type="math_uint8_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
    </block>
</category>



<category name="%{BKY_BUZZER_CATEGORY}" id="BUZZER_CATEGORY" colour="#00bfff" secondaryColour="#00bfff">

<block type="buzzer_tone_d" id="buzzer_tone_d">
<field name="PIN">25</field>
<value name="dur">
    <shadow type="math_number">
        <field name="NUM">131</field>
    </shadow>
</value>
</block>

<block type="buzzer_music" id="buzzer_music">
<field name="PIN">25</field>
</block>

<block type="buzzer_notone" id="buzzer_notone">
<field name="PIN">25</field>
</block>
    
</category>


<category name="%{BKY_RELAY_CATEGORY}" id="BKY_RELAY_CATEGORY" colour="#556b2f" secondaryColour="#556b2f">
    <block type="relay" id="relay">
        <field name="pin">2</field>
    </block>
</category>


<category name="%{BKY_BUTTON_CATEGORY}" id="BUTTON_CATEGORY" colour="#0000ff" secondaryColour="#0000ff" >
    <block type="Button_readState" id="Button_readState">
        <field name="pin">3</field>
    </block>
    <block type="Button_readValue" id="Button_readValue">
        <field name="pin">IO3</field>
    </block>
</category>

<category name="%{BKY_PIR_CATEGORY}" id="PIR_CATEGORY" colour="#7fff00" secondaryColour="#7fff00" >
    <block type="pir_readValue" id="pir_readValue">
        <field name="pin">3</field>
    </block>
</category>

<category name="%{BKY_LIGHTSENSOR_CATEGORY}" id="LIGHTSENSOR_CATEGORY" colour="#9acd32" secondaryColour="#9acd32">
    <block type="lightSensor_readValue" id="lightSensor_readValue">
        <field name="pin">IO33</field>
    </block>
</category>

<category name="%{BKY_DROPSENSOR_CATEGORY}" id="DROPSENSOR_CATEGORY" colour="#556b2f" secondaryColour="#556b2f">
    <block type="dropSensor_readValue" id="dropSensor_readValue">
        <field name="pin">IO33</field>
    </block>
</category>


<category name="%{BKY_WATERSENSOR_CATEGORY}" id="WATERSENSOR_CATEGORY" colour="#008b8b" secondaryColour="#008b8b">
    <block type="waterSensor_readValue" id="waterSensor_readValue">
        <field name="pin">IO33</field>
    </block>
</category>

<category name="%{BKY_SOILSENSOR_CATEGORY}" id="SOILSENSOR_CATEGORY" colour="#ff1493" secondaryColour="#ff1493">
    <block type="soilSensor_readValue" id="soilSensor_readValue">
        <field name="pin">IO33</field>
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

   <field name="pin">IO5</field>>
   <field name="CH">CH0</field>>

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
<field name="pin">IO5</field>>
</block>

</category>

<category name="%{BKY_MOTOR130_CATEGORY}" id="MOTOR130_CATEGORY" colour="#006400" secondaryColour="#006400">
    <block type="motor130" id="motor130">
        <field name="IN1">18</field>
        <field name="IN2">19</field>
        <value name="SPEED2">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>

</category>

<category name="%{BKY_LCD_CATEGORY}" id="LCD_CATEGORY" colour="#00ff00" secondaryColour="#00ff00">
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

<category name="%{BKY_WIFI_CATEGORY}" id="WIFI_CATEGORY" colour="#8fbc8b" secondaryColour="#8fbc8b">
    <block type="wifi_init" id="wifi_init">
        <value name="SSID">
            <shadow type="text">
                <field name="TEXT">ChinaNet-2.4G-0DF0</field>
            </shadow>
        </value>
        <value name="PASSWD">
            <shadow type="text">
                <field name="TEXT">ChinaNet@233</field>
            </shadow>
        </value>
    </block>

   <block type="wifi_read" id="wifi_read">
   </block>
</category>
`;
}
exports = addToolbox;
