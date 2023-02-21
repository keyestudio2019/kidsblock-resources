/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.metaSpeaker_init = function (block) {
        const pin = block.getFieldValue('PIN');
        const text = block.getField('PIN').text_.slice(1);

        Blockly.Arduino.includes_.metaSpeaker_init = `#include <Buzzer.h>`;
        Blockly.Arduino.definitions_.beatTime_init = `float beatTime_${text} = 60.0 / 120;`;
        Blockly.Arduino.definitions_[`metaSpeaker_${text}_init`] = `Buzzer speaker_${text}(${pin});`;
        // Blockly.Arduino.definitions_.metaSpeaker_init = `Buzzer buzzer(${pin});\n` +
        //     `float beatTime = 60.0 / 120;`;

        return ``;
    };

    Blockly.Arduino.metaSpeaker_playToneForBeat = function (block) {
        const pin = block.getFieldValue('PIN');
        const text = block.getField('PIN').text_.slice(1);

        Blockly.Arduino.includes_.metaSpeaker_init = `#include <Buzzer.h>`;
        Blockly.Arduino.definitions_.beatTime_init = `float beatTime_${text} = 60.0 / 120;`;
        Blockly.Arduino.definitions_[`metaSpeaker_${text}_init`] = `Buzzer speaker_${text}(${pin});`;
        
        const freq = this.getFieldValue('FREQ');
        const time = this.getFieldValue('TIME');

        return `speaker_${text}.tone(${freq}, ${time} * 1000 * beatTime_${text});\n`;
    };

    Blockly.Arduino.metaSpeaker_setTempo = function (block) {
        const pin = block.getFieldValue('PIN');
        const text = block.getField('PIN').text_.slice(1);

        Blockly.Arduino.includes_.metaSpeaker_init = `#include <Buzzer.h>`;
        Blockly.Arduino.definitions_.beatTime_init = `float beatTime_${text} = 60.0 / 120;`;
        Blockly.Arduino.definitions_[`metaSpeaker_${text}_init`] = `Buzzer speaker_${text}(${pin});`;
        const bpm = Blockly.Arduino.valueToCode(block, 'BPM', Blockly.Arduino.ORDER_ATOMIC);

        return `beatTime_${text} = 60.0 / ${bpm};\n`;
    };

    Blockly.Arduino.metaSpeaker_playRingtone = function (block) {
        const pin = block.getFieldValue('PIN');
        const text = block.getField('PIN').text_.slice(1);

        Blockly.Arduino.includes_.metaSpeaker_init = `#include <Buzzer.h>`;
        Blockly.Arduino.definitions_.beatTime_init = `float beatTime_${text} = 60.0 / 120;`;
        Blockly.Arduino.definitions_[`metaSpeaker_${text}_init`] = `Buzzer speaker_${text}(${pin});`;

        const no = this.getFieldValue('NO');

        return `speaker_${text}.playRingtone(${no});\n`;
    };

    return Blockly;
}

exports = addGenerator;
