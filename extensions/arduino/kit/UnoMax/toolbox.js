/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
  
    return `
    

<category name="%{BKY_KS_VARIABLE_LABEL}" id="KS_OTHER_CATEGORY" colour="#f08080" secondaryColour="#f08080">
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

<category name="%{BKY_KS_TEXT_LABEL}" id="KS_TEXT_LABEL" colour="#ff0000" secondaryColour="#ff0000">
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

<category name="%{BKY_LED_CATEGORY}" id="BKY_LED_CATEGORY" colour="#00bfff" secondaryColour="#00bfff">
    <block type="LED_setLEDState" id="LED_setLEDState">
        <field name="pin">13</field>
    </block>

    <block type="led_analog" id="led_analog">
    <field name="PIN">10</field>>

    <value name="val">
        <shadow type="math_uint8_number">
            <field name="NUM">255</field>
        </shadow>
    </value>
    </block>
</category>

<category name="%{BKY_BUTTON_CATEGORY}" id="BUTTON_CATEGORY" colour="#0000ff" secondaryColour="#0000ff">
    <block type="Button_readState" id="Button_readState">
        <field name="pin">2</field>
    </block>
    <block type="Button_readValue" id="Button_readValue">
        <field name="pin">2</field>
    </block>
</category>

<category name="%{BKY_LIGHTSENSOR_CATEGORY}" id="LIGHTSENSOR_CATEGORY" colour="#7cfc00" secondaryColour="#7cfc00">
    <block type="lightSensor_readValue" id="lightSensor_readValue">
        <field name="pin">A6</field>
    </block>
</category>

<category name="%{BKY_ANALOGVOICE_CATEGORY}" id="ANALOGVOICE_CATEGORY" colour="#7cfc00" secondaryColour="#7cfc00" >
    <block type="analogVoice_readValue" id="analogVoice_readValue">
        <field name="PIN">A7</field>
    </block>
</category>


<category name="%{BKY_BUZZER_CATEGORY}" id="BUZZER_CATEGORY" colour="#008000" secondaryColour="#008000">
    <block type="buzzer_tone" id="buzzer_tone">
        <field name="PIN">9</field>
    </block>

    <block type="buzzer_tone_d" id="buzzer_tone_d">
        <field name="PIN">9</field>
    </block>

    <block type="buzzer_music" id="buzzer_music">
        <field name="PIN">9</field>
    </block>

    <block type="buzzer_notone" id="buzzer_notone">
        <field name="PIN">9</field>
    </block>
    
</category>

<category name="%{BKY_BBRGBLEDSTRIP_CATEGORY}" id="BBRGBLEDSTRIP_CATEGORY" colour="#483d8b" secondaryColour="#483d8b">

   <block type="bbrgbLedStrip_init" id="bbrgbLedStrip_init">
        <value name="LEN">
            <shadow type="math_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
        <field name="PIN">4</field>
    </block>

    <block type="rgbLedStrip_setPixelColor" id="rgbLedStrip_setPixelColor">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="COLOR">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="rgbLedStrip_fill" id="rgbLedStrip_fill">
        <value name="FIRST">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="COUNT">
            <shadow type="math_whole_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
        <value name="COLOR">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="rgbLedStrip_color" id="rgbLedStrip_color">
        <value name="R">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="G">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="B">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="rgbLedStrip_setBrightness" id="rgbLedStrip_setBrightness">
        <value name="BRT">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>

<block type="rgb_change" id="rgb_change">

<field name="PIN">4</field>
 
    
  <value name="NUM">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
  </value>

  <value name="WAIT">
     <shadow type="math_number">  
        <field name="NUM">20</field>
     </shadow>
  </value>	
</block>

<block type="rgb_loop" id="rgb_loop">

<field name="PIN">4</field>
 
    
  <value name="NUM">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
  </value>

  <value name="WAIT">
     <shadow type="math_number">  
        <field name="NUM">20</field>
     </shadow>
  </value>	
</block>

    <block type="rgbLedStrip_clear" id="rgbLedStrip_clear">
    </block>
    <block type="rgbLedStrip_show" id="rgbLedStrip_show">
    </block>
    
</category>


<category name="%{BKY_MATIRXDISPLAY_CATEGORY}" id="MATIRXDISPLAY_CATEGORY" colour="#20b2aa" secondaryColour="#20b2aa">

    <block type="MatirxDisplay_init" id="MatirxDisplay_init">
    </block>

    
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

    <block type="MatirxDisplay_drawrectangle" id="MatirxDisplay_drawrectangle">
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

    <block type="MatirxDisplay_drawcircle" id="MatirxDisplay_drawcircle">
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

    <block type="MatirxDisplay_showChar" id="MatirxDisplay_showChar">
   
          <value name="TEXT">
             <shadow type="text">
                <field name="TEXT">OK</field>
            </shadow>
           </value>
    </block>


    <block type="MatirxDisplay_show_loop" id="MatirxDisplay_show_loop">
            <value name="NUMBER">
                <shadow type="math_whole_number">
                     <field name="NUM">123456789</field>
                </shadow>
           </value>
    </block>

    <block type="MatirxDisplay_image" id="MatirxDisplay_image">
        <value name="IMAGE">
          <shadow type="text">
             <field name="IMAGE"></field>
          </shadow>
        </value>
    </block>
   
</category>`;
}

exports = addToolbox;
