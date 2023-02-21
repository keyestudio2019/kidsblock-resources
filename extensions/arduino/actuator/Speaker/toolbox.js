/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_METASPEAKER_CATEGORY}" id="METASPEAKER_CATEGORY" colour="#B943FF" secondaryColour="#9900FF">
    <block type="metaSpeaker_init" id="metaSpeaker_init">
        <field name="PIN">A0</field>
    </block>
    <block type="metaSpeaker_playToneForBeat" id="metaSpeaker_playToneForBeat">
        <field name="PIN">A0</field>
        <field name="FREQ">note_C4</field>
    </block>
    <block type="metaSpeaker_setTempo" id="metaSpeaker_setTempo">
        <field name="PIN">A0</field>
        <value name="BPM">
            <shadow type="math_whole_number">
                <field name="NUM">120</field>
            </shadow>
        </value>
    </block>
    <block type="metaSpeaker_playRingtone" id="metaSpeaker_playRingtone">
        <field name="PIN">A0</field>
    </block>
</category>`;
}

exports = addToolbox;
