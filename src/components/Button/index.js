import PropTypes from "prop-types"
import styles from "./style.styl"
import cx from "classnames"



export const Button = ({ children, color, gradient, icon, outlined, onClick, style }) => {
  style = { ...style }
  if( gradient ) style.backgroundImage = `linear-gradient(to right, ${gradient.from}, ${gradient.to})`
  else if( color ) {
    const attribute = outlined ? "color" : "backgroundColor"
    style[attribute] = color
  }

  return (
    <button className={cx(styles.button, (icon && !children.length) && styles["icon-button"], outlined && styles["outlined-button"])} onClick={onClick} style={style}>
      {icon} {children}
    </button>
  )
}



Button.propTypes = ({
  children: PropTypes.node,
  color:    PropTypes.string,
  gradient: PropTypes.shape({
    from: PropTypes.string.isRequired,
    to:   PropTypes.string.isRequired,
  }),
  icon:     PropTypes.node,
  outlined: PropTypes.bool,
  onClick:  PropTypes.func,
  style:    PropTypes.object
})



export default Button
