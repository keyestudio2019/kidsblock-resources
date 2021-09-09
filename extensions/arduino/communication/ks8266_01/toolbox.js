/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_KS8266_CATEGORY}" id="KS8266_CATEGORY" colour="#FF79BC" secondaryColour="#FF359A">
    <block type="esp8266_wifi01" id="esp8266_wifi01">
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
</category>`;
}

exports = addToolbox;
