/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    const HUSKYLENS_VISION_ICON = "data:image/png;base64,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";
    return `
<category name="%{BKY_HUSKYLENSVISION_CATEGORY}" id="HUSKYLENSVISION_CATEGORY" colour="#00a300" secondaryColour="#008000" iconURI="${HUSKYLENS_VISION_ICON}">
    
    <block type="huskyLensVision_beginI2C" id="huskyLensVision_beginI2C">
        <field name="SDA_PIN">21</field>
        <field name="SCL_PIN">22</field>
        <field name="ADDRESS">0x32</field>
    </block>

    <block type="huskyLensVision_writeAlgorithm" id="huskyLensVision_writeAlgorithm">
    </block>

    <block type="huskyLensVision_request" id="huskyLensVision_request">
    </block>

    
    <sep gap="35"/>
    <block type="huskyLensVision_readLearnedIDCount" id="huskyLensVision_readLearnedIDCount">
    </block>

    <sep gap="15"/>
    <block type="huskyLensVision_isAppearDirect" id="huskyLensVision_isAppearDirect">
    </block>

    <sep gap="15"/>
    <block type="huskyLensVision_readBlockCenterParameterDirect" id="huskyLensVision_readBlockCenterParameterDirect">
    </block>

    <sep gap="15"/>
    <block type="huskyLensVision_readArrowCenterParameterDirect" id="huskyLensVision_readArrowCenterParameterDirect">
    </block>


    <sep gap="35"/>
    <block type="huskyLensVision_isLearned" id="huskyLensVision_isLearned">
        <value name="COUNT">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>

    <sep gap="15"/>
    <block type="huskyLensVision_isAppear" id="huskyLensVision_isAppear">
        <value name="COUNT">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>

    <sep gap="15"/>
    <block type="huskyLensVision_readBlockParameter" id="huskyLensVision_readBlockParameter">
        <value name="COUNT">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>

    <sep gap="15"/>
    <block type="huskyLensVision_readArrowParameter" id="huskyLensVision_readArrowParameter">
        <value name="COUNT">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>


    <sep gap="35"/>
    <block type="huskyLensVision_readCount" id="huskyLensVision_readCount">
    </block>

    <sep gap="15"/>
    <block type="huskyLensVision_readBlockParameterDirect" id="huskyLensVision_readBlockParameterDirect">
        <value name="SN">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>

    <sep gap="15"/>
    <block type="huskyLensVision_readArrowParameterDirect" id="huskyLensVision_readArrowParameterDirect">
        <value name="SN">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>

    <sep gap="35"/>
    <block type="huskyLensVision_readCount2" id="huskyLensVision_readCount2">
        <value name="COUNT">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>

    <sep gap="15"/>
    <block type="huskyLensVision_readBlockParameter2" id="huskyLensVision_readBlockParameter2">
        <value name="COUNT">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="SN">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>

    <sep gap="15"/>
    <block type="huskyLensVision_readArrowParameter2" id="huskyLensVision_readArrowParameter2">
        <value name="COUNT">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="SN">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>

    <sep gap="35"/>
    <block type="huskyLensVision_learnOnce" id="huskyLensVision_learnOnce">
        <value name="COUNT">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>

    <block type="huskyLensVision_forgetLearn" id="huskyLensVision_forgetLearn">
    </block>

    <block type="huskyLensVision_writeName" id="huskyLensVision_writeName">
        <value name="COUNT">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="STRING">
            <shadow type="text">
                <field name="TEXT">BeeCode</field>
            </shadow>
        </value>
    </block>


    <sep gap="35"/>
    <block type="huskyLensVision_writeOSD" id="huskyLensVision_writeOSD">
        <value name="ROW">
            <shadow type="huskyLens_screen_row_length">
                <field name="NUM">230</field>
            </shadow>
        </value>
        <value name="COLUMN">
            <shadow type="huskyLens_screen_column_length">
                <field name="NUM">35</field>
            </shadow>
        </value>
        <value name="STRING">
            <shadow type="text">
                <field name="TEXT">Hello BeeCode</field>
            </shadow>
        </value>
    </block>

    <block type="huskyLensVision_clearOSD" id="huskyLensVision_clearOSD">
    </block>


    <sep gap="35"/>
    <block type="huskyLensVision_photoToSDCard" id="huskyLensVision_photoToSDCard">
    </block>

    <block type="huskyLensVision_ModelToTFCard" id="huskyLensVision_ModelToTFCard">
        <value name="SN">
            <shadow type="huskyLens_model_dropdown">
                <field name="SN">0</field>
            </shadow>
        </value>
    </block>


    <sep gap="36"/>

</category>`;
}

exports = addToolbox;