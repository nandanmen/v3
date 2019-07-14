/* eslint-disable react/button-has-type */
import React from 'react'
import styled from 'styled-components'
import Types from 'prop-types'
import themeGet from '@styled-system/theme-get'
import { typography } from 'styled-system'
import { KeyboardArrowRight, KeyboardArrowUp } from 'styled-icons/material'
import Downshift from 'downshift'
import { navigate } from 'gatsby'
import { Box, Flex } from 'rebass'

import useAlgorithms from '@util/useAlgorithms'

const itemToString = alg => (alg ? `${alg.number}   ${alg.title}` : '')

const SelectAlgo = ({ initial, ...props }) => {
  const problems = useAlgorithms()
  return (
    <Downshift
      onChange={selection => navigate(`algorithms/${selection.number}`)}
      itemToString={itemToString}
      initialSelectedItem={problems.find(p => p.number === initial)}
    >
      {({
        getRootProps,
        getItemProps,
        getToggleButtonProps,
        getMenuProps,
        isOpen,
        selectedItem,
        highlightedIndex,
      }) => (
        <Container {...getRootProps()} {...props}>
          <Button
            py={[2]}
            px={[3]}
            fontFamily="mono"
            mb={[4]}
            {...getToggleButtonProps()}
          >
            {selectedItem ? itemToString(selectedItem) : 'Open'}
            {isOpen ? (
              <KeyboardArrowUp size="1.5em" />
            ) : (
              <KeyboardArrowRight size="1.5em" />
            )}
          </Button>
          {isOpen ? (
            <Menu {...getMenuProps()} fontFamily="mono">
              {problems.map((problem, index) => (
                <Item
                  key={problem.id}
                  {...getItemProps({
                    index,
                    item: problem,
                    isActive: highlightedIndex === index,
                    isSelected: selectedItem === problem,
                  })}
                  px={[3]}
                >
                  {itemToString(problem)}
                </Item>
              ))}
            </Menu>
          ) : null}
        </Container>
      )}
    </Downshift>
  )
}

SelectAlgo.propTypes = {
  initial: Types.string,
}

SelectAlgo.defaultProps = {
  initial: '002',
}

export default SelectAlgo

const Container = styled(Box)`
  position: relative;
`

const Button = styled(Flex).attrs({ as: 'button' })`
  ${typography}

  justify-content: space-between;
  align-items: center;

  width: 100%;
  border: 1px solid ${themeGet('colors.grays.med')};
  color: ${themeGet('colors.grays.dark')};
  border-radius: 8px;
  text-align: left;
  background: none;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:focus,
  &:hover {
    outline: none;
    border: 1px solid ${themeGet('colors.blue')};
    color: ${themeGet('colors.blue')};
  }
`

const Menu = styled(Box).attrs({ as: 'ul' })`
  ${typography}
  list-style: none;
  position: absolute;
  top: calc(100% + 8px);
  width: 100%;
  background: white;
  z-index: 10;
  border: 1px solid ${themeGet('colors.grays.med')};
  border-radius: 8px;
  font-size: 14px;
`

const Item = styled(Box).attrs({ as: 'li' })`
  ${({ isSelected }) => isSelected && `font-weight: bold;`}
  ${({ isActive }) => isActive && `background: #e6f7ff;`}

  cursor: pointer;
  padding-top: ${themeGet('space.1')}px;
  padding-bottom: ${themeGet('space.1')}px;

  &:first-child {
    border-radius: 8px 8px 0 0;
    padding-top: ${themeGet('space.2')}px;
  }

  &:last-child {
    border-radius: 0 0 8px 8px;
    padding-bottom: ${themeGet('space.2')}px;
  }
`
