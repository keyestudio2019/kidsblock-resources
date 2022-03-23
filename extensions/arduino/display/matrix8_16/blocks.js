/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#42CCFF';
    const matrix_iic_IconUrl = 'data:image/png;base64,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';
    
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.matrix8_16_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MATRIX8_16_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: matrix_iic_IconUrl,
                        width: 50,
                        height: 27
                    },
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'SDA',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'SCL',
                        options: digitalPins
                    }
                    
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.matrix8_16_face = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MATRIX8_16_FACE,
                args0: [
                    {
                        type: 'field_image',
                        src: matrix_iic_IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'face',
                        options: [
                            ['∩_∩', 'matrix_smile'],
                            ['￣へ￣', 'matrix_tsundere'],
                            ['>_<', 'matrix_squinting'],
                            ['﹂_﹂', 'matrix_despise1'],
                            ['￣□￣', 'matrix_speechless'],
                            ['♥', 'matrix_heart'],
                            ['↑', 'matrix_front'],
                            ['↓', 'matrix_back'],
                            ['←', 'matrix_right'],
                            ['→', 'matrix_left'],
                            ['STOP', 'matrix_stop'],
                            ],
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.matrix8_16_clear = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MATRIX8_16_CLEAR,
                args0: [
                    {
                        type: 'field_image',
                        src: matrix_iic_IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;
