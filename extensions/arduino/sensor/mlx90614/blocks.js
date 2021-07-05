/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#42CCFF';
    const mlxIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgMzAuNSA0NC43IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMC41IDQ0Ljc7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSLpnZ7mjqXop6bnuqLlpJbmuKnluqYuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMi0yIChlODZjODcwODc5LCAyMDIxLTAxLTE1KSI+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTI1Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzMjMiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICBib3JkZXJvcGFjaXR5PSIxIgogICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICBncmlkdG9sZXJhbmNlPSIxMCIKICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICBpZD0ibmFtZWR2aWV3MjEiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMTkuMzk1OTczIgogICBpbmtzY2FwZTpjeD0iMTUuMjUiCiAgIGlua3NjYXBlOmN5PSIxOC4yMjU0MzMiCiAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSLlm77lsYJfMSIgLz4KPHN0eWxlCiAgIHR5cGU9InRleHQvY3NzIgogICBpZD0ic3R5bGUyIj4KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojMDBBMEU5O30KPC9zdHlsZT4KPGcKICAgaWQ9ImcxOCIKICAgdHJhbnNmb3JtPSJtYXRyaXgoLTEsMCwwLDEsMzAuNSwwKSIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJtIDYuNiwwLjcgdiA2LjYgYyAwLDIuMSAwLjIsMy41IDAuMiw1LjYgMS4zLDAuNyAyLjYsMC45IDMuMywyLjMgMi43LDUuNiAtMC45LDIwLjIgMy4xLDI1LjQgMywzLjggNy40LDUuMiAxMS45LDMgMy4yLC0xLjUgNS40LC01LjEgNS40LC05LjMgMCwtMy4zIC0wLjIsLTYuMiAtMC4yLC05LjcgMCwtMi44IDAuMywtNy4yIDAsLTkuOCBDIDMwLjIsMTMuNyAzMC4zLDExIDMwLDEwLjIgMjguOCw2LjIgMjYsNC44IDIyLjEsMy4zIDIwLjcsMi44IDEyLjEsMC45IDEwLjIsMC41IDkuMiwwLjMgNi42LC0wLjcgNi42LDAuNyBtIDEuOSwxLjIgMTAuMywyLjQgYyA0LDAuOSA5LjYsMi41IDkuNSw3LjQgMCwxLjUgMC4yLDIuNSAwLjIsNC4xIHYgMTIuNyBjIDAsNS4zIDEuNSwxMCAtMy40LDEzLjIgQyAyMi41LDQzLjUgMTksNDMuMyAxNi41LDQxLjUgMTIuMywzOC40IDEzLDMzLjYgMTMsMjguOCAxMywyOCAxMywyNy4xIDEzLDI2LjMgTCAxMi43LDE4LjUgQyAxMi4zLDE1LjYgMTEuNiwxMi42IDguNCwxMS45IGwgMC4xLC0xMCB6IgogICBpZD0icGF0aDQiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJtIDE0LjIsMTIuNCB2IDguNSBjIDAsMS4zIDMuNiwwLjggNS4zLDAuOCAyLjYsMCA0LjcsLTAuMiA3LjMsLTAuMiAwLjIsLTAuMyAwLjUsLTAuNCAwLjUsLTAuOCB2IC01LjQgYyAwLC0xLjQgLTAuMiwtMi4yIC0wLjIsLTMuNiAtMC40LC0wLjIgLTAuNCwtMC41IC0wLjgsLTAuNSAtMy43LDAgLTYuOSwtMC4xIC0xMC41LDAuMiAtMS4xLDAuMSAtMS42LC0wLjEgLTEuNiwxIG0gMS45LDAuNyBoIDkuMiBjIDAsMC44IDAuMiwwLjcgMC4yLDEuNSB2IDUuMyBoIC05LjMgdiAtNi44IGggLTAuMSB6IgogICBpZD0icGF0aDYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJtIDE3LjMsMzQuOCBjIDAsMiAxLjUsMy45IDQuMSwzLjkgMiwwIDMuNiwtMS43IDMuNiwtNC4xIDAsLTEuNyAtMS42LC0zLjQgLTMuMiwtMy40IC0xLjYsMCAtMy4yLDAuMSAtNC4xLDIuMiAtMC4xLDAuMiAtMC40LDEuMyAtMC40LDEuNCBtIDEuOSwwLjIgYyAwLC0yLjUgMy45LC0zIDMuOSwwLjIgMCwyLjMgLTMuOSwyLjIgLTMuOSwtMC4yIHoiCiAgIGlkPSJwYXRoOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Im0gMjEuMiwyOC45IGMgMy41LDAgMywtNC45IDAuNSwtNC45IGggLTAuOCBjIC0yLjgsMCAtMi45LDQuOSAwLjMsNC45IG0gMC43LC0yLjYgYyAwLDAuNCAtMC4zLDAuNyAtMC43LDAuNyAtMC40LDAgLTAuNCwtMC4xIC0wLjcsLTAuMyAwLjEsLTEuNiAxLjQsLTEgMS40LC0wLjQgeiIKICAgaWQ9InBhdGgxMCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Im0gMC4yLDUuMSBjIDAsMS41IDIuMiwxIDUuMywxIDEuMSwwIDEuMSwtMS45IDAsLTEuOSBDIDMuMSw0LjMgMC4yLDMuOCAwLjIsNS4xIgogICBpZD0icGF0aDEyIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTSAwLjIsOCBDIDAuMiw5LjUgMi40LDkgNS41LDkgNi42LDkgNi42LDcuMSA1LjUsNy4xIDMuMSw3LjIgMC4yLDYuNyAwLjIsOCIKICAgaWQ9InBhdGgxNCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Im0gMCwyLjIgYyAwLjgsMS41IDAuOSwxIDUuMSwxIDEuNywwIDEuMywtMS45IDAuMywtMS45IEggMSBDIDAuNiwxLjMgMC40LDEuNiAwLjEsMiAwLjEsMi4xIDAuMSwyLjEgMCwyLjIgdiAwIgogICBpZD0icGF0aDE2IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgo8L2c+Cjwvc3ZnPgo=';
    
    Blockly.Blocks.mlx_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MLX_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: mlxIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mlx_read = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MLX_READ,
                args0: [
                    {
                        type: 'field_image',
                        src: mlxIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'unit',
                        options: [
                            ['C°', 'mlx.readObjectTempC()'],
                            ['F', 'mlx.readObjectTempF()'],
                            ]
                    }
                ],
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
