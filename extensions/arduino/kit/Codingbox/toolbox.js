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

<category name="%{BKY_RGB_CATEGORY}" id="RGB_CATEGORY" colour="#573e00" secondaryColour="#FF6F00">
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

<category name="%{BKY_LM35_CATEGORY}" id="LM35_CATEGORY" colour="#D39DDB" secondaryColour="#42CCFF">
    <block type="lm35_readTemperature" id="lm35_readTemperature">
        <field name="PIN">A3</field>>
    </block>
</category>


<category name="%{BKY_MATRIX_IIC_CATEGORY}" id="MATRIX_PIN_CATEGORY" colour="#008000" secondaryColour="#42CCFF">
<block type="matrix_iic_init" id="matrix_iic_init">
</block>

<block type="matrix_iic_piexl" id="matrix_iic_piexl">
        <value name="xVal">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>

        <value name="yVal">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
</block>

<block type="matrix_iic_drawLine" id="matrix_iic_drawLine">
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

<block type="matrix_iic_drawrectangle" id="matrix_iic_drawrectangle">
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
<value name="L1">
    <shadow type="math_whole_number">
        <field name="NUM">2</field>
    </shadow>
</value>
<value name="W1">
    <shadow type="math_whole_number">
        <field name="NUM">4</field>
    </shadow>
</value>
</block>

<block type="matrix_iic_drawcircle" id="matrix_iic_drawcircle">
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
<value name="R0">
    <shadow type="math_whole_number">
        <field name="NUM">2</field>
    </shadow>
</value>
</block>

<block type="matrix_iic_showChar" id="matrix_iic_showChar">

  <value name="TEXT">
     <shadow type="text">
        <field name="TEXT">A</field>
    </shadow>
   </value>
</block>


<block type="matrix_iic_show_loop" id="matrix_iic_show_loop">
    <value name="MESSAGE">
        <shadow type="text">
             <field name="TEXT">ABCD1234</field>
        </shadow>
   </value>
   <value name="SPEED">
   <shadow type="math_whole_number">
        <field name="NUM">300</field>
   </shadow>
</value>
</block>

<block type="matrix_iic_face" id="matrix_iic_face">

</block>

<block type="matrix_iic_refresh" id="matrix_iic_refresh">

</block>

<block type="matrix_iic_clear" id="matrix_iic_clear">

</block>
</category>

`;
}

exports = addToolbox;
