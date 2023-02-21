/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#42CCFF';
    const heartIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNDkuNyA0Ni41IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OS43IDQ2LjU7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSLlv4Pot7PohInmkI8uc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMi0yIChlODZjODcwODc5LCAyMDIxLTAxLTE1KSI+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTE1Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlIC8+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzMTMiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICBib3JkZXJvcGFjaXR5PSIxIgogICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICBncmlkdG9sZXJhbmNlPSIxMCIKICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICBpZD0ibmFtZWR2aWV3MTEiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMTguNjQ1MTYxIgogICBpbmtzY2FwZTpjeD0iMjQuODUiCiAgIGlua3NjYXBlOmN5PSIyNS4zOTUzMjkiCiAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSLlm77lsYJfMSIKICAgaW5rc2NhcGU6ZG9jdW1lbnQtcm90YXRpb249IjAiIC8+CjxzdHlsZQogICB0eXBlPSJ0ZXh0L2NzcyIKICAgaWQ9InN0eWxlMiI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwQTBFOTt9Cjwvc3R5bGU+CjxnCiAgIGlkPSJnOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMC4yLDE0LjZjMCw0LjEsMS44LDcuMiwyLjQsOS40aDcuM2MwLjYtMS4zLDEuMS0yLjgsMS43LTQuMmMwLjctMS41LDEuMS0zLjEsMy0zLjFjMi41LDAsMi41LDQuMiwzLjEsNi44ICAgYzAuNi0wLjcsMi43LTEwLjUsMy0xMS44YzAuNS0yLjEsMC41LTIuOCwyLjYtMi44YzEuNywwLDIsMS42LDIuMywyLjljMC40LDEuNSwwLjcsMi41LDEsNC4xbDEuNSw2LjJjMC41LDIuMi0wLjMsMS44LDQuMywxLjggICBjMiwwLDAuOC0xLjcsNC43LTEuN2MzLjksMCw0LjMsNC45LDIuNiw2LjZjLTEuMiwxLjMtMy45LDEuNS01LjQsMC42Yy0wLjktMC42LTAuNS0xLTEuNy0xLjFjLTctMC44LTcuMSwyLjQtOC45LTQuOCAgIGMtMC4yLTEtMC4yLTEuNi0wLjgtMmMtMC41LDIuNC0xLjIsNC43LTEuNyw3LjJjLTAuNiwyLjUtMSw1LjMtMS44LDcuNGMtMC44LDIuMy00LDIuOC00LjUtMC45Yy0wLjItMS4yLTAuNS0yLjUtMC43LTMuOCAgIGMtMC4yLTEuMy0wLjYtMi43LTAuNy00Yy0xLjcsMC41LDAuMywxLTMuOCwwLjljLTEuNiwwLTMuMSwwLTQuNywwYzAuNCwxLjUsMyw0LjUsNC4yLDZjNC4xLDQuOCw3LjEsNywxMiwxMC4yICAgYzAuNywwLjQsMS4yLDAuOCwxLjksMS4yYzIsMS4xLDIsMC45LDMuOS0wLjJjNi44LTMuOCwxNC4yLTEwLjUsMTgtMTcuM2M0LjMtNy43LDcuMi0xNi4xLDEuMS0yMy43Yy0xLjQtMS44LTUuMi00LjItOC4zLTQuMiAgIGMtNS41LDAtNi43LDAuNC0xMC45LDMuN2MtMC43LDAuNi0xLjYsMS4yLTEuOCwyLjFDMjMuNiw1LDIwLjMsMCwxMy40LDBDNi4yLDAsMC4yLDYuMywwLjIsMTQuNiIKICAgaWQ9InBhdGg0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTE3LjcsMzEuMWMwLDAtMC4xLTAuMi0wLjEtMC4ybC0xLjItNi41Yy0wLjItMS4zLTAuNC0yLjItMC42LTMuNGMtMC4zLTEuMy0wLjItMi41LTEuNC0yLjggICBjLTEuMSwwLjgtMi43LDUuNy0zLjUsNy4zSDAuMkMwLjEsMjYsMC4xLDI2LDAsMjYuNmMxLDAuNywxLDAuNSwyLjYsMC41SDEyYzAuMy0xLjUsMS43LTMsMS45LTQuN2MwLjcsMC41LDAuNiwxLjYsMC45LDMuNSAgIGMwLjIsMS4zLDAuNSwyLjYsMC43LDMuOGMwLjIsMS4zLDAuNSwyLjYsMC43LDMuOGMwLjMsMS43LDAsMi44LDEuNSwzLjJjMC43LTAuNiwwLjctMS4yLDEtMi4zbDMuOS0xNi42YzAuMS0wLjYsMC4yLTAuOCwwLjMtMS4zICAgbDAuNC0xLjJjMCwwLDAtMC4xLDAuMS0wLjJjMC4xLDEuNCwyLjgsMTEuNCwzLjEsMTJoNy44YzAuNiwyLjYsNS40LDIuOCw1LjQtMS4yYzAtMi43LTQuNy0zLjQtNS40LTAuNWgtNi42bC0zLjQtMTMuOCAgIEMyNCwxMC45LDIzLjcsMTAsMjMsMTAuM2MtMC43LDAuMi0wLjcsMS4yLTAuOSwyLjFMMTcuNywzMS4xeiIKICAgaWQ9InBhdGg2IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgo8L2c+Cjwvc3ZnPgo=';
    
    Blockly.Blocks.heartRate_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.HEARTRATE_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: heartIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.heartRate_set = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.HEARTRATE_SET,
                args0: [
                    {
                        type: 'field_image',
                        src: heartIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };



    Blockly.Blocks.heartRate_read = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.HEARTRATE_READ,
                args0: [
                    {
                        type: 'field_image',
                        src: heartIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'unit',
                        options: [
                            ['IR', 'irValue'],
                            ['BPM', 'beatsPerMinute'],
                            ['Avg BPM', 'beatAvg']
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
