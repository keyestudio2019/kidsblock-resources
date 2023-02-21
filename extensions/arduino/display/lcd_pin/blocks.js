/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#BBBB00';
    const secondaryColour = '#888800';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.lcd_pin_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_PIN_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'RS',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'EN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'D4',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'D5',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'D6',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'D7',
                        options: digitalPins
                    },
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd_pin_print = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_PIN_PRINT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'DATA'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd_pin_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_PIN_CLEAR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'lcd_state',
                        options: [
                            ['Clear', 'clear()'],
                            ['ON', 'display()'],
                            ['OFF', 'onDisplay()'],
                            ['Cursor', 'cursor()'],
                            ['noCursor', 'noCursor()'],
                            ['Blink', 'blink()'],
                            ['noBlink', 'noBlink()'],
                            ['NoBackLight', 'noBacklight()'],
                            ['BackLight', 'backlight()'],
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    

    return Blockly;
}

exports = addBlocks;
