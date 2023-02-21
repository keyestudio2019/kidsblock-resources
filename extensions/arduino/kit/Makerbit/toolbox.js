/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    
//const KS_OTHER_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIwODExMTk4MDE0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExMDQ3IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4Ij48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik01MDguMTYgOTA5LjkyNjRjLTUzLjgxMTIgMC0xMDYuMDM1Mi0xMC41NDcyLTE1NS4xODcyLTMxLjMzNDQtNDcuNDYyNC0yMC4wNzA0LTkwLjExMi00OC44NDQ4LTEyNi43Mi04NS40MDE2YTM5Ny4yMjQ5NiAzOTcuMjI0OTYgMCAwIDEtODUuNDAxNi0xMjYuNzJjLTIwLjc4NzItNDkuMTUyLTMxLjMzNDQtMTAxLjM3Ni0zMS4zMzQ0LTE1NS4xODcyczEwLjU0NzItMTA2LjAzNTIgMzEuMzM0NC0xNTUuMTg3MmMyMC4wNzA0LTQ3LjQ2MjQgNDguNzkzNi05MC4xMTIgODUuNDAxNi0xMjYuNzJzNzkuMjA2NC02NS4zMzEyIDEyNi43Mi04NS40MDE2YzQ5LjE1Mi0yMC43ODcyIDEwMS4zNzYtMzEuMzM0NCAxNTUuMTg3Mi0zMS4zMzQ0czEwNi4wMzUyIDEwLjU0NzIgMTU1LjE4NzIgMzEuMzM0NGM0Ny40NjI0IDIwLjA3MDQgOTAuMTEyIDQ4Ljc5MzYgMTI2LjcyIDg1LjQwMTYgMzYuNjA4IDM2LjYwOCA2NS4zMzEyIDc5LjIwNjQgODUuNDAxNiAxMjYuNzIgMjAuNzg3MiA0OS4xNTIgMzEuMzM0NCAxMDEuMzc2IDMxLjMzNDQgMTU1LjE4NzJzLTEwLjU0NzIgMTA2LjAzNTItMzEuMzM0NCAxNTUuMTg3MmMtMjAuMDcwNCA0Ny40NjI0LTQ4Ljg0NDggOTAuMTEyLTg1LjQwMTYgMTI2LjcyYTM5Ny4yMjQ5NiAzOTcuMjI0OTYgMCAwIDEtMTI2LjcyIDg1LjQwMTZjLTQ5LjE1MiAyMC43ODcyLTEwMS4zNzYgMzEuMzM0NC0xNTUuMTg3MiAzMS4zMzQ0eiBtMC03NTAuMzg3MmMtOTMuOTUyIDAtMTgyLjI3MiAzNi42MDgtMjQ4LjcyOTYgMTAzLjAxNDRDMTkzLjAyNCAzMjguOTYgMTU2LjQxNiA0MTcuMzMxMiAxNTYuNDE2IDUxMS4yODMyYzAgOTMuOTUyIDM2LjYwOCAxODIuMjcyIDEwMy4wMTQ0IDI0OC43Mjk2IDY2LjQ1NzYgNjYuNDU3NiAxNTQuNzc3NiAxMDMuMDE0NCAyNDguNzI5NiAxMDMuMDE0NCA5My45NTIgMCAxODIuMjcyLTM2LjYwOCAyNDguNzI5Ni0xMDMuMDE0NHMxMDMuMDE0NC0xNTQuNzc3NiAxMDMuMDE0NC0yNDguNzI5NmMwLTkzLjk1Mi0zNi42MDgtMTgyLjI3Mi0xMDMuMDE0NC0yNDguNzI5Ni02Ni40MDY0LTY2LjQ1NzYtMTU0Ljc3NzYtMTAzLjAxNDQtMjQ4LjcyOTYtMTAzLjAxNDR6IiBmaWxsPSIjMmMyYzJjIiBwLWlkPSIxMTA0OCI+PC9wYXRoPjxwYXRoIGQ9Ik0yOTkuNzI0OCA1MTEuMjgzMm0tNTIuMDcwNCAwYTUyLjA3MDQgNTIuMDcwNCAwIDEgMCAxMDQuMTQwOCAwIDUyLjA3MDQgNTIuMDcwNCAwIDEgMC0xMDQuMTQwOCAwWiIgZmlsbD0iIzJjMmMyYyIgcC1pZD0iMTEwNDkiPjwvcGF0aD48cGF0aCBkPSJNNTA4LjE2IDUxMS4yODMybS01Mi4wNzA0IDBhNTIuMDcwNCA1Mi4wNzA0IDAgMSAwIDEwNC4xNDA4IDAgNTIuMDcwNCA1Mi4wNzA0IDAgMSAwLTEwNC4xNDA4IDBaIiBmaWxsPSIjMmMyYzJjIiBwLWlkPSIxMTA1MCI+PC9wYXRoPjxwYXRoIGQ9Ik03MTYuNjQ2NCA1MTEuMjgzMm0tNTIuMDcwNCAwYTUyLjA3MDQgNTIuMDcwNCAwIDEgMCAxMDQuMTQwOCAwIDUyLjA3MDQgNTIuMDcwNCAwIDEgMC0xMDQuMTQwOCAwWiIgZmlsbD0iIzJjMmMyYyIgcC1pZD0iMTEwNTEiPjwvcGF0aD48L3N2Zz4=";

return `
    

<category name="%{BKY_KS_VARIABLE_LABEL}" id="KS_OTHER_CATEGORY" colour="#f08080" secondaryColour="#42CCFF">
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

<category name="%{BKY_KS_TEXT_LABEL}" id="KS_TEXT_LABEL" colour="#FF4500" secondaryColour="#42CCFF">
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

<category name="%{BKY_BUTTON_CATEGORY}" id="BUTTON_CATEGORY" colour="#87cefa" secondaryColour="#3373CC">
    <block type="Button_readState" id="Button_readState">
        <field name="pin">16</field>
    </block>
    <block type="Button_readValue" id="Button_readValue">
        <field name="pin">16</field>
    </block>
</category>

<category name="%{BKY_TOUCHSWITCH_CATEGORY}" id="TOUCHSWITCH_CATEGORY" colour="#87cefa" secondaryColour="#BA55D3">
    <block type="touchSwitch_state" id="touchSwitch_state">
        <field name="pin">27</field>
    </block>
    <block type="touchSwitch_readValue" id="touchSwitch_readValue">
    <field name="pin">27</field>
</block>
</category>

<category name="%{BKY_BUZZER_CATEGORY}" id="BUZZER_CATEGORY" colour="#0000ff" secondaryColour="#FF6F00">
    <block type="buzzer_tone_d" id="buzzer_tone_d">
        <field name="PIN">33</field>
        <value name="dur">
            <shadow type="math_number">
                <field name="NUM">131</field>
            </shadow>
        </value>
    </block>

    <block type="buzzer_music" id="buzzer_music">
        <field name="PIN">33</field>
    </block>

    <block type="buzzer_notone" id="buzzer_notone">
        <field name="PIN">33</field>
    </block>
    
</category>



<category name="%{BKY_AHT21_CATEGORY}" id="AHT21_CATEGORY" colour="#7cfc00" secondaryColour="#42CCFF">
<block type="AHT20_21">
</block>
</category>


<category name="%{BKY_BBRGBLEDSTRIP_CATEGORY}" id="BBRGBLEDSTRIP_CATEGORY" colour="#008000" secondaryColour="#4400B3">

   <block type="bbrgbLedStrip_init" id="bbrgbLedStrip_init">
        <value name="LEN">
            <shadow type="math_number">
                <field name="NUM">25</field>
            </shadow>
        </value>
        <field name="PIN">13</field>
    </block>

    
<block type="bbrgbLedStrip_display" id="bbrgbLedStrip_display">
    <value name="NUM">
    <shadow type="math_number">
        <field name="NUM">100</field>
    </shadow>
    </value>
 
    <value name="COLOR">
    <shadow type="colour_picker"/>
    </value>
    <value name="MATRIX">
    <shadow type="matrix">
        <field name="MATRIX">0101010101100010101000100</field>
    </shadow>
    </value>
  
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
                <field name="NUM">25</field>
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

<field name="PIN">13</field>
 
    
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

<field name="PIN">13</field>
 
    
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


<category name="%{BKY_ANALOGVOICE_CATEGORY}" id="ANALOGVOICE_CATEGORY" colour="#ff1493" secondaryColour="#BA55D3">
    <block type="analogVoice_readValue" id="analogVoice_readValue">
        <field name="PIN">35</field>
    </block>
</category>

<category name="%{BKY_VOLTAGE_CATEGORY}" id="VOLTAGE_CATEGORY" colour="#ff1493" secondaryColour="#BA55D3">
    <block type="voltage_readValue" id="voltage_readValue">
        <field name="PIN">39</field>
    </block>
</category>

<category name="%{BKY_CURRENT_CATEGORY}" id="CURRENT_CATEGORY" colour="#ff1493" secondaryColour="#BA55D3">
    <block type="current_readValue" id="current_readValue">
        <field name="PIN">36</field>
    </block>
</category>

<category name="%{BKY_MPU6050_CATEGORY}" id="MPU6050_CATEGORY" colour="#8a2be2" secondaryColour="#BBBB00" >
    <block type="mpu6050_init" id="mpu6050_init">

    </block>

    <block type="mpu6050_refresh" id="mpu6050_refresh">

    </block>

    <block type="mpu6050_read" id="mpu6050_read">

    </block>
</category>


<category name="%{BKY_WIFI_CATEGORY}" id="WIFI_CATEGORY" colour="#ffd700" secondaryColour="#930093">
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

<category name="%{BKY_SD_CATEGORY}" id="SD_CATEGORY" colour="#20b2aa" secondaryColour="#42CCFF">
    <block type="sd_init" id="sd_init">
    	<value name="cs">
            <shadow type="math_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
    </block>

    <block type="sd_type" id="sd_type">
    	<value name="cs">
            <shadow type="math_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
    </block>

    <block type="sd_list" id="sd_list">
    	<value name="cs">
            <shadow type="math_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
    </block>

    <block type="sd_var" id="sd_var">
    	<value name="cs">
            <shadow type="math_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
    </block>

    <block type="sd_judge" id="sd_judge">
    	<value name="file">
            <shadow type="text">
                <field name="TEXT">file.txt</field>
            </shadow>
        </value>
    </block>

    <block type="sd_delete" id="sd_delete">
    	<value name="file">
            <shadow type="text">
                <field name="TEXT">file.txt</field>
            </shadow>
        </value>
    </block>

    <block type="sd_read" id="sd_read">
    	<value name="file">
            <shadow type="text">
                <field name="TEXT">file.txt</field>
            </shadow>
        </value>
    </block>

    <block type="sd_write" id="sd_write">
    	<value name="file">
            <shadow type="text">
                <field name="TEXT">file.txt</field>
            </shadow>
        </value>
        <value name="data">
            <shadow type="text">
                <field name="TEXT">hello,world</field>
            </shadow>
        </value>
    </block>

</category>`;

}
exports = addToolbox;
