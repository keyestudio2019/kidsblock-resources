/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#D39DDB';
    // const secondaryColour = '#BA55D3';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.singleProbe_readState = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SINGLEPROBE_READ_STATE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    }
                ],
                colour: color,
                // secondaryColour: secondaryColour,
                extensions: ['output_boolean']
                // extensions: ['output_number']
                // extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.singleProbe_readValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SINGLEPROBE_READ_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    }
                ],
                colour: color,
                // secondaryColour: secondaryColour,
                // extensions: ['output_boolean']
                extensions: ['output_number']
                // extensions: ['shape_statement']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;
