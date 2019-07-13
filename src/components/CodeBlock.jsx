/* eslint-disable react/no-array-index-key */
import React from 'react'
import Types from 'prop-types'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { Box } from 'rebass'

const CodeBlock = ({ children, className: cn, ...props }) => {
  const lang = cn.replace(/language-/, '')
  return (
    <Box {...props}>
      <Highlight
        {...defaultProps}
        code={children}
        language={lang}
        theme={undefined}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, padding: '20px' }}>
            <code>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </Box>
  )
}

CodeBlock.propTypes = {
  children: Types.node.isRequired,
  className: Types.string.isRequired,
}

export default CodeBlock
