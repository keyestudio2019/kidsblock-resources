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





<category name="%{BKY_LM35_CATEGORY}" id="LM35_CATEGORY" colour="#0000ff" secondaryColour="#0000ff">
    <block type="lm35_readTemperature" id="lm35_readTemperature">
        <field name="PIN">A3</field>>
    </block>
</category>


<category name="%{BKY_IRSEND_CATEGORY}" id="IRSEND_CATEGORY" colour="#00bfff" secondaryColour="#00bfff">
    <block type="ir_send" id="ir_send">
        <value name="pin">
            <shadow type="math_number">
                <field name="NUM">A3</field>
            </shadow>
        </value>
        <value name="DATA">
            <shadow type="text">
                <field name="TEXT">0x89ABCDEF</field>
            </shadow>
        </value>
        <value name="bits">
            <shadow type="math_number">
                <field name="NUM">32</field>
            </shadow>
        </value>
    </block>

    <block type="ir_send_raw" id="ir_send_raw">
        <value name="pin">
            <shadow type="math_number">
                <field name="NUM">A3</field>
            </shadow>
        </value>
        <value name="ARRAY">
            <shadow type="text">
                <field name="TEXT">0,0,0,</field>
            </shadow>
        </value>
        <value name="Length">
            <shadow type="math_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
        <value name="FREQ">
            <shadow type="math_number">
                <field name="NUM">38</field>
            </shadow>
        </value>
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



<category name="%{BKY_KSENCODER_CATEGORY}" id="KSENCODER_CATEGORY" colour="#4b0082" secondaryColour="#4b0082">

    <block type="ks_encoder_init" id="ks_encoder_init">
        <field name="dt">2</field>>
        <field name="clk">6</field>>
    </block>

    <block type="ks_encoder_read" id="ks_encoder_read">

    </block>

    <block type="ks_encoder_write" id="ks_encoder_write">
        <value name="data">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>

    <block type="ks_encoder_button" id="ks_encoder_button">
        <field name="pin">A0</field>>
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

<category name="%{BKY_FOURTUBE_CATEGORY}" id="FOURTUBE_CATEGORY" colour="#00ffff" secondaryColour="#00ffff">
    <block type="tm1650_string" id="tm1650_string">
    	<value name="tube_string">
	        <shadow type="text">
	            <field name="TEXT" disabled="true">abcd</field>
	        </shadow>
	    </value>
    </block>

    <block type="tm1650_dot" id="tm1650_dot">

    </block>

    <block type="tm1650_state" id="tm1650_state">

    </block>
</category>


`;
}

exports = addToolbox;
