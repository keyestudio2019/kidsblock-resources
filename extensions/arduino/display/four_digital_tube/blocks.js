/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#42CCFF';
    const dhtIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgOTAuNiAzOC44IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5MC42IDM4Ljg7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSJrczYwNjAuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMi0yIChlODZjODcwODc5LCAyMDIxLTAxLTE1KSI+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTY5Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzNjciIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICBib3JkZXJvcGFjaXR5PSIxIgogICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICBncmlkdG9sZXJhbmNlPSIxMCIKICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICBpZD0ibmFtZWR2aWV3NjUiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMTIuMzM5OTU2IgogICBpbmtzY2FwZTpjeD0iNDUuMjk5OTk5IgogICBpbmtzY2FwZTpjeT0iMTkuNCIKICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IuWbvuWxgl8xIiAvPgo8c3R5bGUKICAgdHlwZT0idGV4dC9jc3MiCiAgIGlkPSJzdHlsZTIiPgoJLnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiMwMEEwRTk7fQo8L3N0eWxlPgo8ZwogICBpZD0iZzYyIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIj4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0wLDMuN3YzMS40YzAsMiwwLjcsMy43LDIuNywzLjdoODUuMmMyLDAsMi43LTEuNCwyLjctMy40VjNjMC0xLjQtMS4xLTMtMi40LTNIMy4xQzEsMCwwLDEuNiwwLDMuNyBNMi40LDM1LjggICBWM2MwLTAuOCwwLjItMSwxLTFoODMuOGMwLjgsMCwxLDAuMiwxLDF2MzIuOGMwLDAuOC0wLjIsMS0xLDFIMy40QzIuNiwzNi44LDIuNCwzNi42LDIuNCwzNS44eiIKICAgaWQ9InBhdGg0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTQuNCwzMi43YzAuNCwxLjgsMS41LDIuNywzLjcsMi43aDEwLjFjMS44LDAsMC40LTEuMS0wLjMtNC4xYy0yLjUsMC01LDAtNy40LDBDNi45LDMxLjQsNy4xLDMyLjEsNC40LDMyLjciCiAgIGlkPSJwYXRoNiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik02OC43LDMyLjdjMC40LDEuOCwxLjUsMi43LDMuNywyLjdoMTAuMWMxLjMsMCwwLjktMC42LDAuNS0xLjVjLTAuNC0xLjEtMC42LTEuNS0wLjktMi42Yy0yLjUsMC01LDAtNy40LDAgICBDNzEuMSwzMS40LDcxLjMsMzIuMSw2OC43LDMyLjciCiAgIGlkPSJwYXRoOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik00NywzMi43YzAuNCwxLjgsMS41LDIuNywzLjcsMi43aDEwLjFjMS4zLDAsMC45LTAuNiwwLjUtMS41Yy0wLjQtMS4xLTAuNi0xLjUtMC45LTIuNmMtMi41LDAtNSwwLTcuNCwwICAgQzQ5LjUsMzEuNCw0OS43LDMyLjEsNDcsMzIuNyIKICAgaWQ9InBhdGgxMCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0yNi4xLDMyLjdjMC40LDEuOCwxLjUsMi43LDMuNywyLjdoMTAuOGMwLTEuNy0wLjctMi42LTEtNC4xYy0yLjUsMC01LDAtNy40LDBDMjguNSwzMS40LDI4LjcsMzIuMSwyNi4xLDMyLjcgICAiCiAgIGlkPSJwYXRoMTIiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMzkuOSw4LjdjMCw2LjEtMC43LDYuOCwxLjYsOS4yYzAuMiwwLjIsMSwxLDEuMiwxYzAuNCwwLjEsMC45LTAuMywwLjktMS4xVjYuNGMwLTEuNi0wLjgtMi42LTIuNC0yLjcgICBDNDAuOSw1LjMsMzkuOSw3LDM5LjksOC43IgogICBpZD0icGF0aDE0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTE4LjMsOC43YzAsNi4xLTAuNyw2LjgsMS42LDkuMmMwLjcsMC43LDIuMSwxLjksMi4xLTAuMVY2LjRjMC0xLjYtMC44LTIuNi0yLjQtMi43QzE5LjMsNS4zLDE4LjMsNywxOC4zLDguNyAgICIKICAgaWQ9InBhdGgxNiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik04Mi41LDguN2MwLDYuMS0wLjcsNi44LDEuNiw5LjJjMC43LDAuNywyLjEsMS45LDIuMS0wLjFWNi40YzAtMS42LTAuOC0yLjYtMi40LTIuN0M4My41LDUuMyw4Mi41LDcsODIuNSw4LjcgICAiCiAgIGlkPSJwYXRoMTgiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNNC40LDZjNCwxLjksOC4yLDEuNCwxMy41LDEuNGMwLjMtMS4xLDAuOS0yLjcsMS40LTMuN2MtMi44LDAtNS42LDAtOC41LDBDNy4zLDMuNyw1LjEsMyw0LjQsNiIKICAgaWQ9InBhdGgyMCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0zOS45LDIzLjN2Ny40YzAsMC45LDEuMSwzLjEsMS40LDQuNGMxLjItMC4xLDIuNC0wLjksMi40LTJWMjEuM2MwLTAuOC0wLjMtMC43LTAuNy0xLjQgICBDNDEuMywyMC4zLDM5LjksMjIuOSwzOS45LDIzLjMiCiAgIGlkPSJwYXRoMjIiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMjYuMSw2YzQsMS45LDguMiwxLjQsMTMuNSwxLjRjMC4zLTEuMywwLjktMi4zLDEtMy43Yy0yLjgsMC01LjYsMC04LjUsMEMyOC43LDMuNywyNi44LDMuMSwyNi4xLDYiCiAgIGlkPSJwYXRoMjQiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMTguMywyMy4zdjcuNGMwLDAuOSwxLjEsMy4xLDEuNCw0LjRjMS4yLTAuMSwyLjQtMC45LDIuNC0yVjIxLjNjMC0wLjgtMC4zLTAuNy0wLjctMS40ICAgQzE5LjgsMjAuMywxOC4zLDIyLjksMTguMywyMy4zIgogICBpZD0icGF0aDI2IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTQ3LDZjMi43LDAuNiwyLjEsMS40LDYuMSwxLjRjMi41LDAsNSwwLDcuNCwwYzAuMi0wLjgsMS0zLDEuNC0zLjdjLTIuOCwwLTUuNiwwLTguNSwwQzQ5LjksMy43LDQ3LjcsMyw0Nyw2IgogICBpZD0icGF0aDI4IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTY4LjcsNmMyLjcsMC42LDEuOCwxLjQsNi4xLDEuNGMyLjUsMCw1LDAsNy40LDBjMC4zLTEuMSwwLjktMi43LDEuNC0zLjdjLTIuOCwwLTUuNiwwLTguNSwwICAgQzcxLjUsMy43LDY5LjQsMyw2OC43LDYiCiAgIGlkPSJwYXRoMzAiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNODIuNSwyMy4zdjYuOGMwLDEuNywxLDMuNCwxLjQsNS4xYzEuMi0wLjEsMi40LTAuOSwyLjQtMlYyMS4zYzAtMC44LTAuMy0wLjctMC43LTEuNCAgIEM4NC4yLDIwLjMsODIuNSwyMi44LDgyLjUsMjMuMyIKICAgaWQ9InBhdGgzMiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik03MC40LDE5LjJjMiwzLDAuNSwyLDEyLjIsMmMwLjksMCwxLjYtMS4xLDItMS43Yy0wLjQtMC42LTEuNC0yLTIuNC0yaC05LjVDNzEuOSwxNy41LDcxLjIsMTguNyw3MC40LDE5LjIiCiAgIGlkPSJwYXRoMzQiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNNi4xLDE5LjJjMiwzLDAuNSwyLDEyLjIsMmMwLjksMCwxLjYtMS4xLDItMS43Yy0wLjQtMC42LTEuNC0yLTIuNC0ySDguNEM3LjYsMTcuNSw2LjksMTguNyw2LjEsMTkuMiIKICAgaWQ9InBhdGgzNiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0yNy44LDE5LjJjMiwzLDEuNSwyLDEyLjIsMmMwLjgsMCwxLjItMC42LDEuNy0xLjNsMC4xLTAuMmMwLDAsMC4xLTAuMSwwLjEtMC4yYy0wLjQtMC42LTEuNC0yLTIuNC0ySDMwICAgQzI5LjMsMTcuNSwyOC42LDE4LjcsMjcuOCwxOS4yIgogICBpZD0icGF0aDM4IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTQ4LjcsMTkuMmMwLjcsMSwxLDAuOCwxLjQsMmMyLjQsMCw0LjcsMCw3LjEsMGMzLjYsMCw0LjIsMC42LDUuNy0xLjdjLTAuNy0xLTEtMC44LTEuNC0yYy0yLjQsMC00LjcsMC03LjEsMCAgIEM0OS4yLDE3LjUsNTEuNiwxNy4zLDQ4LjcsMTkuMiIKICAgaWQ9InBhdGg0MCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik02MS4yLDcuN2MwLDcuNy0wLjksOC4yLDEuNiwxMC42YzAuNiwwLjYsMC41LDAuOCwxLDAuNmMwLjUtMC4xLDAuNy0wLjUsMC43LTEuMVY1LjdjMC0xLjItMS4yLTEuOS0yLjQtMiAgIEM2Mi4xLDUuNSw2MS4yLDUuNiw2MS4yLDcuNyIKICAgaWQ9InBhdGg0MiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik02MS4yLDIyLjlWMzFjMCwxLjYsMC43LDIuNiwxLDQuMWMxLjItMC4xLDIuNC0wLjksMi40LTJWMjEuM2MwLTAuOC0wLjMtMC43LTAuNy0xLjQgICBDNjIuNCwyMC4zLDYxLjIsMjIuNiw2MS4yLDIyLjkiCiAgIGlkPSJwYXRoNDQiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNNC40LDMyLjFjNS4xLTAuNCwzLjctMywzLjctOC41YzAtMS42LTEuOC0zLjQtMy0zLjdjLTEuMSwxLjctMC43LDIuNy0wLjcsNS43QzQuNCwyNy44LDQuNCwyOS45LDQuNCwzMi4xIgogICBpZD0icGF0aDQ2IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTQ3LDMyLjFjNS4xLTAuNCwzLjctMywzLjctOC41YzAtMS42LTEuOC0zLjQtMy0zLjdjLTEuMSwxLjctMC43LDIuNy0wLjcsNS43QzQ3LDI3LjgsNDcsMjkuOSw0NywzMi4xIgogICBpZD0icGF0aDQ4IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTUuMSwxOC45YzEuMi0wLjMsMy0yLjIsMy0zYzAtOC4yLDEuMi04LTMuNy05LjF2OS41QzQuNCwxOC4xLDQuMywxNy44LDUuMSwxOC45IgogICBpZD0icGF0aDUwIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTQ3LjcsMTguOWMxLjItMC4zLDMtMi4yLDMtM2MwLTguMiwxLjItOC0zLjctOS4xdjkuNUM0NywxOC4xLDQ2LjksMTcuOCw0Ny43LDE4LjkiCiAgIGlkPSJwYXRoNTIiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNNjkuMywxOC45YzEuMS0wLjMsMS0wLjUsMS44LTEuMmMyLTIsMS4yLTIuNiwxLjItOC45YzAtMS4yLTIuMi0xLjctMy43LTJ2OS41QzY4LjcsMTguMSw2OC42LDE3LjgsNjkuMywxOC45ICAgIgogICBpZD0icGF0aDU0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTI2LjgsMTguOWM0LTEuMSwzLTYuMSwzLTEwLjFjMC0xLjMtMi43LTEuOC0zLjctMnY5LjVDMjYuMSwxOC4xLDI2LDE3LjgsMjYuOCwxOC45IgogICBpZD0icGF0aDU2IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTY4LjcsMzIuMWMxLTAuMSwxLjQtMC4zLDIuMS0wLjZjMi4zLTAuOSwxLjYtMC42LDEuNi03LjljMC0xLjYtMS44LTMuNC0zLTMuN2MtMS4xLDEuNy0wLjcsMi43LTAuNyw1LjcgICBDNjguNywyNy44LDY4LjcsMjkuOSw2OC43LDMyLjEiCiAgIGlkPSJwYXRoNTgiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMjYuMSwzMi4xYzEtMC4xLDEuNC0wLjMsMi4xLTAuNmMyLjMtMC45LDEuNi0wLjcsMS42LTguMmMwLTAuNy0xLjUtMy0zLTMuNGMtMS4xLDEuNy0wLjcsMi43LTAuNyw1LjcgICBDMjYuMSwyNy44LDI2LjEsMjkuOSwyNi4xLDMyLjEiCiAgIGlkPSJwYXRoNjAiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+CjwvZz4KPC9zdmc+Cg==';

    Blockly.Blocks.tm1650_string = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.FOURTUBE_STRING,
                args0: [
                    {
                        type: 'field_image',
                        src: dhtIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'tube_string'
                    },
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tm1650_dot = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.FOURTUBE_DOT,
                args0: [
                    {
                        type: 'field_image',
                        src: dhtIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'dot',
                        options: [
                            ['1', '0'],
                            ['2', '1'],
                            ['3', '2'],
                            ['4', '3']
                            ],
                    },
                    {
                        type: 'field_dropdown',
                        name: 'state',
                        options: [
                            ['ON', 'true'],
                            ['OFF', 'false']
                            ],
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tm1650_state = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.FOURTUBE_STATE,
                args0: [
                    {
                        type: 'field_image',
                        src: dhtIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'state',
                        options: [
                            ['clear', 'tm_4display.clear();'],
                            ['ON', 'tm_4display.displayOn();'],
                            ['OFF', 'tm_4display.displayOff();']
                            ],
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
