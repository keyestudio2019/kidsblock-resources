/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    const motor130IconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgMTA3Ni40MjI4IDk5OS45OTk5OCIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iMTMw6aOO5omH5qih5Z2XLnN2ZyIKICAgd2lkdGg9IjEwNzYuNDIyOSIKICAgaGVpZ2h0PSIxMDAwIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMi0yIChlODZjODcwODc5LCAyMDIxLTAxLTE1KSI+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTE1Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzMTMiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICBib3JkZXJvcGFjaXR5PSIxIgogICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICBncmlkdG9sZXJhbmNlPSIxMCIKICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICBpZD0ibmFtZWR2aWV3MTEiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMC41ODgxMjUwNiIKICAgaW5rc2NhcGU6Y3g9IjI2OS4zMjY1OSIKICAgaW5rc2NhcGU6Y3k9IjYyMC4zMzA1MyIKICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IuWbvuWxgl8xIgogICBpbmtzY2FwZTpkb2N1bWVudC1yb3RhdGlvbj0iMCIgLz4KPHN0eWxlCiAgIHR5cGU9InRleHQvY3NzIgogICBpZD0ic3R5bGUyIj4KCS5zdDB7ZmlsbDojMDBBMEU5O30KPC9zdHlsZT4KCgoKPGcKICAgaWQ9ImcxMiIKICAgc3R5bGU9ImZpbGw6I2ZmMDAwMCIKICAgdHJhbnNmb3JtPSJtYXRyaXgoMTIuODc1Njk5LDAsMCwxMi44NzU2OTksODcuMzM0NTI4LDIyLjcxNjY1OCkiPjxwYXRoCiAgICAgY2xhc3M9InN0MCIKICAgICBkPSJNIDM1LjYsNDEgQyAzNC43LDQxLjEgMzMuOSw0MC42IDMzLjUsMzkuOCAzMy40LDM5LjYgMjEuMSwxNS43IDQxLjgsMy43IDQ3LjksMC4yIDUzLjUsLTAuNyA1OC40LDEuMSA2NS44LDMuOSA2OC42LDExLjkgNjguNywxMi4zIHYgMC4xIGMgMC4yLDAuOCAyLjEsOC4yIC0xLjYsMTIuOSAtMS45LDIuNCAtNC45LDMuNiAtOC43LDMuNCBDIDM5LjIsMjcuOSAzNy44LDM4LjkgMzcuOCwzOSAzNy43LDQwIDM3LDQwLjggMzYsNDAuOSAzNS44LDQwLjkgMzUuNyw0MSAzNS42LDQxIE0gNTIuMyw0LjcgQyA0OS44LDQuOSA0Nyw1LjggNDQsNy42IDMyLDE0LjUgMzMuNSwyNi40IDM1LjUsMzIuOSBjIDIuOSwtNC4zIDkuMiwtOS4zIDIzLC04LjcgMi40LDAuMSA0LC0wLjUgNSwtMS43IDEuOSwtMi40IDEuMiwtNy4yIDAuOCwtOC44IEMgNjQuMSwxMy4xIDYxLjgsNy4zIDU2LjcsNS4zIDU1LjQsNC44IDUzLjksNC42IDUyLjMsNC43IFoiCiAgICAgaWQ9InBhdGg0IgogICAgIHN0eWxlPSJmaWxsOiNmZjAwMDAiIC8+PHBhdGgKICAgICBjbGFzcz0ic3QwIgogICAgIGQ9Im0gMzcuMywzNy44IGMgLTAuMSwwLjkgLTAuNywxLjYgLTEuNiwxLjkgQyAzNS40LDM5LjggOS44LDQ3LjUgMS43LDI1IC0wLjcsMTguMyAtMC41LDEyLjcgMi4yLDguMiA2LjMsMS40IDE0LjcsMC4xIDE1LDAuMSBoIDAuMSBDIDE2LDAgMjMuNSwtMC41IDI3LjQsNCBjIDIsMi4zIDIuNiw1LjQgMS44LDkuMiAtNC4zLDE4LjcgNi4zLDIyLjEgNi40LDIyLjIgMC45LDAuMyAxLjYsMS4xIDEuNiwyLjEgMC4xLDAuMiAwLjEsMC4zIDAuMSwwLjMgTSA0LjcsMTQuOSBDIDQuNCwxNy40IDQuOSwyMC4zIDYsMjMuNSAxMC43LDM2LjYgMjIuNSwzNy4yIDI5LjQsMzYuNCAyNS43LDMyLjkgMjEuOSwyNS44IDI0LjksMTIuMyAyNS40LDEwIDI1LjIsOC4yIDI0LjEsNyAyMi4xLDQuNyAxNy4yLDQuNSAxNS42LDQuNiAxNC45LDQuNyA4LjgsNS45IDYsMTAuNiA1LjMsMTEuOSA0LjgsMTMuMyA0LjcsMTQuOSBaIgogICAgIGlkPSJwYXRoNiIKICAgICBzdHlsZT0iZmlsbDojZmYwMDAwIiAvPjxwYXRoCiAgICAgY2xhc3M9InN0MCIKICAgICBkPSJtIDMzLjgsMzEuOSBjIDAuOSwtMC4xIDEuNywwLjQgMi4xLDEuMiBDIDM2LDMzLjMgNDguMyw1Ny4yIDI3LjYsNjkuMiAyMS41LDcyLjcgMTUuOSw3My42IDExLDcxLjggMy43LDY4LjkgMC45LDYwLjkgMC44LDYwLjYgViA2MC41IEMgMC42LDU5LjcgLTEuMyw1Mi4zIDIuNCw0Ny42IDQuMyw0NS4yIDcuMyw0NCAxMS4xLDQ0LjIgMzAuMyw0NSAzMS43LDM0IDMxLjgsMzMuOSBjIDAuMSwtMSAwLjgsLTEuOCAxLjgsLTEuOSAwLjEsLTAuMSAwLjIsLTAuMSAwLjIsLTAuMSBNIDE3LjIsNjguMSBjIDIuNSwtMC4yIDUuMywtMS4xIDguMywtMi45IDEyLC02LjkgMTAuNSwtMTguOCA4LjUsLTI1LjMgLTIuOSw0LjMgLTkuMiw5LjMgLTIzLDguNyAtMi40LC0wLjEgLTQsMC41IC01LDEuNyAtMS45LDIuNCAtMS4yLDcuMiAtMC44LDguOCAwLjIsMC42IDIuNSw2LjQgNy42LDguNCAxLjMsMC41IDIuOCwwLjcgNC40LDAuNiB6IgogICAgIGlkPSJwYXRoOCIKICAgICBzdHlsZT0iZmlsbDojZmYwMDAwIiAvPjxwYXRoCiAgICAgY2xhc3M9InN0MCIKICAgICBkPSJtIDMyLjIsMzUgYyAwLjEsLTAuOSAwLjcsLTEuNiAxLjYsLTEuOSAwLjMsLTAuMSAyNS45LC03LjggMzQsMTQuNyAyLjQsNi43IDIuMiwxMi4zIC0wLjUsMTYuOCAtNC4xLDYuOCAtMTIuNSw4LjEgLTEyLjgsOC4xIGggLTAuMSBjIC0wLjksMC4xIC04LjQsMC42IC0xMi4zLC0zLjkgLTIsLTIuMyAtMi42LC01LjQgLTEuOCwtOS4yIDQuMSwtMTguNyAtNi40LC0yMi4yIC02LjUsLTIyLjIgLTAuOSwtMC4zIC0xLjYsLTEuMSAtMS42LC0yLjEgMCwtMC4xIDAsLTAuMiAwLC0wLjMgbSAzMi42LDIzIGMgMC4zLC0yLjUgLTAuMiwtNS40IC0xLjMsLTguNiAtNC43LC0xMy4xIC0xNi42LC0xMy44IC0yMy40LC0xMyAzLjcsMy42IDcuNSwxMC43IDQuNCwyNC4yIC0wLjUsMi4zIC0wLjMsNC4xIDAuOCw1LjMgMiwyLjMgNi45LDIuNSA4LjUsMi40IDAuNywtMC4xIDYuOCwtMS4zIDkuNiwtNiAwLjgsLTEuMyAxLjIsLTIuNyAxLjQsLTQuMyB6IgogICAgIGlkPSJwYXRoMTAiCiAgICAgc3R5bGU9ImZpbGw6I2ZmMDAwMCIgLz48L2c+PC9zdmc+Cg==';
    
    return `
<category name="%{BKY_MOTOR130_CATEGORY}" id="MOTOR130_CATEGORY" colour="#FF6F00" secondaryColour="#FF6F00" iconURI="${motor130IconUrl}">
    <block type="motor130_digital" id="motor130_digital">
        <field name="IN1">2</field>
        <field name="IN2">6</field>
    </block>

    <block type="motor130_analog" id="motor130_analog">
        <field name="IN1">2</field>

        <value name="SPEED1">
            <shadow type="math_uint8_number">
                <field name="NUM">0</field>
            </shadow>
        </value>

        <field name="IN2">6</field>

        <value name="SPEED2">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>

</category>`;
}

exports = addToolbox;
