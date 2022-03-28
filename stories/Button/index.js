import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material';
import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';

const CustomButton = styled((props) => <MuiButton {...props} />)(
  ({ theme, ...props }) => ({
    padding: '8px',
    paddingLeft: props.type !== 'standard' || props.leftarrow ? '8px' : '20px',
    paddingRight:
      props.type !== 'standard' || props.rightarrow ? '8px' : '20px',
    height: props.height,
    borderRadius: '10px',
    fontFamily: 'Inter',
    fontSize: '14px',
    lineHeight: '16px',
    fontStyle: 'normal',
    columnGap: '8px',
    minWidth: '32px',
    width: 'fit-content',

    '&.MuiButton-outlined': {
      color: '#27BFC6',
      '&:hover': {
        color: theme.palette.primary.dark,
        background: 'transparent',
      },

      ':disabled': {
        color: theme.palette.action.disabled,
      },
    },

    '&.MuiButton-text': {
      color: theme.palette.primary.main,
      '&:hover': {
        color: theme.palette.primary.dark,
        background: 'transparent',
      },

      ':disabled': {
        color: theme.palette.action.disabled,
      },
    },
  })
);

const Button = ({
  variant,
  type,
  leftarrow,
  rightarrow,
  disabled,
  width,
  height,
  label,
}) => {
  const theme = useTheme();

  return (
    <CustomButton
      theme={theme}
      width={width}
      height={height}
      variant={variant}
      disabled={disabled}
      type={type}
      leftarrow={leftarrow ? 1 : 0}
      rightarrow={rightarrow ? 1 : 0}
    >
      {leftarrow && <ArrowBackIcon sx={{ width: '16px', height: '16px' }} />}
      {label}
      {rightarrow && (
        <ArrowForwardIcon sx={{ width: '16px', height: '16px' }} />
      )}
    </CustomButton>
  );
};

Button.propTypes = {
  /**
   * Button variant
   */
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  /**
   * Button type
   */
  type: PropTypes.oneOf(['standard', 'icon', 'number']),
  /**
   * Has left arrow?
   */
  leftarrow: PropTypes.bool,
  /**
   * Has right arrow?
   */
  rightarrow: PropTypes.bool,
  /**
   * Is disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Button height
   */
  height: PropTypes.number,
  /**
   * Button Label
   */
  label: PropTypes.string,
  /**
   * Button onClick Action
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'contained',
  type: 'standard',
  leftarrow: false,
  rightarrow: false,
  disabled: false,
  height: 32,
  label: 'Button',
  onClick: undefined,
};

export default Button;
