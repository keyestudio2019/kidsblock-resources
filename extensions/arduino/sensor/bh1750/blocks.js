/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#42CCFF';
    const mlxIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNTIuNSAzNi41IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1Mi41IDM2LjU7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSIxNzUwIOWFieeFpy5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMC4yLTIgKGU4NmM4NzA4NzksIDIwMjEtMDEtMTUpIj48bWV0YWRhdGEKICAgaWQ9Im1ldGFkYXRhMjMiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMKICAgaWQ9ImRlZnMyMSIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciCiAgIGlkPSJuYW1lZHZpZXcxOSIKICAgc2hvd2dyaWQ9ImZhbHNlIgogICBpbmtzY2FwZTp6b29tPSIyMS4yOTUyMzgiCiAgIGlua3NjYXBlOmN4PSIyNi4yNSIKICAgaW5rc2NhcGU6Y3k9IjE2LjM3MTY0NiIKICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IuWbvuWxgl8xIiAvPgo8c3R5bGUKICAgdHlwZT0idGV4dC9jc3MiCiAgIGlkPSJzdHlsZTIiPgoJLnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiMwMEEwRTk7fQo8L3N0eWxlPgo8ZwogICBpZD0iZzE2IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIj4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0xMy43LDI2LjFjMCwzLDEsNS4zLDIuMiw3LjJjLTIuNiwwLTUuMSwwLTcuNywwYy00LjEsMC02LjUtMC44LTYuNSwyYzAsMSwxLjIsMS4yLDIuMiwxLjJoNDQuMyAgIGMzLjIsMCwzLjItMy4yLDAuMy0zLjNsLTEyLDBjMi0zLjcsMy02LjgsMS4zLTExLjVjLTIuNy03LjUtMTIuNC0xMC42LTE5LjEtNS42QzE2LjMsMTguMSwxMy43LDIxLjgsMTMuNywyNi4xIE0zMC45LDMzLjNoLTkuMiAgIGMtMS41LDAtNC0zLjctNC02LjV2LTEuMmMwLTQuNCw0LjItOCw4LjctOGM2LjUsMCwxMC42LDcuNSw3LjQsMTIuOUMzMy4zLDMxLjIsMzEuNywzMy4zLDMwLjksMzMuM3oiCiAgIGlkPSJwYXRoNCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0yNC4xLDIuOWMwLDIuNC0wLjUsNywyLDdjMi44LDAsMi00LjIsMi03LjdDMjguMS0wLjcsMjQuMS0xLDI0LjEsMi45IgogICBpZD0icGF0aDYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNNDIuNSwyNS4zYzAsMy4xLDMuMSwyLjIsOCwyLjJjMi4zLDAsMy40LTQtMS41LTRDNDcuOCwyMy42LDQyLjUsMjMuMiw0Mi41LDI1LjMiCiAgIGlkPSJwYXRoOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0wLDI1LjZjMCwyLjgsMy44LDIsOC4yLDJjMS42LDAsMy4xLTQtMS43LTRDNC4yLDIzLjYsMCwyMy4xLDAsMjUuNiIKICAgaWQ9InBhdGgxMCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0zNy4zLDEyLjljMCw2LjIsOC0xLjgsOC0zLjdjMC0xLjEtMC44LTItMS43LTJjLTEuNCwwLTIuNiwxLjctMy40LDIuNUMzOS41LDEwLjMsMzcuMywxMi4xLDM3LjMsMTIuOSIKICAgaWQ9InBhdGgxMiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0xMy4yLDE1LjFjMS4zLDAsMi0wLjksMi0xLjdjMC0xLjUtNS4xLTYuMi02LTYuMmMtMC45LDAtMy45LDEuMS0wLjYsNC4zQzEwLjEsMTIuOCwxMS44LDE1LjEsMTMuMiwxNS4xIgogICBpZD0icGF0aDE0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgo8L2c+Cjwvc3ZnPgo=';
    
    Blockly.Blocks.bh_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BH_INIT,
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

    Blockly.Blocks.bh_read = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BH_READ,
                args0: [
                    {
                        type: 'field_image',
                        src: mlxIconUrl,
                        width: 50,
                        height: 27
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
