/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#4C97FF';
    const secondaryColour = '#3373CC';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    const analogPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_readAnalogPin')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.joyStick_xyValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.JOYSTICK_XY_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: analogPins
                    },{
                        type: 'field_dropdown',
                        name: 'xy',
                        options: [
                            [Blockly.Msg.X, 'X'],
                            [Blockly.Msg.Y, 'Y']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.joyStick_zState = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.JOYSTICK_Z_STATE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;
