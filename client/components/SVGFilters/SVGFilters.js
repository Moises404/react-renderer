import React from 'react'

class SVGFilters extends React.Component {
  static displayName = 'SVGFilters'

  render() {
    return (
      <svg>
        <filter id="light-top">
          <feGaussianBlur
            in="SourceAlpha" stdDeviation="4" result="B"/>
          <feSpecularLighting
            surfaceScale="4" specularExponent="20" in="B" result="L">
              <fePointLight x="700" y="-1300" z="1000" />
          </feSpecularLighting>
          <feComposite
            in="L" in2="SourceAlpha" operator="in" result="L" />
          <feComposite
            in="SourceGraphic" in2="L" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        </filter>

        <filter id="light1">
          <feGaussianBlur
            in="SourceAlpha" stdDeviation="1" result="B" />
          <feSpecularLighting
            in="B" surfaceScale="4" specularExponent="14" result="S">
              <fePointLight x="-5000" y="-8000" z="2000" />
          </feSpecularLighting>
          <feComposite
            in="S" in2="SourceAlpha" operator="in" result="L" />
          <feComposite
            in="SourceGraphic" in2="L" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        </filter>

        <filter id="light2">
          <feGaussianBlur
            in="SourceAlpha" stdDeviation="2" result="B" />
          <feSpecularLighting
            in="B" surfaceScale="4" specularExponent="14" result="S">
              <fePointLight x="-8000" y="-10000" z="5000" />
          </feSpecularLighting>
          <feComposite
            in="S" in2="SourceAlpha" operator="in" result="L" />
          <feComposite
            in="SourceGraphic" in2="L" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        </filter>

        <filter id="light-top-left">
          <feGaussianBlur
            in="SourceAlpha" stdDeviation="4" result="B" />
          <feSpecularLighting
            in="B" surfaceScale="4" specularExponent="20" result="S">
            <fePointLight x="-700" y="-1300" z="1000" />
          </feSpecularLighting>
          <feComposite
            in="S" in2="SourceAlpha" operator="in" result="L" />
          <feComposite
            in="SourceGraphic" in2="L" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        </filter>

        <filter id="distant1">
          <feGaussianBlur
            in="SourceAlpha" stdDeviation="4" result="B" />
          <feSpecularLighting
            in="B" surfaceScale="2" specularConstant="1.2" specularExponent="12" result="S">
              <feDistantLight azimuth="200" elevation="20" />
          </feSpecularLighting>
          <feComposite
            in="S" in2="SourceAlpha" operator="in" result="L" />
          <feComposite
            in="SourceGraphic" in2="L" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        </filter>

        <filter id="distant-top">
          <feGaussianBlur
            in="SourceAlpha" stdDeviation="34 12" result="B" />
          <feSpecularLighting
            in="B" surfaceScale="10" specularExponent="24" result="S">
              <feDistantLight azimuth="90" elevation="124" />
          </feSpecularLighting>
          <feComposite
            in="S" in2="SourceAlpha" operator="in" result="L" />
          <feComposite
            in="SourceGraphic" in2="L" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        </filter>

        <filter id="distant-front">
          <feGaussianBlur
            in="SourceAlpha" stdDeviation="24 8" result="B" />
          <feSpecularLighting
            in="B" surfaceScale="14" specularExponent="32" result="S">
              <feDistantLight azimuth="90" elevation="90" />
          </feSpecularLighting>
          <feComposite
            in="S" in2="SourceAlpha" operator="in" result="L" />
          <feComposite
            in="SourceGraphic" in2="L" operator="arithmetic"
            k1="0" k2="1" k3="1" k4="0" />
        </filter>

        <filter id="diff1">
          <feDiffuseLighting
            in="SourceGraphic" diffuseConstant="1.2" result="D">
              <fePointLight x="100" y="0" z="100" />
          </feDiffuseLighting>
          <feComposite
            in="D" in2="SourceAlpha" operator="in" result="L" />
          <feComposite
            in="SourceGraphic" in2="L" operator="arithmetic"
            k1="1" k2="0" k3="0" k4="0" />
        </filter>

        <filter id="dilate4">
          <feMorphology operator="dilate" radius="4" />
        </filter>
        <filter id="dilate6">
          <feMorphology operator="dilate" radius="6" />
        </filter>
        <filter id="dilate10">
          <feMorphology operator="dilate" radius="10" />
        </filter>
        <filter id="erode2">
          <feMorphology operator="erode" radius="2" />
        </filter>

        <filter id="light4">
          <feComposite
            result="C" operator="arithmetic" k1="0" k2="1" k3="0" k4="0" />
          <feColorMatrix type="luminanceToAlpha" />
          <feDiffuseLighting surfaceScale="4" diffuseConstant="1.6">
            <feDistantLight azimuth="225" elevation="28" />
          </feDiffuseLighting>
          <feComposite in2="C" operator="in" />
          <feBlend result="A" in2="C" mode="multiply" />
          <feGaussianBlur stdDeviation="2" />
          <feSpecularLighting specularExponent="128">
            <feDistantLight azimuth="45" elevation="68" />
          </feSpecularLighting>
          <feComposite in2="A" operator="in" />
          <feComposite in2="A" k3="1" k2="1" operator="arithmetic" />
        </filter>

        <filter id="light5">
          <feComposite
            result="C" operator="arithmetic" k1="0" k2="1" k3="0" k4="0" />
          <feColorMatrix type="luminanceToAlpha" />
          <feDiffuseLighting
            surfaceScale="4" diffuseConstant="1.6">
              <feDistantLight azimuth="225" elevation="28" />
          </feDiffuseLighting>
          <feComposite in2="C" operator="in" />
          <feBlend result="A" in2="C" mode="multiply" />
          <feGaussianBlur stdDeviation="4" />
          <feSpecularLighting specularExponent="128">
            <feDistantLight azimuth="225" elevation="72" />
          </feSpecularLighting>
          <feComposite in2="A" operator="in" />
          <feComposite in2="A" k3="1" k2="1" operator="arithmetic" />
        </filter>

        <filter id="light6">
          <feComposite
            result="C" operator="arithmetic"
            k1="0" k2="1" k3="0" k4="0" />
          <feColorMatrix type="luminanceToAlpha" />
          <feDiffuseLighting surfaceScale="4" diffuseConstant="1.6">
            <feDistantLight azimuth="45" elevation="28" />
          </feDiffuseLighting>
          <feComposite in2="C" operator="in" />
          <feBlend result="A" in2="C" mode="multiply" />
          <feGaussianBlur stdDeviation="1.5" />
          <feSpecularLighting specularExponent="128">
            <feDistantLight azimuth="225" elevation="68" />
          </feSpecularLighting>
          <feComposite in2="A" operator="in" />
          <feComposite in2="A" k3="1" k2="1" operator="arithmetic" />
        </filter>

        <filter id="light-bottom">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="B" />
          <feSpecularLighting in="B" specularExponent="128" result="S">
            <feDistantLight azimuth="90" elevation="68" />
          </feSpecularLighting>
          <feComposite in="S" in2="SourceAlpha" operator="in" result="L" />
          <feComposite
            in="SourceGraphic" in2="L" operator="arithmetic" k2="1" k3="1" />
        </filter>

        <filter id="lightA3">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="B" />
          <feSpecularLighting in="B" specularExponent="128" result="S">
            <feDistantLight azimuth="225" elevation="70" />
          </feSpecularLighting>
          <feComposite
            in="S" in2="SourceAlpha" operator="in" result="L" />
          <feComposite
            in="SourceGraphic" in2="L" operator="arithmetic" k2="1" k3="1" />
        </filter>

        <filter id="in-and-out">
          <feGaussianBlur stdDeviation="4" in="SourceAlpha" />
          <feOffset result="fO" dy="5" dx="5" />
          <feComposite in2="fO" operator="xor" in="SourceGraphic" />
        </filter>

        <filter id="speed">
          <feDropShadow stdDeviation="60,2" dx="70" dy="1" />
        </filter>

        <filter id="motion-blur">
          <feGaussianBlur stdDeviation="8 0" />
        </filter>

        <filter id="motion">
          <feGaussianBlur stdDeviation="30 1" />
        </filter>

        <filter id="lightB1">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="B" />
          <feSpecularLighting
            in="B" specularExponent="64" surfaceScale=".7" result="S">
              <feDistantLight azimuth="315" elevation="60" />
          </feSpecularLighting>
          <feComposite in="S" in2="SourceAlpha" operator="in" result="L" />
          <feComposite
            in="SourceGraphic" in2="L" operator="arithmetic" k2="1" k3="1" />
        </filter>

        <filter id="erode1">
          <feMorphology operator="erode" radius="1" />
        </filter>

        <filter id="mono">
          <feComponentTransfer>
            <feFuncR type="table" tableValues="1 1" />
            <feFuncG type="table" tableValues="0 .98" />
            <feFuncB type="table" tableValues="0 .98" />
          </feComponentTransfer>
        </filter>
      </svg>
    )
  }
}

export default SVGFilters
