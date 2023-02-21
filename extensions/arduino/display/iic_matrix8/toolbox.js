/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    return `
<category name="%{BKY_MATRIX_IIC_CATEGORY}" id="MATRIX_IIC_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF">
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

</category>`;
}

exports = addToolbox;
