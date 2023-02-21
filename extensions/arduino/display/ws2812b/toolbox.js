/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_WS2812B_CATEGORY}" id="WS2812B_CATEGORY" colour="#A0522D" secondaryColour="#8B4513">
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
</category>`;
}

exports = addToolbox;
