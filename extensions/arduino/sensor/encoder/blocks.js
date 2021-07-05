/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#42CCFF';
    const encoderIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgMzMuOCA0OS43IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMy44IDQ5Ljc7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSLml4vovaznvJbnoIHlmaguc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMi0yIChlODZjODcwODc5LCAyMDIxLTAxLTE1KSI+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTI5Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzMjciIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICBib3JkZXJvcGFjaXR5PSIxIgogICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICBncmlkdG9sZXJhbmNlPSIxMCIKICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICBpZD0ibmFtZWR2aWV3MjUiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMTcuNDQ0NjY4IgogICBpbmtzY2FwZTpjeD0iMTYuOSIKICAgaW5rc2NhcGU6Y3k9IjExLjA5MjIxNSIKICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IuWbvuWxgl8xIiAvPgo8c3R5bGUKICAgdHlwZT0idGV4dC9jc3MiCiAgIGlkPSJzdHlsZTIiPgoJLnN0MHtmaWxsOiMwMEM3RTg7fQo8L3N0eWxlPgo8ZwogICBpZD0iZzIyIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIj4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0wLDM5LjJWMjYuNGgzMy44djEyLjhMMCwzOS4yTDAsMzkuMnogTTIsMjguNHY4LjhoMjkuOHYtOC44SDJ6IgogICBpZD0icGF0aDQiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMTMuNCwyOC40VjBoNy41djI4LjRIMTMuNHogTTE1LjQsMnYyNC40aDMuNVYySDE1LjR6IgogICBpZD0icGF0aDYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNNy41LDI4LjR2LTguNmgxOS4ydjguNkMyNi43LDI4LjQsNy41LDI4LjQsNy41LDI4LjR6IE05LjUsMjEuOHY0LjZoMTUuMnYtNC42SDkuNXoiCiAgIGlkPSJwYXRoOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0yNy4yLDQ5LjNWMzguOWMwLTAuMiwwLjItMC40LDAuNC0wLjRoMS4zYzAuMiwwLDAuNCwwLjIsMC40LDAuNHYxMC40YzAsMC4yLTAuMiwwLjQtMC40LDAuNGgtMS4zICAgQzI3LjQsNDkuNywyNy4yLDQ5LjUsMjcuMiw0OS4zIgogICBpZD0icGF0aDEwIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTE2LjYsNDkuM1YzOC45YzAtMC4yLDAuMi0wLjQsMC40LTAuNGgxLjNjMC4yLDAsMC40LDAuMiwwLjQsMC40djEwLjRjMCwwLjItMC4yLDAuNC0wLjQsMC40SDE3ICAgQzE2LjgsNDkuNywxNi42LDQ5LjUsMTYuNiw0OS4zIgogICBpZD0icGF0aDEyIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTYsNDkuM1YzOC45YzAtMC4yLDAuMi0wLjQsMC40LTAuNGgxLjNjMC4yLDAsMC40LDAuMiwwLjQsMC40djEwLjRjMCwwLjItMC4yLDAuNC0wLjQsMC40SDYuNCAgIEM2LjIsNDkuNyw2LDQ5LjUsNiw0OS4zIgogICBpZD0icGF0aDE0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTI2LjMsMzQuOGMtMS4zLDAtMi4zLTAuOS0yLjMtMS45czEtMS45LDIuMy0xLjlzMi4zLDAuOSwyLjMsMS45QzI4LjcsMzMuOSwyNy42LDM0LjgsMjYuMywzNC44IgogICBpZD0icGF0aDE2IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTE3LjcsMzQuOGMtMS4zLDAtMi4zLTAuOS0yLjMtMS45czEtMS45LDIuMy0xLjlzMi4zLDAuOSwyLjMsMS45QzIwLDMzLjksMTksMzQuOCwxNy43LDM0LjgiCiAgIGlkPSJwYXRoMTgiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNOC41LDM0LjhjLTEuMywwLTIuMy0wLjktMi4zLTEuOXMxLTEuOSwyLjMtMS45czIuMywwLjksMi4zLDEuOUMxMC44LDMzLjksOS44LDM0LjgsOC41LDM0LjgiCiAgIGlkPSJwYXRoMjAiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+CjwvZz4KPC9zdmc+Cg==';
    
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.ks_encoder_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.KSENCODER_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: encoderIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options: [
                            ['Encoder1', 'encoder_1'],
                            ['Encoder2', 'encoder_2'],
                            ['Encoder3', 'encoder_3'],
                            ['Encoder4', 'encoder_4'],
                            ],
                    },
                    {
                        type: 'field_dropdown',
                        name: 'dt',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'clk',
                        options: digitalPins
                    },
                    
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ks_encoder_read = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.KSENCODER_READ,
                args0: [
                    {
                        type: 'field_image',
                        src: encoderIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options: [
                            ['Encoder1', 'encoder_1'],
                            ['Encoder2', 'encoder_2'],
                            ['Encoder3', 'encoder_3'],
                            ['Encoder4', 'encoder_4'],
                            ],
                    },
                    
                ],
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.ks_encoder_write = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.KSENCODER_WRITE,
                args0: [
                    {
                        type: 'field_image',
                        src: encoderIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options: [
                            ['Encoder1', 'encoder_1'],
                            ['Encoder2', 'encoder_2'],
                            ['Encoder3', 'encoder_3'],
                            ['Encoder4', 'encoder_4'],
                            ],
                    },
                    {
                        type: 'input_value',
                        name: 'data'
                    },
                    
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ks_encoder_button = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.KSENCODER_BUTTON,
                args0: [
                    {
                        type: 'field_image',
                        src: encoderIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    },
                    
                ],
                colour: color,
                extensions: ['output_number']
            });
        }
    };


    

    return Blockly;
}

exports = addBlocks;
