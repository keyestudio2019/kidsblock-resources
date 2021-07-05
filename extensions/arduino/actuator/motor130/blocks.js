/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF6F00';
    const motor130IconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNjkuNCA3Mi43IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2OS40IDcyLjc7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSIxMzDpo47miYfmqKHlnZcuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMi0yIChlODZjODcwODc5LCAyMDIxLTAxLTE1KSI+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTE5Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzMTciIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICBib3JkZXJvcGFjaXR5PSIxIgogICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICBncmlkdG9sZXJhbmNlPSIxMCIKICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICBpZD0ibmFtZWR2aWV3MTUiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMTEuOTI1NzIzIgogICBpbmtzY2FwZTpjeD0iMzQuNzAwMDAxIgogICBpbmtzY2FwZTpjeT0iMzYuMzQ5OTk4IgogICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0i5Zu+5bGCXzEiIC8+CjxzdHlsZQogICB0eXBlPSJ0ZXh0L2NzcyIKICAgaWQ9InN0eWxlMiI+Cgkuc3Qwe2ZpbGw6I0U2MDAxMjt9Cjwvc3R5bGU+CjxnCiAgIGlkPSJnMTIiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTM1LjYsNDFjLTAuOSwwLjEtMS43LTAuNC0yLjEtMS4yYy0wLjEtMC4yLTEyLjQtMjQuMSw4LjMtMzYuMWM2LjEtMy41LDExLjctNC40LDE2LjYtMi42ICAgYzcuNCwyLjgsMTAuMiwxMC44LDEwLjMsMTEuMnYwLjFjMC4yLDAuOCwyLjEsOC4yLTEuNiwxMi45Yy0xLjksMi40LTQuOSwzLjYtOC43LDMuNEMzOS4yLDI3LjksMzcuOCwzOC45LDM3LjgsMzkgICBjLTAuMSwxLTAuOCwxLjgtMS44LDEuOUMzNS44LDQwLjksMzUuNyw0MSwzNS42LDQxIE01Mi4zLDQuN0M0OS44LDQuOSw0Nyw1LjgsNDQsNy42Yy0xMiw2LjktMTAuNSwxOC44LTguNSwyNS4zICAgYzIuOS00LjMsOS4yLTkuMywyMy04LjdjMi40LDAuMSw0LTAuNSw1LTEuN2MxLjktMi40LDEuMi03LjIsMC44LTguOGMtMC4yLTAuNi0yLjUtNi40LTcuNi04LjRDNTUuNCw0LjgsNTMuOSw0LjYsNTIuMyw0Ljd6IgogICBpZD0icGF0aDQiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMzcuMywzNy44Yy0wLjEsMC45LTAuNywxLjYtMS42LDEuOWMtMC4zLDAuMS0yNS45LDcuOC0zNC0xNC43Yy0yLjQtNi43LTIuMi0xMi4zLDAuNS0xNi44ICAgQzYuMywxLjQsMTQuNywwLjEsMTUsMC4xaDAuMUMxNiwwLDIzLjUtMC41LDI3LjQsNGMyLDIuMywyLjYsNS40LDEuOCw5LjJjLTQuMywxOC43LDYuMywyMi4xLDYuNCwyMi4yYzAuOSwwLjMsMS42LDEuMSwxLjYsMi4xICAgQzM3LjMsMzcuNywzNy4zLDM3LjgsMzcuMywzNy44IE00LjcsMTQuOWMtMC4zLDIuNSwwLjIsNS40LDEuMyw4LjZjNC43LDEzLjEsMTYuNSwxMy43LDIzLjQsMTIuOWMtMy43LTMuNS03LjUtMTAuNi00LjUtMjQuMSAgIGMwLjUtMi4zLDAuMy00LjEtMC44LTUuM2MtMi0yLjMtNi45LTIuNS04LjUtMi40Yy0wLjcsMC4xLTYuOCwxLjMtOS42LDZDNS4zLDExLjksNC44LDEzLjMsNC43LDE0Ljl6IgogICBpZD0icGF0aDYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMzMuOCwzMS45YzAuOS0wLjEsMS43LDAuNCwyLjEsMS4yYzAuMSwwLjIsMTIuNCwyNC4xLTguMywzNi4xYy02LjEsMy41LTExLjcsNC40LTE2LjYsMi42ICAgQzMuNyw2OC45LDAuOSw2MC45LDAuOCw2MC42di0wLjFjLTAuMi0wLjgtMi4xLTguMiwxLjYtMTIuOWMxLjktMi40LDQuOS0zLjYsOC43LTMuNEMzMC4zLDQ1LDMxLjcsMzQsMzEuOCwzMy45ICAgYzAuMS0xLDAuOC0xLjgsMS44LTEuOUMzMy43LDMxLjksMzMuOCwzMS45LDMzLjgsMzEuOSBNMTcuMiw2OC4xYzIuNS0wLjIsNS4zLTEuMSw4LjMtMi45YzEyLTYuOSwxMC41LTE4LjgsOC41LTI1LjMgICBjLTIuOSw0LjMtOS4yLDkuMy0yMyw4LjdjLTIuNC0wLjEtNCwwLjUtNSwxLjdjLTEuOSwyLjQtMS4yLDcuMi0wLjgsOC44YzAuMiwwLjYsMi41LDYuNCw3LjYsOC40QzE0LjEsNjgsMTUuNiw2OC4yLDE3LjIsNjguMXoiCiAgIGlkPSJwYXRoOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0zMi4yLDM1YzAuMS0wLjksMC43LTEuNiwxLjYtMS45YzAuMy0wLjEsMjUuOS03LjgsMzQsMTQuN2MyLjQsNi43LDIuMiwxMi4zLTAuNSwxNi44ICAgYy00LjEsNi44LTEyLjUsOC4xLTEyLjgsOC4xaC0wLjFjLTAuOSwwLjEtOC40LDAuNi0xMi4zLTMuOWMtMi0yLjMtMi42LTUuNC0xLjgtOS4yYzQuMS0xOC43LTYuNC0yMi4yLTYuNS0yMi4yICAgYy0wLjktMC4zLTEuNi0xLjEtMS42LTIuMUMzMi4yLDM1LjIsMzIuMiwzNS4xLDMyLjIsMzUgTTY0LjgsNThjMC4zLTIuNS0wLjItNS40LTEuMy04LjZjLTQuNy0xMy4xLTE2LjYtMTMuOC0yMy40LTEzICAgYzMuNywzLjYsNy41LDEwLjcsNC40LDI0LjJjLTAuNSwyLjMtMC4zLDQuMSwwLjgsNS4zYzIsMi4zLDYuOSwyLjUsOC41LDIuNGMwLjctMC4xLDYuOC0xLjMsOS42LTZDNjQuMiw2MSw2NC42LDU5LjYsNjQuOCw1OHoiCiAgIGlkPSJwYXRoMTAiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+CjwvZz4KPC9zdmc+Cg==';
    
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.motor130_digital = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MOTOR130_DIGITAL,
                args0: [
                    {
                        type: 'field_image',
                        src: motor130IconUrl,
                        width: 50,
                        height: 27
                    }
                        
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'IN1',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'state1',
                        options: [
                            ['HIGH', 'HIGH'],
                            ['LOW', 'LOW']
                            ]
                    },

                    {
                        type: 'field_dropdown',
                        name: 'IN2',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'state2',
                        options: [
                            ['HIGH', 'HIGH'],
                            ['LOW', 'LOW']
                            ]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.motor130_analog = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MOTOR130_ANALOG,
                args0: [
                    {
                        type: 'field_image',
                        src: motor130IconUrl,
                        width: 50,
                        height: 27
                    }
                        
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'IN1',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED1'
                    },

                    {
                        type: 'field_dropdown',
                        name: 'IN2',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED2'
                    },
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;
