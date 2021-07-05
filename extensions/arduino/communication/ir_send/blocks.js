/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF3399';
    const irsIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNTMuMSAyMC4xIgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1My4xIDIwLjE7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSLnuqLlpJblj5HlsIQuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMi0yIChlODZjODcwODc5LCAyMDIxLTAxLTE1KSI+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTE5Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzMTciIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICBib3JkZXJvcGFjaXR5PSIxIgogICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICBncmlkdG9sZXJhbmNlPSIxMCIKICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICBpZD0ibmFtZWR2aWV3MTUiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMjEuMDU0NjE1IgogICBpbmtzY2FwZTpjeD0iMjYuNTQ5OTk5IgogICBpbmtzY2FwZTpjeT0iMTAuMDUiCiAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSLlm77lsYJfMSIgLz4KPHN0eWxlCiAgIHR5cGU9InRleHQvY3NzIgogICBpZD0ic3R5bGUyIj4KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojMDBBMEU5O30KPC9zdHlsZT4KPGcKICAgaWQ9ImcxMiIKICAgdHJhbnNmb3JtPSJtYXRyaXgoLTEsMCwwLDEsNTIuOTYyNjgxLDApIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIj4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0gNTIuNSwxOS43IEMgNTMuMywxOC45IDUzLDE2LjUgNTMsMTUgYyAwLC0xLjcgMCwtMy4xIDAsLTQuNyBWIDMuMSBDIDUzLC0wLjMgNTIuMiwwLjIgNDcuOSwwLjIgNDIsMC4yIDI0LjksMC41IDIwLjMsMC4xIDE0LjIsLTAuNCAxNS4xLDAuOCAxNS4xLDUuMyB2IDkuNSBjIDAsNi4yIC0xLjEsNS4xIDkuNyw1LjEgMy4yLDAgNi4xLDAuMSA5LjIsMC4xIDMuMSwwIDYuMSwwIDkuMiwwIDEuMywwLjEgOC43LDAuMyA5LjMsLTAuMyBNIDIwLjMsMTQuOCBDIDE2LDEwLjUgMTguOSwzLjggMjQuOCwzLjMgMjguMywzIDMyLjIsNi40IDMyLDEwLjUgYyAtMC4yLDMuNyAtMy43LDYuNSAtNi45LDYuMyAtMS41LDAgLTMuNCwtMC42IC00LjgsLTIgeiBNIDM3LDE1LjkgYyAtMi40LC0yLjQgMC42LC02LjMgMy41LC00LjggNC4zLDIuMSAtMC4yLDguMSAtMy41LDQuOCB6IE0gNDEuMSw0LjEgYyAzLjMsMy4zIC0xLjIsNy4yIC00LDQuMyBDIDM2LjUsNy44IDM2LjIsNy4xIDM2LjIsNi40IDM2LDMuOSAzOS40LDIuNCA0MS4xLDQuMSBaIE0gNDksMTUuOSBjIC0yLjksMi45IC03LjIsLTEuNCAtNC41LC00LjIgMy4xLC0yLjkgNy4yLDEuNiA0LjUsNC4yIHogTSA0OC42LDQuMSBDIDUyLDcuNCA0Ny40LDExLjMgNDQuNCw4LjMgNDEuOSw1LjggNDYuMSwxLjYgNDguNiw0LjEgWiIKICAgaWQ9InBhdGg0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTSA1LjYsMTkuNyBDIDYuNSwxOC44IDYuNSwxOC41IDUuNSwxNi42IDQuNCwxNC42IDIuMSwxMy4zIDIuOSw4LjUgMy41LDQuNiA3LjYsMi4yIDUuNywwLjYgMy42LC0xLjMgMS4yLDMuMyAwLjYsNS42IGMgLTAuOCwzLjMgLTEsNS4yIC0wLjEsOC43IDAuNiwyLjIgMSwzLjMgMi43LDUgMC42LDAuNSAxLjksMC45IDIuNCwwLjQiCiAgIGlkPSJwYXRoNiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0gMjguMSw3LjggMjcuNCw3LjEgQyAyNiw1LjcgMjMuNSw2IDIyLjEsNy40IGMgLTMuMSwzLjEgMS40LDkgNS40LDUuNiAxLjcsLTEuNSAxLjYsLTQuMSAwLjYsLTUuMiIKICAgaWQ9InBhdGg4IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTSAxMS44LDMuNSBDIDEwLjgsMi41IDkuMiwzLjcgOC42LDQuOSA2LjMsOSA3LjksMTcuNiAxMS4yLDE2LjggMTMuNywxNi4yIDEwLjcsMTMuMyAxMC43LDEzLjMgOS43LDExLjggOS42LDkgMTAuMyw3LjQgMTAuOCw2LjUgMTMuMSw0LjggMTEuOCwzLjUiCiAgIGlkPSJwYXRoMTAiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+CjwvZz4KPC9zdmc+Cg==';
    

    Blockly.Blocks.ir_send = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.IR_SEND,
                args0: [
                    {
                        type: 'field_image',
                        src: irsIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options: [
                            ['RC5', 'RC5'],
                            ['RC6', 'RC6'],
                            ['NEC', 'NEC'],
                            ['Sony', 'Sony'],
                            ['Panasonic', 'Panasonic'],
                            ['JVC', 'JVC'],
                            ['SAMSUNG', 'SAMSUNG'],
                            ['Whynter', 'Whynter'],
                            ['AiwaRCT501', 'AiwaRCT501'],
                            ['LG', 'LG'],
                            ['Sanyo', 'Sanyo'],
                            ['Mitsubishi', 'Mitsubishi'],
                            ['DISH', 'DISH'],
                            ['SharpRaw', 'SharpRaw'],
                            ['Denon', 'Denon']
                            ]
                    },
                    {
                        type: 'input_value',
                        name: 'pin'
                    },
                    {
                        type: 'input_value',
                        name: 'data'
                    },
                    {
                        type: 'input_value',
                        name: 'bits'
                    },
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ir_send_raw = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.IR_SEND_RAW,
                args0: [
                    {
                        type: 'field_image',
                        src: irsIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'pin'
                    },
                    {
                        type: 'input_value',
                        name: 'array'
                    },
                    {
                        type: 'input_value',
                        name: 'listLength'
                    },
                    {
                        type: 'input_value',
                        name: 'fre'
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
