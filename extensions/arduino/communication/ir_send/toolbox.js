/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    const irsIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgMTA3Ni40MjI4IDk5OS45OTk5OCIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgc29kaXBvZGk6ZG9jbmFtZT0i57qi5aSW5Y+R5bCELnN2ZyIKICAgd2lkdGg9IjEwNzYuNDIyOSIKICAgaGVpZ2h0PSIxMDAwIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMi0yIChlODZjODcwODc5LCAyMDIxLTAxLTE1KSI+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTE1Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzMTMiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICBib3JkZXJvcGFjaXR5PSIxIgogICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICBncmlkdG9sZXJhbmNlPSIxMCIKICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICBpZD0ibmFtZWR2aWV3MTEiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMC41ODgxMjUwNiIKICAgaW5rc2NhcGU6Y3g9Ijk2NC45MDYzNyIKICAgaW5rc2NhcGU6Y3k9IjU1Mi4zMTc3OCIKICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IuWbvuWxgl8xIgogICBpbmtzY2FwZTpkb2N1bWVudC1yb3RhdGlvbj0iMCIgLz4KPHN0eWxlCiAgIHR5cGU9InRleHQvY3NzIgogICBpZD0ic3R5bGUyIj4KCS5zdDB7ZmlsbDojMDBBMEU5O30KPC9zdHlsZT4KCgoKPGcKICAgaWQ9ImcxMiIKICAgdHJhbnNmb3JtPSJtYXRyaXgoLTE5Ljc3OTU1OSwwLDAsMTkuNzc5NTU5LDEwNjMuNjQwNCwzMjYuNzE1NDcpIgogICBzdHlsZT0iZmlsbDojZmYwMDAwIj48cGF0aAogICAgIGNsYXNzPSJzdDAiCiAgICAgZD0iTSA1Mi41LDE5LjcgQyA1My4zLDE4LjkgNTMsMTYuNSA1MywxNSBjIDAsLTEuNyAwLC0zLjEgMCwtNC43IFYgMy4xIEMgNTMsLTAuMyA1Mi4yLDAuMiA0Ny45LDAuMiA0MiwwLjIgMjQuOSwwLjUgMjAuMywwLjEgMTQuMiwtMC40IDE1LjEsMC44IDE1LjEsNS4zIHYgOS41IGMgMCw2LjIgLTEuMSw1LjEgOS43LDUuMSAzLjIsMCA2LjEsMC4xIDkuMiwwLjEgMy4xLDAgNi4xLDAgOS4yLDAgMS4zLDAuMSA4LjcsMC4zIDkuMywtMC4zIE0gMjAuMywxNC44IEMgMTYsMTAuNSAxOC45LDMuOCAyNC44LDMuMyAyOC4zLDMgMzIuMiw2LjQgMzIsMTAuNSBjIC0wLjIsMy43IC0zLjcsNi41IC02LjksNi4zIC0xLjUsMCAtMy40LC0wLjYgLTQuOCwtMiB6IE0gMzcsMTUuOSBjIC0yLjQsLTIuNCAwLjYsLTYuMyAzLjUsLTQuOCA0LjMsMi4xIC0wLjIsOC4xIC0zLjUsNC44IHogTSA0MS4xLDQuMSBjIDMuMywzLjMgLTEuMiw3LjIgLTQsNC4zIEMgMzYuNSw3LjggMzYuMiw3LjEgMzYuMiw2LjQgMzYsMy45IDM5LjQsMi40IDQxLjEsNC4xIFogTSA0OSwxNS45IGMgLTIuOSwyLjkgLTcuMiwtMS40IC00LjUsLTQuMiAzLjEsLTIuOSA3LjIsMS42IDQuNSw0LjIgeiBNIDQ4LjYsNC4xIEMgNTIsNy40IDQ3LjQsMTEuMyA0NC40LDguMyA0MS45LDUuOCA0Ni4xLDEuNiA0OC42LDQuMSBaIgogICAgIGlkPSJwYXRoNCIKICAgICBzdHlsZT0iZmlsbDojZmYwMDAwIiAvPjxwYXRoCiAgICAgY2xhc3M9InN0MCIKICAgICBkPSJNIDUuNiwxOS43IEMgNi41LDE4LjggNi41LDE4LjUgNS41LDE2LjYgNC40LDE0LjYgMi4xLDEzLjMgMi45LDguNSAzLjUsNC42IDcuNiwyLjIgNS43LDAuNiAzLjYsLTEuMyAxLjIsMy4zIDAuNiw1LjYgYyAtMC44LDMuMyAtMSw1LjIgLTAuMSw4LjcgMC42LDIuMiAxLDMuMyAyLjcsNSAwLjYsMC41IDEuOSwwLjkgMi40LDAuNCIKICAgICBpZD0icGF0aDYiCiAgICAgc3R5bGU9ImZpbGw6I2ZmMDAwMCIgLz48cGF0aAogICAgIGNsYXNzPSJzdDAiCiAgICAgZD0iTSAyOC4xLDcuOCAyNy40LDcuMSBDIDI2LDUuNyAyMy41LDYgMjIuMSw3LjQgYyAtMy4xLDMuMSAxLjQsOSA1LjQsNS42IDEuNywtMS41IDEuNiwtNC4xIDAuNiwtNS4yIgogICAgIGlkPSJwYXRoOCIKICAgICBzdHlsZT0iZmlsbDojZmYwMDAwIiAvPjxwYXRoCiAgICAgY2xhc3M9InN0MCIKICAgICBkPSJNIDExLjgsMy41IEMgMTAuOCwyLjUgOS4yLDMuNyA4LjYsNC45IDYuMyw5IDcuOSwxNy42IDExLjIsMTYuOCAxMy43LDE2LjIgMTAuNywxMy4zIDEwLjcsMTMuMyA5LjcsMTEuOCA5LjYsOSAxMC4zLDcuNCAxMC44LDYuNSAxMy4xLDQuOCAxMS44LDMuNSIKICAgICBpZD0icGF0aDEwIgogICAgIHN0eWxlPSJmaWxsOiNmZjAwMDAiIC8+PC9nPjwvc3ZnPgo=';
    
    return `
<category name="%{BKY_IRSEND_CATEGORY}" id="IRSEND_CATEGORY" colour="#FF3399" secondaryColour="#FF3399" iconURI="${irsIconUrl}">
    <block type="ir_send" id="ir_send">
        <value name="pin">
            <shadow type="math_number">
                <field name="NUM">A3</field>
            </shadow>
        </value>
        <value name="data">
            <shadow type="math_number">
                <field name="NUM">0x89ABCDEF</field>
            </shadow>
        </value>
        <value name="bits">
            <shadow type="math_number">
                <field name="NUM">32</field>
            </shadow>
        </value>
    </block>

    <block type="ir_send_raw" id="ir_send_raw">
        <value name="pin">
            <shadow type="math_number">
                <field name="NUM">A3</field>
            </shadow>
        </value>
        <value name="array">
            <shadow type="math_number">
                <field name="NUM">0,0,0,</field>
            </shadow>
        </value>
        <value name="listLength">
            <shadow type="math_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
        <value name="fre">
            <shadow type="math_number">
                <field name="NUM">38</field>
            </shadow>
        </value>
    </block>

</category>
`;
}

exports = addToolbox;
