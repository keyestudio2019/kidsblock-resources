/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF3399';
    const irIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNTIuNTc3MzUgNDMuNzk5OTk5IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSLnuqLlpJbmjqXmlLYuc3ZnIgogICB3aWR0aD0iNTIuNTc3MzUxIgogICBoZWlnaHQ9IjQzLjc5OTk5OSIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4wLjItMiAoZTg2Yzg3MDg3OSwgMjAyMS0wMS0xNSkiPjxtZXRhZGF0YQogICBpZD0ibWV0YWRhdGEzNSI+PHJkZjpSREY+PGNjOldvcmsKICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQogICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICBpZD0iZGVmczMzIiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgaWQ9Im5hbWVkdmlldzMxIgogICBzaG93Z3JpZD0iZmFsc2UiCiAgIGlua3NjYXBlOnpvb209IjE2LjUxNDI4NiIKICAgaW5rc2NhcGU6Y3g9IjI2LjMzODY3NiIKICAgaW5rc2NhcGU6Y3k9IjI0LjM2MDgyIgogICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0i5Zu+5bGCXzEiIC8+CjxzdHlsZQogICB0eXBlPSJ0ZXh0L2NzcyIKICAgaWQ9InN0eWxlMiI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwQTBFOTt9Cgkuc3Qxe2ZpbGw6IzAwQTBFOTt9Cjwvc3R5bGU+CjxnCiAgIGlkPSJnMjgiCiAgIHRyYW5zZm9ybT0icm90YXRlKC05MCwyMS44ODg2NzUsMjEuODExMzI1KSIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJtIDQwLjQsNTEuOSBjIDAsLTIuOCAwLjIsLTIuNCAtMi42LC0yLjQgSCAyNyBDIDI1LjgsNDQgMTcuOCw0NC40IDE2LjcsNDkuNSBIIDYuMSBjIC0zLDAgLTIuOSwtMC41IC0yLjksMi40IHoiCiAgIGlkPSJwYXRoNCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDEiCiAgIGQ9Ik0gNDEuMSw1Mi41IEggMi42IHYgLTEgYyAwLC0xLjIgMCwtMS45IDAuNCwtMi4zIDAuNCwtMC40IDEsLTAuNCAyLC0wLjQgMC4zLDAgMC43LDAgMS4xLDAgaCAxMC4xIGMgMC44LC0yLjcgMy41LC00IDUuNywtNCB2IDAgYyAyLjcsMCA0LjgsMS41IDUuNSw0IGggMTAuMyBjIDAuMywwIDAuNiwwIDAuOSwwIDEsMCAxLjUsMCAxLjksMC4zIDAuNCwwLjQgMC40LDEgMC40LDIuMiB6IE0gMy45LDUxLjMgaCAzNiBjIDAsLTAuNiAwLC0xLjEgLTAuMSwtMS4yIC0wLjEsMCAtMC42LDAgLTEsMCAtMC4zLDAgLTAuNiwwIC0wLjksMCBIIDI2LjUgTCAyNi40LDQ5LjYgQyAyNS45LDQ3IDIzLjcsNDYuMSAyMS45LDQ2LjEgdiAwIGMgLTIsMCAtNC4yLDEuMSAtNC43LDMuNSBsIC0wLjEsMC41IGggLTExIGMgLTAuNCwwIC0wLjgsMCAtMS4xLDAgLTAuNSwwIC0xLDAgLTEuMSwwIDAsMC4xIDAsMC42IDAsMS4yIHoiCiAgIGlkPSJwYXRoNiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Im0gMjAuNSwzNS40IGMgNi4yLDAgOC40LC0wLjMgMTQuMiwtMi42IDEuNywtMC43IDguNCwtNC4xIDguNCwtNi4yIDAsLTIuMiAtMi45LDAuNSAtMi45LDAuNSAtMS43LDEuMyAtNC44LDMgLTYuNywzLjcgLTQuNywxLjkgLTUuNSwxLjggLTkuOCwyLjIgLTQuMiwwLjQgLTEuMiwwLjEgLTQuOCwwIC0yLjYsLTAuMSAtNiwtMS4xIC04LjIsLTIgQyA5LDMwLjMgNy42LDI5LjYgNi4xLDI4LjcgNC42LDI3LjggMC43LDI0LjIgMC43LDI2LjkgYyAwLDEuNiA2LjgsNS4yIDguNCw1LjggMi44LDEuNCA3LjQsMi43IDExLjQsMi43IgogICBpZD0icGF0aDgiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QxIgogICBkPSJtIDIwLjUsMzYgYyAtNC4xLDAgLTguOCwtMS40IC0xMS44LC0yLjcgLTAuMSwwIC04LjgsLTQgLTguOCwtNi40IDAsLTAuOCAwLjIsLTEuMiAwLjcsLTEuNSAxLC0wLjUgMi40LDAuNSA0LjQsMS45IDAuNSwwLjQgMSwwLjcgMS4zLDAuOSAxLjMsMC44IDIuNywxLjYgNC41LDIuMyAxLjUsMC42IDUuMywxLjkgOCwyIDEuNiwwIDIsMC4xIDIuMiwwLjIgMC4yLDAgMC4zLDAgMi41LC0wLjIgbCAxLC0wLjEgYyAzLjQsLTAuMyA0LjUsLTAuNCA4LjcsLTIgMS45LC0wLjggNC45LC0yLjQgNi42LC0zLjcgMC45LC0wLjggMi4zLC0xLjggMy4yLC0xLjQgMC4zLDAuMSAwLjcsMC41IDAuNywxLjQgMCwyLjggLTguNyw2LjcgLTguOCw2LjcgQyAyOSwzNS43IDI2LjcsMzYgMjAuNSwzNiBaIE0gMS4zLDI2LjUgYyAwLDAgMCwwLjEgMCwwLjQgMCwwLjkgNSw0IDgsNS4zIDIuOSwxLjMgNy4zLDIuNiAxMS4zLDIuNiA2LDAgOC4xLC0wLjIgMTQsLTIuNiAyLjQsLTEgOCwtNC4yIDgsLTUuNiAwLC0wLjIgMCwtMC4zIDAsLTAuMyAtMC4xLDAgLTAuOSwwLjQgLTEuOSwxLjIgbCAtMC4xLDAuMSBjIC0xLjcsMS4yIC00LjgsMyAtNi44LDMuOCAtNC40LDEuNyAtNS41LDEuOCAtOSwyLjEgbCAtMSwwLjEgYyAtMi41LDAuMiAtMi41LDAuMiAtMi45LDAuMSAtMC4yLDAgLTAuNSwtMC4xIC0yLC0wLjIgQyAxNiwzMy40IDEyLjQsMzIuMiAxMC40LDMxLjQgOC41LDMwLjkgNywzMCA1LjcsMjkuMiA1LjQsMjkgNC45LDI4LjcgNC40LDI4LjMgMy42LDI3LjggMS43LDI2LjQgMS4zLDI2LjUgWiIKICAgaWQ9InBhdGgxMCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Im0gMjAuMSwyOC4zIGMgNS40LDAgNy42LDAgMTIuOCwtMi4zIDguNiwtMy44IDcuNywtNy4zIDUuNCwtNi4xIC0xLjgsMSAtNC4yLDQuMSAtMTAuNyw1LjUgQyAxMy41LDI4LjUgNy40LDIwLjIgNC44LDE5LjUgNC40LDIwIDQsMjAuMiA0LDIwLjggYyAwLDEuMyA1LjQsNC40IDYuOCw1IDIuNCwxLjEgNS45LDIuNSA5LjMsMi41IgogICBpZD0icGF0aDEyIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MSIKICAgZD0ibSAyMC4xLDI4LjkgYyAtMy4zLDAgLTYuNywtMS4zIC05LjUsLTIuNSAtMC4xLDAgLTcuMSwtMy41IC03LjEsLTUuNSAwLC0wLjcgMC4zLC0xIDAuNSwtMS4zIDAuMSwtMC4xIDAuMiwtMC4yIDAuMywtMC40IGwgMC4yLC0wLjQgMC40LDAuMSBjIDAuNywwLjIgMS41LDAuOCAyLjYsMS42IDMuNSwyLjUgOS4zLDYuNyAxOS45LDQuMyA0LjcsLTEgNy4yLC0zIDguOSwtNC4zIDAuNiwtMC41IDEuMSwtMC45IDEuNiwtMS4yIDAuNywtMC40IDEuNCwtMC40IDEuOSwtMC4xIDAuNCwwLjMgMC42LDAuNyAwLjYsMS4yIC0wLjIsMS44IC0yLjksNC4xIC03LjMsNiAtNS4yLDIuMyAtNy40LDIuNSAtMTMsMi41IHogTSA0LjksMjAuMiBjIDAsMCAtMC4xLDAuMSAwLDAgLTAuMywwLjMgLTAuMywwLjQgLTAuMywwLjYgMC4xLDAuOCA0LjYsMy42IDYuNCw0LjQgMi43LDEuMiA1LjksMi40IDksMi40IDUuMiwwIDcuMywwIDEyLjUsLTIuMyA0LjIsLTEuOSA2LjIsLTMuNyA2LjUsLTQuOCAwLjEsLTAuMiAwLC0wLjMgMCwtMC4zIDAsMCAtMC4yLDAgLTAuNywwLjIgLTAuNCwwLjIgLTAuOSwwLjYgLTEuNSwxIC0xLjgsMS40IC00LjQsMy40IC05LjQsNC41IEMgMTYuMywyOC40IDkuOSwyMy44IDYuNSwyMS40IDYsMjAuOSA1LjQsMjAuNSA0LjksMjAuMiBaIgogICBpZD0icGF0aDE0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0ibSAyMC44LDIxLjEgYyA1LjIsMCA4LjgsLTAuOCAxMywtMy45IDEuMiwtMC45IDEuOSwtMS40IDIuNiwtMi43IGwgLTEsLTEuMSBjIC0xLjcsMC40IC0zLjQsMy41IC05LjIsNSBDIDEzLjYsMjEuNyA3LjYsOS44IDcuNiwxNC43IGMgMCwxLjggNy45LDYuNCAxMy4yLDYuNCIKICAgaWQ9InBhdGgxNiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDEiCiAgIGQ9Ik0gMjAuOCwyMS43IEMgMTUuNCwyMS43IDcsMTcuMSA3LDE0LjcgNywxNC4xIDcuMSwxMy4zIDcuNywxMyBjIDAuOCwtMC40IDEuNiwwLjIgMy4xLDEuMiAzLDIuMSA4LDUuNSAxNS40LDMuNiAzLjYsLTEgNS42LC0yLjUgNywtMy42IDAuOCwtMC43IDEuNSwtMS4yIDIuMiwtMS40IGwgMC40LC0wLjEgMS41LDEuNiAtMC4yLDAuNCBjIC0wLjcsMS40IC0xLjQsMiAtMi41LDIuNyBsIC0wLjMsMC4yIEMgMjkuNiwyMSAyNS43LDIxLjcgMjAuOCwyMS43IFogTSA4LjIsMTQuMSBjIDAsMC4xIDAsMC4yIDAsMC42IDAsMS4yIDcuMiw1LjggMTIuNiw1LjggNC44LDAgOC40LC0wLjYgMTIuNiwtMy44IGwgMC4zLC0wLjIgYyAwLjgsLTAuNiAxLjQsLTEgMS45LC0xLjkgbCAtMC40LC0wLjQgYyAtMC40LDAuMiAtMC45LDAuNiAtMS40LDEgQyAzMi40LDE2LjMgMzAuMiwxOCAyNi40LDE5IDE4LjQsMjEuMSAxMywxNy4zIDEwLDE1LjMgOS4zLDE0LjcgOC41LDE0LjIgOC4yLDE0LjEgWiIKICAgaWQ9InBhdGgxOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Im0gMjAuNSwxMy45IGMgMy4zLDAgNS4zLDAgOC4yLC0xLjggMS4yLC0wLjcgMy44LC0yLjQgMy44LC00LjEgMCwtMi41IC0zLjIsMS4yIC01LDIuMiAtMy43LDIgLTcuNiwyIC0xMS4yLDAgLTIuNCwtMS40IC0zLjUsLTMgLTQuMiwtMyAtMy40LDAuMSAyLjcsNi43IDguNCw2LjciCiAgIGlkPSJwYXRoMjAiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QxIgogICBkPSJtIDIwLjUsMTQuNSBjIC00LjYsMCAtMTAsLTQuMyAtMTAsLTYuNiAwLC0wLjQgMC4yLC0wLjggMC41LC0xIDAuMywtMC4yIDAuNywtMC4zIDEuMSwtMC4zIDAuNiwwIDEsMC40IDEuOCwxIDAuNywwLjYgMS41LDEuNCAyLjgsMiAzLjMsMS45IDcuMSwxLjkgMTAuNiwwIDAuNSwtMC4zIDEuMiwtMC44IDEuOCwtMS40IDEuNCwtMS4yIDIuNSwtMi4xIDMuNCwtMS43IDAuNCwwLjIgMC43LDAuNyAwLjcsMS40IDAsMS45IC0yLjUsMy43IC00LjEsNC42IC0zLjIsMiAtNS4zLDIgLTguNiwyIHogTSAxMi4xLDcuOSBjIC0wLjMsMCAtMC40LDAuMSAtMC40LDAuMSAwLDAgMCwwLjQgMC41LDEgMS4zLDEuOCA1LDQuMyA4LjMsNC4zIDMuMywwIDUuMSwwIDcuOSwtMS43IDIuMSwtMS4zIDMuNSwtMi42IDMuNSwtMy42IDAsLTAuMSAwLC0wLjIgMCwtMC4yIC0wLjQsMC4xIC0xLjQsMSAtMiwxLjUgLTAuNywwLjYgLTEuNCwxLjIgLTIsMS41IC0zLjksMi4xIC04LjEsMi4xIC0xMS44LDAgQyAxNC44LDEwIDEzLjgsOS4yIDEzLjEsOC42IDEyLjcsOC4zIDEyLjMsNy45IDEyLjEsNy45IFoiCiAgIGlkPSJwYXRoMjIiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJtIDIxLDYuNyBjIDMuNSwwIDUuNSwtMC42IDcuNSwtMy45IEMgMjksMiAyOS4xLDAuNiAyOCwwLjYgYyAtMS4yLDAgLTIsNCAtNi4yLDQgLTEuNSwwIC0zLC0xIC0zLjksLTEuOCBDIDE3LjQsMi4zIDE3LDEuNCAxNi41LDEgYyAtMSwtMC45IC0xLC0wLjEgLTEuOCwwLjQgMC42LDIuNSAzLjYsNS4zIDYuMyw1LjMiCiAgIGlkPSJwYXRoMjQiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QxIgogICBkPSJNIDIxLDcuMyBDIDE3LjksNy4zIDE0LjcsNC4xIDE0LjIsMS41IEwgMTQuMSwxLjEgMTQuNCwwLjkgYyAwLjIsLTAuMSAwLjMsLTAuMiAwLjQsLTAuNCAwLjUsLTAuNSAxLjEsLTEgMi4yLDAgMC4zLDAuMyAwLjUsMC42IDAuOCwxIDAuMiwwLjMgMC40LDAuNiAwLjYsMC44IDAuNywwLjkgMiwxLjcgMy4zLDEuNyAyLjUsMCAzLjYsLTEuNSA0LjUsLTIuNiAwLjYsLTAuNyAxLC0xLjQgMS44LC0xLjQgMC42LDAgMSwwLjIgMS4zLDAuNyAwLjQsMC43IDAuMiwxLjcgLTAuMiwyLjQgQyAyNi44LDYuNyAyNC42LDcuMyAyMSw3LjMgWiBNIDE1LjQsMS42IGMgMC43LDIuMSAzLjIsNC41IDUuNiw0LjUgMy4zLDAgNS4xLC0wLjUgNywtMy42IDAuMywtMC40IDAuMywtMC45IDAuMiwtMS4yIDAsMCAwLC0wLjEgLTAuMiwtMC4xIC0wLjIsMCAtMC41LDAuNSAtMC44LDAuOSAtMC45LDEuMiAtMi40LDMuMSAtNS40LDMuMSAtMS43LDAgLTMuNCwtMS4xIC00LjMsLTIgQyAxNy4yLDIuOSAxNywyLjYgMTYuOCwyLjIgMTYuNiwxLjkgMTYuNCwxLjYgMTYuMywxLjQgMTYuMSwxLjIgMTYsMS4yIDE2LDEuMiBjIDAsMCAtMC4xLDAuMSAtMC4xLDAuMiAtMC4zLDAuMSAtMC40LDAuMiAtMC41LDAuMiB6IgogICBpZD0icGF0aDI2IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgo8L2c+Cjwvc3ZnPgo=';
    
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.ir_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.IR_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: irIconUrl,
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
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ir_data = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.IR_DATA,
                args0: [
                    {
                        type: 'field_image',
                        src: irIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    
                ],
                colour: color,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.ir_read = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.IR_READ,
                args0: [
                    {
                        type: 'field_image',
                        src: irIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    
                ],
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.ir_refresh = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.IR_REFRESH,
                args0: [
                    {
                        type: 'field_image',
                        src: irIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [

                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;
