/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#f08080';
    const color2 = '#ff0000';
    const color3 = '#ff8c00';
    const color4 = '#00bfff';
    const color5 = '#0000ff';
    const color6 = '#7cfc00';
    const color7 = '#008000';
    const color8 = '#20b2aa';
    const color9 = '#483d8b';
    const secondaryColour = '#CD5C5C';
    
    const LEDIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNDcuOCA0OC43IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0Ny44IDQ4Ljc7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSI2ODEyIFJHQi5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMC4yLTIgKGU4NmM4NzA4NzksIDIwMjEtMDEtMTUpIj48bWV0YWRhdGEKICAgaWQ9Im1ldGFkYXRhMjkiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMKICAgaWQ9ImRlZnMyNyIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciCiAgIGlkPSJuYW1lZHZpZXcyNSIKICAgc2hvd2dyaWQ9ImZhbHNlIgogICBpbmtzY2FwZTp6b29tPSIxNy44MDI4NzQiCiAgIGlua3NjYXBlOmN4PSIyMy45IgogICBpbmtzY2FwZTpjeT0iMjYuNTk2ODI5IgogICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0i5Zu+5bGCXzEiIC8+CjxzdHlsZQogICB0eXBlPSJ0ZXh0L2NzcyIKICAgaWQ9InN0eWxlMiI+Cgkuc3Qwe2ZpbGw6I0U2MDAxMjt9Cjwvc3R5bGU+CjxnCiAgIGlkPSJnMjIiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTcuMyw0MC4xTDcuMyw0MC4xYzAtMS42LDEuMy0yLjksMi45LTIuOWgyNy42YzEuNiwwLDIuOSwxLjMsMi45LDIuOVMzOS40LDQzLDM3LjgsNDNIMTAuMiAgIEM4LjYsNDMsNy4zLDQxLjcsNy4zLDQwLjEiCiAgIGlkPSJwYXRoNCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0zNy4yLDI4LjVWMjhjMC0wLjgsMC43LTEuNSwxLjUtMS41aDcuNmMwLjgsMCwxLjUsMC43LDEuNSwxLjV2MC41YzAsMC44LTAuNywxLjUtMS41LDEuNWgtNy42ICAgQzM3LjksMzAsMzcuMiwyOS4zLDM3LjIsMjguNSIKICAgaWQ9InBhdGg2IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTM1LjYsMTcuMmwtMC4zLTAuNGMtMC41LTAuNi0wLjQtMS42LDAuMi0yLjFsNS44LTQuOWMwLjYtMC41LDEuNi0wLjQsMi4xLDAuMmwwLjMsMC40ICAgYzAuNSwwLjYsMC40LDEuNi0wLjIsMi4xbC01LjgsNC45QzM3LDE3LjksMzYuMSwxNy45LDM1LjYsMTcuMiIKICAgaWQ9InBhdGg4IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTI0LjEsMTAuNmgtMC42Yy0wLjgsMC0xLjUtMC43LTEuNS0xLjVWMS41QzIyLDAuNywyMi43LDAsMjMuNSwwSDI0YzAuOCwwLDEuNSwwLjcsMS41LDEuNXY3LjYgICBDMjUuNSw5LjksMjQuOSwxMC42LDI0LjEsMTAuNiIKICAgaWQ9InBhdGgxMCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0xMi45LDE2LjNsLTAuNCwwLjRjLTAuNSwwLjYtMS40LDAuOC0yLjEsMC4zbC02LTQuNmMtMC43LTAuNS0wLjgtMS40LTAuMy0yLjFsMC4zLTAuNCAgIGMwLjUtMC42LDEuNC0wLjgsMi4xLTAuM2w2LDQuNkMxMy4yLDE0LjcsMTMuNCwxNS43LDEyLjksMTYuMyIKICAgaWQ9InBhdGgxMiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0xMC41LDI4LjF2MC41YzAsMC44LTAuNywxLjUtMS41LDEuNGwtNy42LTAuMmMtMC44LDAtMS41LTAuNy0xLjQtMS41di0wLjVjMC0wLjgsMC43LTEuNSwxLjUtMS40bDcuNiwwLjIgICBDOS45LDI2LjYsMTAuNSwyNy4zLDEwLjUsMjguMSIKICAgaWQ9InBhdGgxNCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0xMS43LDQxLjlWMjIuN2MwLTYuNCw1LjItMTEuNiwxMS42LTExLjZoMS41YzYuNCwwLDExLjYsNS4yLDExLjYsMTEuNnYxOS4xSDExLjdWNDEuOXogTTMzLjQsMjIuNyAgIGMwLTQuNy0zLjktOC42LTguNi04LjZoLTEuNWMtNC43LDAtOC42LDMuOS04LjYsOC42djE2LjFoMTguN0MzMy40LDM4LjgsMzMuNCwyMi43LDMzLjQsMjIuN3oiCiAgIGlkPSJwYXRoMTYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMjQsMzIuM2MtMS44LDAtMy4yLTEuNC0zLjItMy4yczEuNC0zLjIsMy4yLTMuMnMzLjIsMS40LDMuMiwzLjJTMjUuOCwzMi4zLDI0LDMyLjMiCiAgIGlkPSJwYXRoMTgiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMTgsMzIuNGMwLTAuNSwwLjItMS4zLDAuOC0yYzEtMS4xLDIuNi0xLjYsNC45LTEuNmM1LjgsMCw2LjQsMy44LDYuNCw0VjMzdjE0LjVjMCwwLjctMC41LDEuMi0xLjIsMS4yICAgcy0xLjItMC41LTEuMi0xLjJWMzMuMWMtMC4xLTAuMy0wLjctMS45LTQtMS45Yy0yLjcsMC0zLjQsMC45LTMuNCwxLjN2MTVjMCwwLjctMC41LDEuMi0xLjIsMS4ycy0xLjItMC41LTEuMi0xLjJWMzIuNiAgIEMxOCwzMi41LDE4LDMyLjUsMTgsMzIuNCIKICAgaWQ9InBhdGgyMCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KPC9nPgo8L3N2Zz4K';
    const buttonIconUrl = 'data:image/png;base64,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';
    const lightIconUrl = 'data:image/png;base64,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';
    const voiceIconUrl = 'data:image/png;base64,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';
    const buzzerIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgMzAuMSA0OCIKICAgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAuMSA0ODsiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIHNvZGlwb2RpOmRvY25hbWU9IuaXoOa6kOicgum4o+WZqC5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMC4yLTIgKGU4NmM4NzA4NzksIDIwMjEtMDEtMTUpIj48bWV0YWRhdGEKICAgaWQ9Im1ldGFkYXRhMTkiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMKICAgaWQ9ImRlZnMxNyIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciCiAgIGlkPSJuYW1lZHZpZXcxNSIKICAgc2hvd2dyaWQ9ImZhbHNlIgogICBpbmtzY2FwZTp6b29tPSIxOC4wNjI1IgogICBpbmtzY2FwZTpjeD0iMTUuMDUiCiAgIGlua3NjYXBlOmN5PSIyOC40MjkwNjYiCiAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSLlm77lsYJfMSIgLz4KPHN0eWxlCiAgIHR5cGU9InRleHQvY3NzIgogICBpZD0ic3R5bGUyIj4KCS5zdDB7ZmlsbDojRTYwMDEyO30KPC9zdHlsZT4KPGcKICAgaWQ9ImcxMiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+Cgk8cmVjdAogICB4PSIxNS45IgogICB5PSI5LjUiCiAgIGNsYXNzPSJzdDAiCiAgIHdpZHRoPSIyLjkiCiAgIGhlaWdodD0iMy4yIgogICBpZD0icmVjdDQiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cmVjdAogICB4PSIxMC45IgogICB5PSI0LjciCiAgIGNsYXNzPSJzdDAiCiAgIHdpZHRoPSIzLjciCiAgIGhlaWdodD0iMy43IgogICBpZD0icmVjdDYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cmVjdAogICB4PSIyMC42IgogICBjbGFzcz0ic3QwIgogICB3aWR0aD0iMy43IgogICBoZWlnaHQ9IjMuNyIKICAgaWQ9InJlY3Q4IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTMwLDIwLjFjMC0xLjQsMC0yLjUsMC0zLjJ2LTAuM2gtMC4zYy0wLjksMC00LjQsMC44LTcuMSwxLjVjLTEuMSwwLjMtMi4xLDAuNS0yLjYsMC42ICAgYy0zLjIsMC42LTYuMywxLjMtOS4zLDJsLTAuNCwwLjF2MTYuNmMtMC40LTAuMS0wLjctMC4xLTEuMS0wLjJjLTAuNi0wLjEtMS4yLTAuMy0yLjEtMC4zYy0zLDAtNy4xLDMuMy03LjEsNi42ICAgYzAsMS45LDEuNSwzLjUsMy43LDQuMkM0LjMsNDcuOSw1LDQ4LDUuNiw0OGMyLjIsMCw0LjgtMSw2LjUtMy44YzAuNi0wLjksMC43LTEuMywwLjctMi43YzAtMi42LDAtNS4xLDAtNy43YzAtMS42LDAtMy4zLDAtNC45ICAgYzEuNS0wLjUsMTEuNS0yLjksMTQuMS0zLjN2OC4yYy0wLjEsMC0wLjItMC4xLTAuMy0wLjFjLTAuNy0wLjItMS4zLTAuNC0yLjMtMC40Yy0zLjYsMC02LjMsMi4zLTcuMiw0LjVjLTAuOCwxLjktMC40LDMuNywwLjksNSAgIGMyLjIsMi4xLDcuMiwxLjcsOS44LTAuOWMwLjQtMC40LDEuMi0xLjYsMS41LTIuMUMzMC4yLDM4LDMwLjEsMjguNywzMCwyMC4xeiBNMjYuNSwyMy40Yy0wLjIsMC0wLjMsMC4xLTAuNiwwLjFsLTUuNiwxLjIgICBjLTAuNSwwLjEtMS4xLDAuMy0xLjksMC40Yy0yLjEsMC41LTQuNywxLjEtNS43LDEuMWgtMC4zdi0yLjljMC0xLDAuNi0xLjEsMS4yLTEuMmMwLjEsMCwwLjMsMCwwLjQtMC4xbDEzLjYtMi44djAuNCAgIGMwLDAuNSwwLDAuOSwwLDEuM0MyNy42LDIzLDI3LjYsMjMuMywyNi41LDIzLjR6IgogICBpZD0icGF0aDEwIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgo8L2c+Cjwvc3ZnPgo=';
    const matrix_IconUrl = 'data:image/png;base64,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';

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

    const pwmPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setPwmOutput')
        .getField('PIN')
        .getOptions();

    //变量
    Blockly.Blocks.KS_variables_declare = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_declare,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'variables_type',
                        options:[[(Blockly.Msg.KS_global), "global_variate"],[(Blockly.Msg.KS_local), "local_variate"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options:[[Blockly.Msg.KS_MATH_INT, 'int'],[Blockly.Msg.KS_MATH_UNSIGNED_INT, 'unsigned int'],[Blockly.Msg.KS_MATH_LONG, 'long'],[Blockly.Msg.KS_MATH_UNSIGNED_LONG, 'unsigned long'],[Blockly.Msg.KS_MATH_FLOAT, 'float'],[Blockly.Msg.KS_MATH_DOUBLE, 'double'],[Blockly.Msg.KS_MATH_BOOLEAN, 'boolean'],[Blockly.Msg.KS_MATH_BYTE, 'byte'],[Blockly.Msg.KS_MATH_CHAR, 'char'],[Blockly.Msg.KS_MATH_UNSIGNED_CHAR, 'unsigned char'],[Blockly.Msg.KS_MATH_STRING, 'String']]
                    },
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE',
                    },    
                ],
                "tooltip": "创建变量",
                colour:color,
                extensions: ['shape_statement']
            });
        }
    };
    //变量get
    Blockly.Blocks.KS_variables_get = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_value,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    } 
                ],
                "tooltip": "获取变量",
                colour:color,
                extensions: ['output_number']
            });
        }
    };
    //变量set
    Blockly.Blocks.KS_variables_set = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_set,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }  
                ],
                "tooltip": "设置变量",
                colour:color,
                extensions: ['shape_statement']
            });
        }     
    };
    //变量++--
    Blockly.Blocks.KS_variables_change = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_change,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options:[['++', '++'],['- -', '--']]
                    }
                ],
                "tooltip": "设置变量",
                colour:color,
                extensions: ['shape_statement']
            });
        }     
    };

    //字符串变量set
    Blockly.Blocks.KS_variables_stringSet = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_setString,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }  
                ],
                "tooltip": "设置字符串变量",
                colour:color,
                extensions: ['shape_statement']
            });
        }     
    };

    //字符
    Blockly.Blocks.KS_CHAR = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_char,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    } 
                ],
                "tooltip": "获取变量",
                colour:color2,
                extensions: ['output_number']
            });
        }     
    };

    Blockly.Blocks.KS_STRING = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_string,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    } 
                ],
                "tooltip": "获取变量",
                colour:color2,
                extensions: ['output_number']
            });
        }     
    };

    Blockly.Blocks.KS_data = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_data,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    } 
                ],
                "tooltip": "获取变量",
                colour:color2,
                extensions: ['output_number']
            });
        }
    };
    
    //logic
    Blockly.Blocks.KS_judge = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_judge,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VALUE1',
                    }, 
                    {
                        type: 'field_dropdown',
                        name: 'judge',
                        options:[["==", "=="],["≠", "!="],[">", ">"],[">=", ">="],["<", "<"],["<=", "<="]]
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE2',
                    },    
                ],
                "tooltip": "逻辑比较",
                colour:color3,
                extensions: ['output_boolean']
            });
        }
    };

// led digital


    Blockly.Blocks.LED_setLEDState = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.LED_SET_LED_STATE,
                args0: [
                    {
                        type: 'field_image',
                        src: LEDIconUrl,
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
                    {
                        type: 'field_dropdown',
                        name: 'state',
                        options: [
                            [Blockly.Msg.LED_ON, 'HIGH'],
                            [Blockly.Msg.LED_OFF, 'LOW']]
                    }
                ],
                colour: color4,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.led_analog = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.LED_ANALOG,
                args0: [
                    {
                        type: 'field_image',
                        src: LEDIconUrl,
                        width: 50,
                        height: 27
                    }
                        
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: pwmPins
                    },
                    {
                        type: 'input_value',
                        name: 'val'
                    },
         
                ],
                colour: color4,
                extensions: ['shape_statement']
            });
        }
    };

// button

    Blockly.Blocks.Button_readState = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BUTTON_READ_STATE,
                args0: [
                    {
                        type: 'field_image',
                        src: buttonIconUrl,
                        width: 50,
                        height: 27
                    }
                        
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    }
                ],
                colour: color5,
             
                extensions: ['output_boolean']
             
            });
        }
    };

    Blockly.Blocks.Button_readValue = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BUTTON_READ_VALUE,
                args0: [
                    {
                        type: 'field_image',
                        src: buttonIconUrl,
                        width: 50,
                        height: 27
                    }
                        
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    }
                ],
                colour: color5,
              
                extensions: ['output_number']
            });
        }
    };

// light

    Blockly.Blocks.lightSensor_readValue = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.LIGHTSENSOR_READ_VALUE,
                args0: [
                    {
                        type: 'field_image',
                        src: lightIconUrl,
                        width: 50,
                        height: 27
                    }
                        
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: analogPins
                    }
                ],
                colour: color6,
            
                extensions: ['output_number']
             
            });
        }
    };

//Voice

    Blockly.Blocks.analogVoice_readValue = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.ANALOGVOICE_READ_VALUE,
                args0: [
                    {
                        type: 'field_image',
                        src:voiceIconUrl,
                        width: 50,
                        height: 27
                    }
                        
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: analogPins
                    }
                ],
                colour: color6,
                extensions: ['output_number']
      
            });
        }
    };


// buzzer
  
    Blockly.Blocks.buzzer_tone = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BUZZER_TONE,
                args0: [
                    {
                        type: 'field_image',
                        src: buzzerIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'fre',
                        options: [
                            ['NOTE_C3', '131'],
                            ['NOTE_D3', '147'],
                            ['NOTE_E3', '165'],
                            ['NOTE_F3', '175'],
                            ['NOTE_G3', '196'],
                            ['NOTE_A3', '220'],
                            ['NOTE_B3', '247'],
                            ['NOTE_C4', '262'],
                            ['NOTE_D4', '294'],
                            ['NOTE_E4', '330'],
                            ['NOTE_F4', '349'],
                            ['NOTE_G4', '392'],
                            ['NOTE_A4', '440'],
                            ['NOTE_B4', '494'],
                            ['NOTE_C5', '532'],
                            ['NOTE_D5', '587'],
                            ['NOTE_E5', '659'],
                            ['NOTE_F5', '698'],
                            ['NOTE_G5', '784'],
                            ['NOTE_A5', '880'],
                            ['NOTE_B5', '988']
                            ]
                    }
                ],
                colour: color7,
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.buzzer_tone_d = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BUZZER_TONE_D,
                args0: [
                    {
                        type: 'field_image',
                        src: buzzerIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'fre',
                        options: [
                            ['NOTE_C3', '131'],
                            ['NOTE_D3', '147'],
                            ['NOTE_E3', '165'],
                            ['NOTE_F3', '175'],
                            ['NOTE_G3', '196'],
                            ['NOTE_A3', '220'],
                            ['NOTE_B3', '247'],
                            ['NOTE_C4', '262'],
                            ['NOTE_D4', '294'],
                            ['NOTE_E4', '330'],
                            ['NOTE_F4', '349'],
                            ['NOTE_G4', '392'],
                            ['NOTE_A4', '440'],
                            ['NOTE_B4', '494'],
                            ['NOTE_C5', '532'],
                            ['NOTE_D5', '587'],
                            ['NOTE_E5', '659'],
                            ['NOTE_F5', '698'],
                            ['NOTE_G5', '784'],
                            ['NOTE_A5', '880'],
                            ['NOTE_B5', '988']
                            ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'dur',
                        options: [
                            ['1/4', '250'],
                            ['2/4', '500'],
                            ['3/4', '750'],
                            ['4/4', '1000'],
                            ['1/8', '125'],
                            ['3/8', '375']
                            ]
                    }
                ],
                colour: color7,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.buzzer_music = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BUZZER_MUSIC,
                args0: [
                    {
                        type: 'field_image',
                        src: buzzerIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'mus',
                        options: [
                            ['Birthday', 'Music.birthday();'],
                            ['Tetris', 'Music.tetris();'],
                            ['Ode to Joy', 'Music.Ode_to_Joy();'],
                            ['Christmas', 'Music.christmas();'],
                            ['Super mario', 'Music.super_mario();'],
                            ['Star war tone', 'Music.star_war_tone();']
                            ]
                    }
                ],
                colour: color7,
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.buzzer_notone = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BUZZER_NOTONE,
                args0: [
                    {
                        type: 'field_image',
                        src: buzzerIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    }
                ],
                colour: color7,
                extensions: ['shape_statement']
            });
        }
    };

// ws2812 RGB LED

Blockly.Blocks.bbrgbLedStrip_init = {
    init: function () {
        this.jsonInit({
            message0: '%1',
            message1: Blockly.Msg.BBRGBLEDSTRIP_INIT,
            args0: [
                {
                    type: 'field_image',
                    src: LEDIconUrl,
                    width: 50,
                    height: 27
                }
            ],
            args1: [
                {
                    type: 'input_value',
                    name: 'LEN'
                },
                {
                    type: 'field_dropdown',
                    name: 'PIN',
                    options: digitalPins
                }
            ],
            colour: color9,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.rgbLedStrip_setPixelColor = {
    init: function () {
        this.jsonInit({
            message0: '%1',
            message1: Blockly.Msg.BBRGBLEDSTRIP_SETPIXELCOLOR,
            args0: [
                {
                    type: 'field_image',
                    src: LEDIconUrl,
                    width: 50,
                    height: 27
                }
            ],
            args1: [
                {
                    type: 'input_value',
                    name: 'NO'
                },
                {
                    type: 'input_value',
                    name: 'COLOR'
                },
            ],
            colour: color9,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.rgbLedStrip_fill = {
    init: function () {
        this.jsonInit({
            message0: '%1',
            message1: Blockly.Msg.BBRGBLEDSTRIP_FILL,
            args0: [
                {
                    type: 'field_image',
                    src: LEDIconUrl,
                    width: 50,
                    height: 27
                }
            ],
            args1: [
                {
                    type: 'input_value',
                    name: 'FIRST'
                },
                {
                    type: 'input_value',
                    name: 'COUNT'
                },
                {
                    type: 'input_value',
                    name: 'COLOR'
                },
            ],
            colour: color9,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.rgbLedStrip_color = {
    init: function () {
        this.jsonInit({
            message0: '%1',
            message1: Blockly.Msg.BBRGBLEDSTRIP_COLOR,
            args0: [
                {
                    type: 'field_image',
                    src: LEDIconUrl,
                    width: 50,
                    height: 27
                }
            ],
            args1: [
                {
                    type: 'input_value',
                    name: 'R'
                },
                {
                    type: 'input_value',
                    name: 'G'
                },
                {
                    type: 'input_value',
                    name: 'B'
                },
            ],
            colour: color9,
            extensions: ['output_string']
        });
    }
};

Blockly.Blocks.rgbLedStrip_setBrightness = {
    init: function () {
        this.jsonInit({
            message0: '%1',
            message1: Blockly.Msg.BBRGBLEDSTRIP_SETBRIGHTNESS,
            args0: [
                {
                    type: 'field_image',
                    src: LEDIconUrl,
                    width: 50,
                    height: 27
                }
            ],
            args1: [
                {
                    type: 'input_value',
                    name: 'BRT'
                },
                
            ],
            colour: color9,
            extensions: ['shape_statement']
        });
    }
};


Blockly.Blocks.rgb_change = {
    init: function () {
        this.jsonInit({
            message0: '%1',
            message1: Blockly.Msg.RGB_CHANGE,
            args0: [
                {
                    type: 'field_image',
                    src: LEDIconUrl,
                    width: 50,
                    height: 27
                }
            ],
            args1: [
                {
                    type: 'field_dropdown',
                    name: 'PIN',
                    options: digitalPins
                },
                {
                    type: 'input_value',
                    name: 'NUM'
                },
                {
                    type: 'input_value',
                    name: 'WAIT'
                },
            ],
            colour: color9,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.rgb_loop = {
    init: function () {
        this.jsonInit({
            message0: '%1',
            message1: Blockly.Msg.RGB_LOOP,
            args0: [
                {
                    type: 'field_image',
                    src: LEDIconUrl,
                    width: 50,
                    height: 27
                }
            ],
            args1: [
                {
                    type: 'field_dropdown',
                    name: 'PIN',
                    options: digitalPins
                },
                {
                    type: 'input_value',
                    name: 'NUM'
                },
                {
                    type: 'input_value',
                    name: 'WAIT'
                },
            ],
            colour: color9,
            extensions: ['shape_statement']
        });
    }
};


  Blockly.Blocks.rgbLedStrip_clear = {
    init: function () {
        this.jsonInit({
            message0: '%1',
            message1: Blockly.Msg.BBRGBLEDSTRIP_CLEAR,
            args0: [
                {
                    type: 'field_image',
                    src: LEDIconUrl,
                    width: 50,
                    height: 27
                }
            ],
            colour: color9,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.rgbLedStrip_show = {
    init: function () {
        this.jsonInit({
            message0: '%1',
            message1: Blockly.Msg.BBRGBLEDSTRIP_SHOW,
            args0: [
                {
                    type: 'field_image',
                    src: LEDIconUrl,
                    width: 50,
                    height: 27
                }
            ],
            colour: color9,
            extensions: ['shape_statement']
        });
    }
};


    // 8*16 MatirxDisplay

    Blockly.Blocks.MatirxDisplay_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MatirxDisplay_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: matrix_IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                colour: color8,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.MatirxDisplay_drawPixel = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MatirxDisplay_DRAWPIXEL,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                ],
                colour: color8,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.MatirxDisplay_drawLine = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MatirxDisplay_DRAWLINE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X0'
                    },
                    {
                        type: 'input_value',
                        name: 'Y0'
                    },
                    {
                        type: 'input_value',
                        name: 'X1'
                    },
                    {
                        type: 'input_value',
                        name: 'Y1'
                    }
                
                ],
                colour: color8,
              
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.MatirxDisplay_drawrectangle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MatirxDisplay_DRAWRECTANGLE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X0'
                    },
                    {
                        type: 'input_value',
                        name: 'Y0'
                    },
                    {
                        type: 'input_value',
                        name: 'L1'
                    },
                    {
                        type: 'input_value',
                        name: 'W1'
                    }
                
                ],
                colour: color8,
        
                extensions: ['shape_statement']
            });
        }
    };
  

    Blockly.Blocks.MatirxDisplay_drawcircle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MatirxDisplay_DRAWCIRCLE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X0'
                    },
                    {
                        type: 'input_value',
                        name: 'Y0'
                    },
                    {
                        type: 'input_value',
                        name: 'R0'
                    }
                 
                ],
                colour: color8,
          
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.MatirxDisplay_showChar = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MatirxDisplay_SHOWCHAR,
                args0: [
                    {
                        type: 'field_image',
                        src: matrix_IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                  
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    }
                ],
                colour: color8,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.MatirxDisplay_show_loop = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MatirxDisplay_SHOW_LOOP,
                args0: [
                    {
                        type: 'field_image',
                        src: matrix_IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                
                    {
                        type: 'input_value',
                        name: 'NUMBER'
                    }
                ],
                colour: color8,
                extensions: ['shape_statement']
            });
        }
    };



    Blockly.Blocks.MatirxDisplay_image = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MatirxDisplay_IMAGE,
                args0: [
                    {
                        type: 'field_image',
                        src: matrix_IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'IMAGE',
                        options: [
                            ['∩_∩', 'smile_bmp'],
                            ['￣へ￣', 'tsundere_bmp'],
                            ['>_<', 'squinting_bmp'],
                            ['﹂_﹂', 'despise1_bmp'],
                            ['￣□￣', 'speechless_bmp'],
                            ['♥', 'heart_bmp'],
                            ['↑', 'front_bmp'],
                            ['↓', 'back_bmp'],
                            ['←', 'right_bmp'],
                            ['→', 'left_bmp'],
                            ['STOP', 'stop_bmp'],]
                    }
                ],
                colour: color8,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;

